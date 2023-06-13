-- VERSION 1.1
create database proyecto_dbst;

use proyecto_dbst;

/*Catálogo de tipos de usuario*/
CREATE TABLE tipo_usuario (
    id_tipoUsuario VARCHAR(25) PRIMARY KEY,
    nombre_tipoUsuario VARCHAR(15) NOT NULL,
);

/*Catalogo de usuarios*/
INSERT INTO tipo_usuario(id_tipoUsuario, nombre_tipoUsuario) VALUES ('1','Administrador')
INSERT INTO tipo_usuario(id_tipoUsuario, nombre_tipoUsuario) VALUES ('2','Recepcionista')
INSERT INTO tipo_usuario(id_tipoUsuario, nombre_tipoUsuario) VALUES ('3','Doctor')
INSERT INTO tipo_usuario(id_tipoUsuario, nombre_tipoUsuario) VALUES ('4','Paciente')

SELECT * FROM tipo_usuario

ALTER TABLE db_usuario ALTER COLUMN correo VARCHAR (50) --tuvimos que cambiar el tamaño del correo 

CREATE TABLE db_usuario (
    id_usuario VARCHAR(10) PRIMARY KEY,
    tipo_usuario VARCHAR(25) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    password VARCHAR(64) NOT NULL,
    ultimo_acceso DATETIME,
	CONSTRAINT fk_tipo_usuario FOREIGN KEY (tipo_usuario)
    REFERENCES tipo_usuario(id_tipoUsuario)
);

/*INSERTS TIPOS DE USUARIO*/ 
INSERT INTO db_usuario(id_usuario, tipo_usuario, correo, password, ultimo_acceso) 
VALUES ('001','1','equipo_dbst@gmail.com','12345678',GETDATE())
INSERT INTO db_usuario(id_usuario, tipo_usuario, correo, password, ultimo_acceso) 
VALUES ('002','2','recepcionista_dbst@gmail.com','12345678',GETDATE())
INSERT INTO db_usuario(id_usuario, tipo_usuario, correo, password, ultimo_acceso) 
VALUES ('003','3','doctor1_dbst@gmail.com','12345678',GETDATE())
INSERT INTO db_usuario(id_usuario, tipo_usuario, correo, password, ultimo_acceso) 
VALUES ('004','4','paciente1_dbst@gmail.com','12345678',GETDATE())

select * from db_usuario

CREATE TABLE db_administrador (
    id_administrador VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_admin FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

INSERT INTO db_administrador(id_administrador, nombre, ap_paterno, ap_materno, usuario_id_usuario) 
VALUES ('001', 'Equipo', 'Paterno', 'Materno', '001' )

select * from db_administrador

ALTER TABLE db_paciente ALTER COLUMN calle VARCHAR (40)
ALTER TABLE db_paciente ALTER COLUMN colonia VARCHAR (40)
ALTER TABLE db_paciente ALTER COLUMN delegacion VARCHAR (40)
ALTER TABLE db_paciente ALTER COLUMN entidad_federativa VARCHAR (35)
ALTER TABLE db_paciente ALTER COLUMN aseguradora VARCHAR (30)

CREATE TABLE db_paciente (
    id_paciente VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
    tipo_sangre VARCHAR(3) NOT NULL,
    calle VARCHAR(40) NOT NULL,
    num_ext INT,
    num_int INT,
    colonia VARCHAR(40) NOT NULL,
    delegacion VARCHAR(40) NOT NULL,
    entidad_federativa VARCHAR(35) NOT NULL,
    fecha_nac DATE NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    aseguradora VARCHAR(30),
    usuario_id_usuario VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_paciente FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);



INSERT INTO db_paciente(id_paciente, nombre, ap_paterno, ap_materno, edad, tipo_sangre, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario) 
VALUES ('001', 'Pedro', 'Pica', 'Piedra', 90, 'O+', 'Piedradura', '113', '1', 'Roca Madre', 'Gustavo A. Madero', 'Ciudad de Mexico', '1933-09-09', 90.5, 1.72, 'M', NULL, '003')

select * from db_paciente


CREATE TABLE db_alergias (
    id_alergia VARCHAR(5) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(40),
    paciente_id_paciente VARCHAR(10) NOT NULL,
    CONSTRAINT fk_paciente_alergia FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente)
);

INSERT INTO db_alergias(id_alergia, nombre, descripcion, paciente_id_paciente) VALUES ('00001', 'Penicilina', 'Multiples afectaciones', '001')

