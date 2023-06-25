-- VERSION 1.1
use proyecto_dbst;


/*			Triggers			*/

-- Registra la fecha y hora en la bitacora cuando se registra un nuevo usuario al sistema
DELIMITER //
CREATE TRIGGER RegistroNuevoUsuario
AFTER INSERT
ON db_usuario
FOR EACH ROW
BEGIN
    DECLARE id_usuario VARCHAR(10);
    SET id_usuario = NEW.id_usuario;
    INSERT INTO db_registro_usuarios (id_usuario, fecha_registro, hora_registro)
    VALUES (id_usuario, CURRENT_DATE(), CURRENT_TIME());
END //
DELIMITER ;

-- Actualiza el historial cuando un paciente tiene una nueva consulta
DELIMITER //
CREATE TRIGGER ActualizarHistorialConsultas
AFTER INSERT ON db_consulta
FOR EACH ROW
BEGIN
    INSERT INTO db_historial_consulta (fecha_registro, hora_registro, consulta_id_consulta, paciente_id_paciente, doctor_id_doctor,
    costo_consulta, fecha_consulta, hora_inicio, hora_fin) VALUES 
    (CURDATE(), CURTIME(), NEW.id_consulta, NEW.paciente_id_paciente, NEW.doctor_id_doctor, NEW.costo, NEW.fecha, 
    (SELECT inicio_consulta FROM db_horario_consulta WHERE id_horario_consulta = NEW.horario),
    (SELECT fin_consulta FROM db_horario_consulta WHERE id_horario_consulta = NEW.horario));
END //
DELIMITER ;

-- Actualiza el historial cuando un paciente tiene una nueva consulta
DELIMITER //
CREATE TRIGGER ActualizarHistorialMedico
AFTER INSERT ON db_receta
FOR EACH ROW
BEGIN
	DECLARE consulta INT;
    SELECT consulta_id_consulta INTO consulta FROM db_historial_consulta WHERE NEW.doctor_id_doctor = doctor_id_doctor AND fecha_consulta = DATE(NEW.fecha_expedicion) AND TIME(NEW.fecha_expedicion) BETWEEN hora_inicio AND hora_fin;
    
    INSERT INTO db_historial_medico (fecha_registro, hora_registro, consulta_id_consulta, receta_id_receta, curp_doctor, curp_paciente, observaciones, diagnostico, total_servicio)
    VALUES
    (CURDATE(), CURTIME(), consulta, NEW.id_receta, (SELECT CURP FROM db_receta INNER JOIN db_doctor ON doctor_id_doctor = id_doctor WHERE receta_id_receta = id_receta),
    (SELECT CURP FROM db_historial_consulta INNER JOIN db_paciente ON paciente_id_paciente = id_paciente WHERE consulta = consulta_id_consulta),
    NEW. observaciones, NEW.diagnostico, (SELECT costo_consulta FROM db_historial_consulta WHERE consulta = consulta_id_consulta) + NEW.costo_total);
END //
DELIMITER ;

/*-- Actualiza el historial cuando un paciente tiene una nueva receta
DELIMITER //
CREATE TRIGGER ActualizarHistorialRecetas
AFTER INSERT ON db_receta
FOR EACH ROW
BEGIN
    
    
    
END //
DELIMITER ;*/

/*			Funciones			*/

-- Obtiene el tipo de usuario
DELIMITER //
CREATE FUNCTION MostrarNombreTipoUsuario(id_usuario int)
RETURNS VARCHAR(15)
READS SQL DATA
BEGIN
	DECLARE tipo VARCHAR(15);
	SET tipo = (SELECT nombre_tipoUsuario FROM db_usuario AS U JOIN tipo_Usuario AS T ON U.tipo_usuario = T.id_tipoUsuario
    WHERE id_usuario = U.id_usuario);
    RETURN tipo;
END //
DELIMITER ;

-- Calcula la edad
DELIMITER //
CREATE FUNCTION CalcularEdad(fecha_nacimiento DATE)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE edad INT;
    SET edad = YEAR(CURRENT_DATE()) - YEAR(fecha_nacimiento);
    IF MONTH(CURRENT_DATE()) < MONTH(fecha_nacimiento) THEN
        SET edad = edad - 1;
    ELSEIF MONTH(CURRENT_DATE()) = MONTH(fecha_nacimiento) AND DAY(CURRENT_DATE()) < DAY(fecha_nacimiento) THEN
        SET edad = edad - 1;
    END IF;
    RETURN edad;
END //
DELIMITER ;

