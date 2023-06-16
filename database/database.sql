-- VERSION 1.1
create database proyecto_dbst;

use proyecto_dbst;

CREATE TABLE tipo_usuario (
    id_tipoUsuario int PRIMARY KEY,
    nombre_tipoUsuario VARCHAR(15) NOT NULL
);

CREATE TABLE db_usuario (
    id_usuario int AUTO_INCREMENT PRIMARY KEY,
    tipo_usuario int NOT NULL,
    correo VARCHAR(20) NOT NULL,
    password VARCHAR(64) NOT NULL,
    ultimo_acceso DATETIME,
    CONSTRAINT fk_tipo_usuario FOREIGN KEY (tipo_usuario)
    REFERENCES tipo_usuario(id_tipoUsuario)
);

CREATE TABLE db_administrador (
    id_administrador int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario int NOT NULL,
    CONSTRAINT fk_usuario_admin FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

CREATE TABLE db_paciente (
    id_paciente int AUTO_INCREMENT PRIMARY KEY,
    CURP VARCHAR (18) NOT NULL,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
    tipo_sangre VARCHAR(3) NOT NULL,
    calle VARCHAR(20) NOT NULL,
    num_ext INT,
    num_int INT,
    colonia VARCHAR(20) NOT NULL,
    delegacion VARCHAR(20) NOT NULL,
    entidad_federativa VARCHAR(20) NOT NULL,
    fecha_nac DATE NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    aseguradora VARCHAR(15),
    usuario_id_usuario int NOT NULL,
    CONSTRAINT fk_usuario_paciente FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

CREATE TABLE catalogo_alergia (
    id_alergia int AUTO_INCREMENT PRIMARY KEY,
    nombre_alergia VARCHAR(15) NOT NULL
);

CREATE TABLE db_alergias_paciente (
    id_alergia_paciente int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_alergia int NOT NULL,
    paciente_id_paciente int NOT NULL,
    descripcion VARCHAR(30),
    CONSTRAINT fk_paciente_alergia FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente),
    CONSTRAINT fk_alergias FOREIGN KEY (id_alergia)
    REFERENCES catalogo_alergia(id_alergia)
);

CREATE TABLE db_consultorio (
    id_consultorio int AUTO_INCREMENT PRIMARY KEY,
    numero INT NOT NULL,
    estado VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30)
);


CREATE TABLE db_especialidad (
    id_especialidad int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(30)
);

CREATE TABLE db_horario (
    id_horario int AUTO_INCREMENT PRIMARY KEY,
    turno VARCHAR(10) NOT NULL,
    dia VARCHAR(10) NOT NULL,
    hora_entrada TIME NOT NULL,
    hora_salida TIME NOT NULL,
    hora_ini_receso TIME NOT NULL,
    hora_fin_receso TIME NOT NULL
);

CREATE TABLE db_doctor (
    id_doctor int AUTO_INCREMENT PRIMARY KEY,
    CURP VARCHAR (18) NOT NULL,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
    calle VARCHAR(20) NOT NULL,
    num_ext INT,
    num_int INT,
    colonia VARCHAR(20) NOT NULL,
    delegacion VARCHAR(20) NOT NULL,
    entidad_federativa VARCHAR(20) NOT NULL,
    fecha_nac DATE NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    aseguradora VARCHAR(15),
    usuario_id_usuario int NOT NULL,
    consultorio_id_consultorio INT NOT NULL,
    horario_id_horario INT NOT NULL,
    especialidad_id_especialidad INT NOT NULL,
    CONSTRAINT fk_usuario_doctor FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario),
    CONSTRAINT fk_consultorio_doctor FOREIGN KEY (consultorio_id_consultorio)
    REFERENCES db_consultorio(id_consultorio),
    CONSTRAINT fk_horario_doctor FOREIGN KEY (horario_id_horario)
    REFERENCES db_horario(id_horario),
    CONSTRAINT fk_especialidad_doctor FOREIGN KEY (especialidad_id_especialidad)
    REFERENCES db_especialidad(id_especialidad)
);