CREATE TABLE db_consultorio (
    id_consultorio VARCHAR(5) PRIMARY KEY,
    numero INT NOT NULL,
    estado VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30)
);

INSERT INTO db_consultorio(id_consultorio, numero, estado, descripcion) VALUES ('001', 1, 'Disponible', 'Consultorio general')

CREATE TABLE db_especialidad (
    id_especialidad VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(30)
);

INSERT INTO db_especialidad(id_especialidad, nombre, descripcion) VALUES ('ES001', 'Cirujano General', 'Cirugia general')

ALTER TABLE db_horario ALTER COLUMN dia VARCHAR (30)

CREATE TABLE db_horario (
    id_horario VARCHAR(10) PRIMARY KEY,
    turno VARCHAR(30) NOT NULL,
    dia VARCHAR(10) NOT NULL,
    hora_entrada TIME NOT NULL,
    hora_salida TIME NOT NULL,
    hora_ini_receso TIME NOT NULL,
    hora_fin_receso TIME NOT NULL
);

INSERT INTO db_horario(id_horario, turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso) VALUES ('01', 'Matutino', 'L, M, X, J, V', '07:00', '16:00', '12:00', '13:00')


ALTER TABLE db_doctor ALTER COLUMN calle VARCHAR (40)
ALTER TABLE db_doctor ALTER COLUMN colonia VARCHAR (40)
ALTER TABLE db_doctor ALTER COLUMN delegacion VARCHAR (40)
ALTER TABLE db_doctor ALTER COLUMN entidad_federativa VARCHAR (35)
ALTER TABLE db_doctor DROP COLUMN peso;
ALTER TABLE db_doctor DROP COLUMN altura;
ALTER TABLE db_doctor DROP COLUMN aseguradora;
ALTER TABLE db_doctor ADD telefono VARCHAR (10);

CREATE TABLE db_doctor (
    id_doctor VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
	fecha_nac DATE NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    calle VARCHAR(20) NOT NULL,
    num_ext INT,
    num_int INT,
    colonia VARCHAR(20) NOT NULL,
    delegacion VARCHAR(20) NOT NULL,
    entidad_federativa VARCHAR(20) NOT NULL,
    usuario_id_usuario VARCHAR(10) NOT NULL,
    consultorio_id_consultorio VARCHAR(5) NOT NULL,
    horario_id_horario VARCHAR(10) NOT NULL,
    especialidad_id_especialidad VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_doctor FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario),
    CONSTRAINT fk_consultorio_doctor FOREIGN KEY (consultorio_id_consultorio)
    REFERENCES db_consultorio(id_consultorio),
    CONSTRAINT fk_horario_doctor FOREIGN KEY (horario_id_horario)
    REFERENCES db_horario(id_horario),
    CONSTRAINT fk_especialidad_doctor FOREIGN KEY (especialidad_id_especialidad)
    REFERENCES db_especialidad(id_especialidad)
);

INSERT INTO db_doctor(id_doctor, nombre, ap_paterno, ap_materno, edad, fecha_nac, sexo, telefono, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, usuario_id_usuario, consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad)
VALUES ('001', 'Malito', 'Rodriguez', 'Juarez', '45', '1978-10-02', 'M', '7767876890', 'Av. Wilfrido Massiu', 1, 2, 'Nuevo Industrial Vallejo', 'Gustavo A. Madero', 'Ciudad de Mexico', '003', '001', '01', 'ES001')

CREATE TABLE db_consulta (
    id_consulta VARCHAR(10) PRIMARY KEY,
    hora TIME NOT NULL,
    fecha DATE NOT NULL,
    paciente_id_paciente VARCHAR(10) NOT NULL,
    doctor_id_doctor VARCHAR(10) NOT NULL,
    CONSTRAINT fk_paciente_consulta FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente),
    CONSTRAINT fk_doctor_consulta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor)
);

CREATE TABLE db_recepcionista (
    id_recepcionista VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario VARCHAR(10) NOT NULL,
    horario_id_horario VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_recepcionista FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario),
    CONSTRAINT fk_horario_recepcionista FOREIGN KEY (horario_id_horario)
    REFERENCES db_horario(id_horario)
);

CREATE TABLE db_medicamento (
    id_medicamento VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    compuesto VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30),
    farmaceutica VARCHAR(20) NOT NULL,
    cantidad INT NOT NULL,
    precio FLOAT NOT NULL,
    req_receta CHAR(2)
);