-- Verifica que el paciente no tenga citas , para baja de paciente
DELIMITER //
CREATE FUNCTION ComprobarCitasPaciente(curp VARCHAR (18))
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE estado INT;
    DECLARE ult_consulta DATE;
    
    SET ult_consulta = (SELECT fecha FROM db_paciente p INNER JOIN db_consulta c ON p.id_paciente = c.paciente_id_paciente WHERE curp = p.CURP ORDER BY fecha DESC LIMIT 1);
    
    IF ult_consulta >= CURDATE() THEN SET estado = 1;
    ELSE SET estado = 0;
    END IF;
    
    RETURN estado;
END //
DELIMITER ;

-- Verifica que el doctor no tenga citas , para baja de doctor
DELIMITER //
CREATE FUNCTION ComprobarCitasDoctor(curp VARCHAR (18))
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE estado INT;
    DECLARE ult_consulta DATE;
    
    SET ult_consulta = (SELECT fecha FROM db_doctor d INNER JOIN db_consulta c ON d.id_doctor = c.doctor_id_doctor WHERE curp = d.CURP ORDER BY fecha DESC LIMIT 1);
    
    IF ult_consulta >= CURDATE() THEN SET estado = 1;
    ELSE SET estado = 0;
    END IF;
    
    RETURN estado;
END //
DELIMITER ;

-- Calcula el precio total de la receta
DELIMITER //
CREATE FUNCTION CalcularPrecioTotal(id_receta VARCHAR(10))
RETURNS DOUBLE
READS SQL DATA
BEGIN
    DECLARE total DOUBLE;
	
    SELECT SUM(cantidad_medicamento*precio) INTO total
    FROM db_medicamento
    INNER JOIN db_receta_medicamento ON id_medicamento = medicamento_id_medicamento
    WHERE receta_id_receta = id_receta;

    RETURN total;
END //
DELIMITER ;


/*			Stored Procedures			*/

-- Store procedure al que se le pase el ID usuario y te diga qué tipo de usuario es
DELIMITER //
CREATE PROCEDURE VerificarTipoUsuario(id_usuario int)
BEGIN
	SELECT id_tipoUsuario from db_usuario AS U JOIN tipo_Usuario AS T ON U.tipo_usuario = T.id_tipoUsuario
    WHERE id_usuario = U.id_usuario;
END //
DELIMITER ;

-- Para verificar que no exista el paciente antes de insertar
DELIMITER //
CREATE PROCEDURE sp_InsertarPaciente(
    p_CURP VARCHAR(18),
    p_nombre VARCHAR(15),
    p_ap_paterno VARCHAR(15),
    p_ap_materno VARCHAR(15),
    p_edad INT,
    p_tipo_sangre VARCHAR(3),
    p_calle VARCHAR(20),
    p_num_ext INT,
    p_num_int INT,
    p_colonia VARCHAR(20),
    p_delegacion VARCHAR(20),
    p_entidad_federativa VARCHAR(20),
    p_fecha_nac DATE,
    p_peso FLOAT,
    p_altura FLOAT,
    p_sexo VARCHAR(1),
    p_aseguradora VARCHAR(15),
    p_usuario_id_usuario INT
)
BEGIN
    -- Verificamos si existe el paciente
    IF EXISTS (
        SELECT 1
        FROM db_paciente
        WHERE CURP = p_CURP
    )
    THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El paciente ya existe';
    ELSE
        -- Insertar paciente
        INSERT INTO db_paciente (
            CURP, nombre, ap_paterno, ap_materno, edad, tipo_sangre, calle, num_ext,
            num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura,
            sexo, aseguradora, usuario_id_usuario
        ) VALUES (
            p_CURP, p_nombre, p_ap_paterno, p_ap_materno, p_edad, p_tipo_sangre, p_calle, p_num_ext,
            p_num_int, p_colonia, p_delegacion, p_entidad_federativa, p_fecha_nac, p_peso, p_altura,
            p_sexo, p_aseguradora, p_usuario_id_usuario
        );
    END IF;
END //
DELIMITER ;

