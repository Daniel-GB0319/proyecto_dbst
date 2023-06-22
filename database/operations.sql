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

-- Actualiza el historial cuando un paciente tiene una nueva receta
DELIMITER //
CREATE TRIGGER ActualizarHistorialRecetas
AFTER INSERT ON db_receta
FOR EACH ROW
BEGIN
    
    
    
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


/*			Funciones			*/

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
    
    SET ult_consulta = (SELECT fecha FROM db_paciente p INNER JOIN db_consulta c ON p.id_paciente = c.paciente_id_paciente WHERE 'CURP1' = p.CURP ORDER BY fecha DESC LIMIT 1);
    
    IF ult_consulta >= CURDATE() THEN SET estado = 1;
    ELSE SET estado = 0;
    END IF;
    
    RETURN estado;
END //
DELIMITER ;

-- Calcula el precio total de la receta
DELIMITER //
CREATE FUNCTION CalcularPrecioTotal(id_receta VARCHAR(10))
RETURNS FLOAT
READS SQL DATA
BEGIN
    DECLARE total FLOAT;

    SELECT SUM(m.precio) INTO total
    FROM db_receta_medicamento rm
    INNER JOIN db_medicamento m ON rm.medicamento_id_medicamento = m.id_medicamento
    WHERE rm.receta_id_receta = id_receta;

    RETURN total;
END //
DELIMITER ;


/*			Stored Procedures			*/

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
        -- Insertar el paciente
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

-- Visualizar historial de citas por parte del paciente
DELIMITER //
CREATE PROCEDURE sp_VerHistorialCitasPaciente(
    id_paciente INT
)
BEGIN
	DECLARE curp_paciente VARCHAR (18);
	-- Doctor, fecha, dia , hora, 
    SELECT CURP INTO curp_paciente FROM db_paciente p WHERE id_paciente = p.id_paciente;
    SELECT * FROM db_historial_medico hm WHERE curp_paciente = hm.curp_paciente;
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

/* --------------------------------------------------------------------------------------- */



-- Store procedure al que se le pase el ID usuario y te diga qué tipo de usuario es
DELIMITER //
CREATE PROCEDURE VerificarTipoUsuario(id_usuario int)
BEGIN
	SELECT id_tipoUsuario from db_usuario AS U JOIN tipo_Usuario AS T ON U.tipo_usuario = T.id_tipoUsuario
    WHERE id_usuario = U.id_usuario;
END //
DELIMITER ;