CREATE TABLE db_horario_consulta (
    id_horario_consulta int AUTO_INCREMENT PRIMARY KEY,
	inicio_consulta TIME NOT NULL,
    fin_consulta TIME NOT NULL
);

CREATE TABLE db_consulta (
    id_consulta int AUTO_INCREMENT PRIMARY KEY,
    hora TIME NOT NULL,
    fecha DATE NOT NULL,
    costo double NOT NULL,
    paciente_id_paciente int NOT NULL,
    doctor_id_doctor int NOT NULL,
    horario int NOT NULL,
    CONSTRAINT fk_paciente_consulta FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente),
    CONSTRAINT fk_doctor_consulta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor),
    CONSTRAINT fk_horario_consulta FOREIGN KEY (horario)
    REFERENCES db_horario_consulta(id_horario_consulta)
);

CREATE TABLE db_recepcionista (
    id_recepcionista int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario INT NOT NULL,
    horario_id_horario INT NOT NULL,
    CONSTRAINT fk_usuario_recepcionista FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario),
    CONSTRAINT fk_horario_recepcionista FOREIGN KEY (horario_id_horario)
    REFERENCES db_horario(id_horario)
);


CREATE TABLE db_medicamento (
    id_medicamento int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    compuesto VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30),
    farmaceutica VARCHAR(20) NOT NULL,
    cantidad INT NOT NULL,
    precio FLOAT NOT NULL,
    req_receta CHAR(2)
);

CREATE TABLE db_receta (
    id_receta int AUTO_INCREMENT PRIMARY KEY,
    fecha_expedicion TIMESTAMP NOT NULL,
    observaciones VARCHAR(30),
    diagnostico VARCHAR(30) NOT NULL,
    costo_total FLOAT NOT NULL,
    doctor_id_doctor int NOT NULL,
    medicamento_id_medicamento int NOT NULL,
    CONSTRAINT fk_doctor_receta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor)
);

CREATE TABLE db_receta_medicamento (
    receta_id_receta int AUTO_INCREMENT NOT NULL,
    medicamento_id_medicamento int NOT NULL,
    CONSTRAINT fk_receta_rm FOREIGN KEY (receta_id_receta)
    REFERENCES db_receta(id_receta),
    CONSTRAINT fk_medicamento_rm FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento)
);

CREATE TABLE db_proveedor (
    id_proveedor int AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    telefono INT,
    correo VARCHAR(20) NOT NULL
);

CREATE TABLE db_pedido (
    id_pedido int  AUTO_INCREMENT PRIMARY KEY,
    medicamento_id_medicamento int  NOT NULL,
    proveedor_id_proveedor int NOT NULL,
    CONSTRAINT fk_medicamento_pedido FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento),
    CONSTRAINT fk_proveedor_pedido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