-- Para verificar que no exista doctor antes de insertar
DELIMITER //
CREATE PROCEDURE sp_InsertarDoctor(
	d_CURP VARCHAR (18),
    d_nombre VARCHAR(15),
    d_ap_paterno VARCHAR(15),
    d_ap_materno VARCHAR(15),
    d_edad INT,
    d_calle VARCHAR(20),
    d_num_ext INT,
    d_num_int INT,
    d_colonia VARCHAR(20),
    d_delegacion VARCHAR(20),
    d_entidad_federativa VARCHAR(20),
    d_fecha_nac DATE,
    d_sexo VARCHAR(1),
    d_aseguradora VARCHAR(15),
    d_usuario_id_usuario INT,
    d_consultorio_id_consultorio INT,
    d_horario_id_horario INT,
    d_especialidad_id_especialidad INT
)
BEGIN
    -- Verificamos si existe doctor
    IF EXISTS (
        SELECT 1
        FROM db_doctor
        WHERE CURP = d_CURP
    )
    THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El doctor ya existe';
    ELSE
        -- Insertar doctor
        INSERT INTO db_doctor (
            CURP, nombre, ap_paterno, ap_materno, edad, calle, num_ext, num_int, colonia,
            delegacion, entidad_federativa, fecha_nac, sexo, aseguradora, usuario_id_usuario,
            consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad            
        ) VALUES (
			d_CURP, d_nombre, d_ap_paterno, d_ap_materno, d_edad, d_calle, d_num_ext, d_num_int, d_colonia,
            d_delegacion, d_entidad_federativa, d_fecha_nac, d_sexo, d_aseguradora, d_usuario_id_usuario,
            d_consultorio_id_consultorio, d_horario_id_horario, d_especialidad_id_especialidad
        );
    END IF;
END //
DELIMITER ;

-- Para verificar que no exista recepcionista antes de insertar
DELIMITER //
CREATE PROCEDURE sp_InsertarRecepcionista
(
	r_nombre VARCHAR(15),
    r_ap_paterno VARCHAR(15),
    r_ap_materno VARCHAR(15),
    r_usuario_id_usuario INT,
    r_horario_id_horario INT
)
BEGIN
    -- Verificamos si existe recepcionista
    IF EXISTS (
        SELECT 1
        FROM db_recepcionsita
        WHERE r_nombre = nombre AND r_ap_paterno = ap_paterno AND r_ap_materno = ap_materno
    )
    THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La recepcionista ya existe';
    ELSE
        -- Insertar recepcionista
        INSERT INTO db_recepcionista (
            nombre, ap_paterno, ap_materno, usuario_id_usuario, horario_id_horario
        ) VALUES (
			r_nombre, r_ap_paterno, r_ap_materno, r_usuario_id_usuario, r_horario_id_horario
        );
    END IF;
END //
DELIMITER ;

-- Visualizar historial de citas por parte del doctor
DELIMITER //
CREATE PROCEDURE sp_VerHistorialCitasDoctor(
    d_id_doctor INT, d_nombre VARCHAR(15), d_ap_paterno VARCHAR(15), d_ap_materno VARCHAR(15)
)
BEGIN
	SELECT consulta_id_consulta, CONCAT(D.nombre, ' ', D.ap_paterno, ' ', D.ap_materno) AS nombre_doctor, CONCAT(P.nombre, ' ', P.ap_paterno, ' ', P.ap_materno) AS nombre_paciente,fecha_consulta, hora_inicio, hora_fin, numero AS consultorio
	FROM db_historial_consulta INNER JOIN db_doctor D ON doctor_id_doctor = D.id_doctor
    INNER JOIN db_paciente P ON  paciente_id_paciente = P.id_paciente
    INNER JOIN db_consultorio ON consultorio_id_consultorio = id_consultorio
    WHERE d_id_doctor = D.id_doctor AND d_nombre = D.nombre AND d_ap_paterno = D.ap_paterno AND d_ap_materno = D.ap_materno;
END //
DELIMITER ;

-- Visualizar citas proximas del doctor
DELIMITER //
CREATE PROCEDURE sp_VerCitasProximasDoctor(
    id_doctor INT
)
BEGIN
	SELECT consulta_id_consulta, CONCAT(D.nombre, ' ', D.ap_paterno, ' ', D.ap_materno) AS nombre_doctor, CONCAT(P.nombre, ' ', P.ap_paterno, ' ', P.ap_materno) AS nombre_paciente,fecha_consulta, hora_inicio, hora_fin, numero AS consultorio
	FROM db_historial_consulta INNER JOIN db_doctor D ON doctor_id_doctor = D.id_doctor
    INNER JOIN db_paciente P ON  paciente_id_paciente = P.id_paciente
    INNER JOIN db_consultorio ON consultorio_id_consultorio = id_consultorio
    WHERE id_doctor = D.id_doctor AND fecha_consulta >= CURDATE();
END //
DELIMITER ;

-- Visualizar historial de citas por parte del paciente
DELIMITER //
CREATE PROCEDURE sp_VerHistorialCitasPaciente(
    d_id_paciente INT
)
BEGIN
    SELECT consulta_id_consulta, CONCAT(D.nombre, ' ', D.ap_paterno, ' ', D.ap_materno) AS nombre_doctor, CONCAT(P.nombre, ' ', P.ap_paterno, ' ', P.ap_materno) AS nombre_paciente,fecha_consulta, hora_inicio, hora_fin, costo_consulta, numero AS consultorio
	FROM db_historial_consulta INNER JOIN db_doctor D ON doctor_id_doctor = D.id_doctor
    INNER JOIN db_paciente P ON  paciente_id_paciente = P.id_paciente
    INNER JOIN db_consultorio ON consultorio_id_consultorio = id_consultorio
    WHERE d_id_paciente = P.id_paciente;