CREATE TABLE db_receta (
    id_receta VARCHAR(10) PRIMARY KEY,
    fecha_expedicion TIMESTAMP NOT NULL,
    observaciones VARCHAR(30),
    diagnostico VARCHAR(30) NOT NULL,
    costo_total FLOAT NOT NULL,
    doctor_id_doctor VARCHAR(10) NOT NULL,
    medicamento_id_medicamento VARCHAR(10) NOT NULL,
    CONSTRAINT fk_doctor_receta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor),
    CONSTRAINT fk_medicamento_receta FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento)
);

CREATE TABLE db_receta_medicamento (
    receta_id_receta VARCHAR(10) NOT NULL,
    medicamento_id_medicamento VARCHAR(10) NOT NULL,
    CONSTRAINT fk_receta_rm FOREIGN KEY (receta_id_receta)
    REFERENCES db_receta(id_receta),
    CONSTRAINT fk_medicamento_rm FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento)
);

CREATE TABLE db_proveedor (
    id_proveedor VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    telefono INT,
    correo VARCHAR(20) NOT NULL
);

CREATE TABLE db_pedido (
    id_pedido VARCHAR(10) PRIMARY KEY,
    medicamento_id_medicamento VARCHAR(10) NOT NULL,
    proveedor_id_proveedor VARCHAR(10) NOT NULL,
    CONSTRAINT fk_medicamento_pedido FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento),
    CONSTRAINT fk_proveedor_pedido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

CREATE TABLE db_dias_surtido (
    id_surtido VARCHAR(5) PRIMARY KEY,
    dia VARCHAR(15) NOT NULL,
    hora TIME,
    proveedor_id_proveedor VARCHAR(10) NOT NULL,
    CONSTRAINT fk_proveedor_surtido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

CREATE TABLE db_registro_usuarios (
    id_registro INT PRIMARY KEY,
    id_usuario VARCHAR(10),
    fecha_registro DATE,
    hora_registro TIME,
    FOREIGN KEY (id_usuario) REFERENCES db_usuario(id_usuario)
);

CREATE TABLE db_historial_medico (
    id_historial VARCHAR(10) PRIMARY KEY,
    paciente_id_paciente VARCHAR(10) NOT NULL,
    fecha_registro DATE,
    hora_registro TIME,
    FOREIGN KEY (paciente_id_paciente) REFERENCES db_paciente(id_paciente)
);

CREATE TABLE db_historial_consulta (
    historial_id_historial VARCHAR(10),
    consulta_id_consulta VARCHAR(10),
    FOREIGN KEY (historial_id_historial) REFERENCES db_historial_medico(id_historial),
    FOREIGN KEY (consulta_id_consulta) REFERENCES db_consulta(id_consulta)
);

CREATE TABLE db_historial_receta (
    historial_id_historial VARCHAR(10),
    receta_id_receta VARCHAR(10),
    FOREIGN KEY (historial_id_historial) REFERENCES db_historial_medico(id_historial),
    FOREIGN KEY (receta_id_receta) REFERENCES db_receta(id_receta)
);


/* Store Procedures */
-- Busca los doctores disponibles por dia y horario
CREATE PROCEDURE DoctoresDisponiblesPorHorario
    @dia VARCHAR(10),
    @horario TIME
AS
BEGIN
    SET NOCOUNT ON;

    SELECT D.ap_paterno, D.ap_materno, D.nombre, H.hora_entrada, H.hora_salida
    FROM db_doctor D
    INNER JOIN db_horario H ON D.horario_id_horario = H.id_horario
    WHERE H.dia = @dia
        AND @horario >= H.hora_entrada
        AND @horario <= H.hora_salida;
END;


-- Procedure para obtener medicamento e id de pedido que trajo un proveedor
CREATE PROCEDURE ObtenerMedicamentosPorProveedor
    @nombre_proveedor VARCHAR(15)
AS
BEGIN
    SELECT p.id_pedido, m.nombre AS nombre_medicamento
    FROM db_pedido p
    INNER JOIN db_proveedor pr ON p.proveedor_id_proveedor = pr.id_proveedor
    INNER JOIN db_medicamento m ON p.medicamento_id_medicamento = m.id_medicamento
    WHERE pr.nombre = @nombre_proveedor;
END;