CREATE TABLE db_dias_surtido (
    id_surtido int AUTO_INCREMENT PRIMARY KEY,
    dia VARCHAR(15) NOT NULL,
    hora TIME,
    proveedor_id_proveedor int NOT NULL,
    CONSTRAINT fk_proveedor_surtido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

CREATE TABLE db_registro_usuarios (
    id_registro int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_usuario int NOT NULL,
    fecha_registro DATE NOT NULL,
    hora_registro TIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES db_usuario(id_usuario)
);

CREATE TABLE db_historial_medico (
    id_historial INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    paciente_id_paciente INT NOT NULL NOT NULL,
    fecha_registro DATE NOT NULL,
    hora_registro TIME NOT NULL,
    FOREIGN KEY (paciente_id_paciente) REFERENCES db_paciente(id_paciente)
);

CREATE TABLE db_historial_consulta (
    historial_id_historial int AUTO_INCREMENT primary key,
    consulta_id_consulta int,
    FOREIGN KEY (historial_id_historial) REFERENCES db_historial_medico(id_historial),
    FOREIGN KEY (consulta_id_consulta) REFERENCES db_consulta(id_consulta)
);

CREATE TABLE db_historial_receta (
    historial_id_historial int AUTO_INCREMENT,
    receta_id_receta int,
    FOREIGN KEY (historial_id_historial) REFERENCES db_historial_medico(id_historial),
    FOREIGN KEY (receta_id_receta) REFERENCES db_receta(id_receta)
);


-- ### Funciones Disponibles ##
-- Calcula el precio total de la receta
DELIMITER //
CREATE FUNCTION CalcularPrecioTotal(id_receta VARCHAR(10))
RETURNS FLOAT
BEGIN
    DECLARE total FLOAT;

    SELECT SUM(m.precio) INTO total
    FROM db_receta_medicamento rm
    INNER JOIN db_medicamento m ON rm.medicamento_id_medicamento = m.id_medicamento
    WHERE rm.receta_id_receta = id_receta;

    RETURN total;
END //
DELIMITER ;


-- Calcula la edad
DELIMITER //
CREATE FUNCTION CalcularEdad(fecha_nacimiento DATE)
RETURNS INTEGER
BEGIN
    DECLARE edad INTEGER;
    SET edad = YEAR(CURRENT_DATE()) - YEAR(fecha_nacimiento);
    IF MONTH(CURRENT_DATE()) < MONTH(fecha_nacimiento) THEN
        SET edad = edad - 1;
    ELSEIF MONTH(CURRENT_DATE()) = MONTH(fecha_nacimiento) AND DAY(CURRENT_DATE()) < DAY(fecha_nacimiento) THEN
        SET edad = edad - 1;
    END IF;
    RETURN edad;
END //
DELIMITER ;


-- ### Script Stored Procedures ###
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
    WHERE H.dia = dia
        AND horario >= H.hora_entrada
        AND horario <= H.hora_salida;
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

-- ## Triggers ##
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
CREATE TRIGGER ActualizarHistorialMedico
AFTER INSERT ON db_consulta
FOR EACH ROW
BEGIN
    INSERT INTO db_historial_medico (paciente_id_paciente, fecha_registro, hora_registro)
    VALUES (NEW.paciente_id_paciente, CURDATE(), CURTIME());
    
    INSERT INTO db_historial_consulta (historial_id_paciente, consulta_id_consulta)
    VALUES (NEW.paciente_id_paciente, NEW.id_consulta);
END //
DELIMITER ;


-- Actualiza el historial cuando un paciente tiene una nueva receta
DELIMITER //
CREATE TRIGGER ActualizarHistorialMedicoReceta
AFTER INSERT ON db_receta
FOR EACH ROW
BEGIN
    INSERT INTO db_historial_medico (paciente_id_paciente, fecha_registro, hora_registro)
    VALUES (NEW.paciente_id_paciente, CURDATE(), CURTIME());
    
    INSERT INTO db_historial_receta (historial_id_paciente, receta_id_receta)
    VALUES (NEW.paciente_id_paciente, NEW.id_receta);
END //
DELIMITER ;



-- CALL sp_InsertarPaciente('CURP1', 'Paciente1', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 7);
-- CALL sp_InsertarPaciente('CURPX', 'Paciente8', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 9);
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

-- CALL sp_InsertarPaciente('CURP1', 'Paciente1', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 7);
-- CALL sp_InsertarPaciente('CURPX', 'Paciente8', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 9);

-- Store procedure al que se le pase el ID usuario y te diga qué tipo de usuario es
DELIMITER //
CREATE PROCEDURE VerificarTipoUsuario(id_usuario int)
BEGIN
	SELECT id_tipoUsuario from db_usuario AS U JOIN tipo_Usuario AS T ON U.tipo_usuario = T.id_tipoUsuario
    WHERE id_usuario = U.id_usuario;
END //
DELIMITER ;

-- CALL VerificarTipoUsuario('6');