END //
DELIMITER ;

-- Visualizar citas proximas
DELIMITER //
CREATE PROCEDURE sp_VerCitasProximasPaciente(
    d_id_paciente INT
)
BEGIN
	SELECT consulta_id_consulta, CONCAT(D.nombre, ' ', D.ap_paterno, ' ', D.ap_materno) AS nombre_doctor, CONCAT(P.nombre, ' ', P.ap_paterno, ' ', P.ap_materno) AS nombre_paciente,fecha_consulta, hora_inicio, hora_fin, costo_consulta, numero AS consultorio
	FROM db_historial_consulta INNER JOIN db_doctor D ON doctor_id_doctor = D.id_doctor
    INNER JOIN db_paciente P ON  paciente_id_paciente = P.id_paciente
    INNER JOIN db_consultorio ON consultorio_id_consultorio = id_consultorio
    WHERE d_id_paciente = P.id_paciente AND fecha_consulta >= CURDATE();
END //
DELIMITER ;

-- Visualizar recetas emitidas por el doctor
DELIMITER //
CREATE PROCEDURE sp_VerRecetasDoctor(
    r_id_receta INT
)
BEGIN
	SELECT R.id_receta, DATE(R.fecha_expedicion) AS fecha, CONCAT(D.nombre, ' ', D.ap_paterno, ' ', D.ap_materno) AS nombre_doctor, CONCAT(P.nombre, ' ', P.ap_paterno, ' ', P.ap_materno) AS nombre_paciente, R.diagnostico, R.observaciones, M.nombre AS Medicamento, RM.cantidad_medicamento
    FROM db_receta R INNER JOIN db_receta_medicamento RM ON R.id_receta = RM.receta_id_receta
    INNER JOIN db_medicamento M ON RM.medicamento_id_medicamento = M.id_medicamento
    INNER JOIN db_doctor D ON R.doctor_id_doctor = D.id_doctor
    INNER JOIN db_historial_medico HM ON R.id_receta = HM.receta_id_receta
    INNER JOIN db_paciente P ON HM.curp_paciente = P.CURP
    WHERE r_id_receta = R.id_receta;
END //
DELIMITER ;

-- Visualizar historial medico de paciente
DELIMITER //
CREATE PROCEDURE sp_VerHistorialMedicoPaciente(
    p_id_paciente INT
)
BEGIN
	SELECT HM.id_historial, HM.fecha_registro, CONCAT(D.nombre, ' ', D.ap_paterno, ' ', D.ap_materno) AS nombre_doctor, CONCAT(P.nombre, ' ', P.ap_paterno, ' ', P.ap_materno) AS nombre_paciente, HM.diagnostico, C.numero, HM.total_servicio
    FROM db_historial_medico HM INNER JOIN db_doctor D ON HM.curp_doctor = D.CURP
    INNER JOIN db_consultorio C ON D.consultorio_id_consultorio = C.id_consultorio
    INNER JOIN db_paciente P ON HM.curp_paciente = P.CURP 
    WHERE p_id_paciente = P.id_paciente;
END //
DELIMITER ;


-- Busca los doctores disponibles por dia y horario
DELIMITER //
CREATE PROCEDURE DoctoresDisponiblesPorHorario(
    IN dia VARCHAR(10),
    IN horario TIME
)
BEGIN
    SELECT D.ap_paterno, D.ap_materno, D.nombre, H.hora_entrada, H.hora_salida
    FROM db_doctor D
    INNER JOIN db_horario H ON D.horario_id_horario = H.id_horario
    WHERE H.dia = dia AND horario >= H.hora_entrada AND horario <= H.hora_salida;
END //
DELIMITER ;

-- Procedure para obtener medicamento e id de pedido que trajo un proveedor
DELIMITER //
CREATE PROCEDURE ObtenerMedicamentosPorProveedor(
    IN nombre_proveedor VARCHAR(15)
)
BEGIN
    SELECT p.id_pedido, m.nombre AS nombre_medicamento
    FROM db_pedido p
    INNER JOIN db_proveedor pr ON p.proveedor_id_proveedor = pr.id_proveedor
    INNER JOIN db_medicamento m ON p.medicamento_id_medicamento = m.id_medicamento
    WHERE pr.nombre = nombre_proveedor;
END //
DELIMITER ;
