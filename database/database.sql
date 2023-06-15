-- VERSION 1.1
create database proyecto_dbst;

use proyecto_dbst;

CREATE TABLE tipo_usuario (
    id_tipoUsuario VARCHAR(25) PRIMARY KEY,
    nombre_tipoUsuario VARCHAR(15) NOT NULL
);

/* Inserts y select */
INSERT INTO tipo_usuario(id_tipoUsuario, nombre_tipoUsuario) VALUES
('1','Administrador'), 
('2','Recepcionista'),
('3','Doctor'),
('4','Paciente');

SELECT * FROM tipo_usuario;

CREATE TABLE db_usuario (
    id_usuario VARCHAR(10) PRIMARY KEY,
    tipo_usuario VARCHAR(25) NOT NULL,
    correo VARCHAR(20) NOT NULL,
    password VARCHAR(64) NOT NULL,
    ultimo_acceso DATETIME,
    CONSTRAINT fk_tipo_usuario FOREIGN KEY (tipo_usuario)
    REFERENCES tipo_usuario(id_tipoUsuario)
);

/* Inserts y select */
INSERT INTO db_usuario (id_usuario, tipo_usuario, correo, password, ultimo_acceso) VALUES
('1', '1', 'correo1@example.com', 'password1', '2023-06-01 09:30:00'),
('2', '2', 'correo2@example.com', 'password2', '2023-06-02 14:45:00'),
('3', '2', 'correo3@example.com', 'password3', '2023-06-03 11:15:00'),
('4', '4', 'correo4@example.com', 'password4', '2023-06-04 16:20:00'),
('5', '4', 'correo5@example.com', 'password5', '2023-06-05 08:00:00'),
('6', '2', 'correo6@example.com', 'password6', '2023-06-06 13:10:00'),
('7', '4', 'correo7@example.com', 'password7', '2023-06-07 10:25:00'),
('8', '4', 'correo8@example.com', 'password8', '2023-06-08 15:40:00'),
('9', '4', 'correo9@example.com', 'password9', '2023-06-09 12:05:00'),
('10', '2', 'correo10@example.com', 'password10', '2023-06-10 17:55:00'),
('11', '4', 'correo11@example.com', 'password11', '2023-06-01 09:30:00'),
('12', '3', 'correo12@example.com', 'password12', '2023-06-02 14:45:00'),
('13', '3', 'correo13@example.com', 'password13', '2023-06-03 11:15:00'),
('14', '4', 'correo14@example.com', 'password14', '2023-06-04 16:20:00'),
('15', '4', 'correo15@example.com', 'password15', '2023-06-05 08:00:00'),
('16', '3', 'correo16@example.com', 'password16', '2023-06-06 13:10:00'),
('17', '2', 'correo17@example.com', 'password17', '2023-06-07 10:25:00'),
('18', '4', 'correo18@example.com', 'password18', '2023-06-08 15:40:00'),
('19', '4', 'correo19@example.com', 'password19', '2023-06-09 12:05:00'),
('20', '4', 'correo20@example.com', 'password20', '2023-06-10 17:55:00'),
('21', '3', 'correo21@example.com', 'password21', '2023-06-01 09:30:00'),
('22', '2', 'correo22@example.com', 'password22', '2023-06-02 14:45:00'),
('23', '2', 'correo23@example.com', 'password23', '2023-06-03 11:15:00'),
('24', '4', 'correo24@example.com', 'password24', '2023-06-04 16:20:00'),
('25', '4', 'correo25@example.com', 'password25', '2023-06-05 08:00:00'),
('26', '4', 'correo26@example.com', 'password26', '2023-06-06 13:10:00'),
('27', '4', 'correo27@example.com', 'password27', '2023-06-07 10:25:00'),
('28', '4', 'correo28@example.com', 'password28', '2023-06-08 15:40:00'),
('29', '4', 'correo29@example.com', 'password29', '2023-06-09 12:05:00'),
('30', '4', 'correo30@example.com', 'password30', '2023-06-10 17:55:00'),
('31', '1', 'correo31@example.com', 'password31', '2023-06-01 09:30:00'),
('32', '2', 'correo32@example.com', 'password32', '2023-06-02 14:45:00'),
('33', '3', 'correo33@example.com', 'password33', '2023-06-03 11:15:00'),
('34', '2', 'correo34@example.com', 'password34', '2023-06-04 16:20:00'),
('35', '2', 'correo35@example.com', 'password35', '2023-06-05 08:00:00'),
('36', '4', 'correo36@example.com', 'password36', '2023-06-06 13:10:00'),
('37', '4', 'correo37@example.com', 'password37', '2023-06-07 10:25:00'),
('38', '4', 'correo38@example.com', 'password38', '2023-06-08 15:40:00'),
('39', '4', 'correo39@example.com', 'password39', '2023-06-09 12:05:00'),
('40', '4', 'correo40@example.com', 'password40', '2023-06-10 17:55:00'),
('41', '1', 'correo41@example.com', 'password41', '2023-06-01 09:30:00'),
('42', '3', 'correo42@example.com', 'password42', '2023-06-02 14:45:00'),
('43', '3', 'correo43@example.com', 'password43', '2023-06-03 11:15:00'),
('44', '4', 'correo44@example.com', 'password44', '2023-06-04 16:20:00'),
('45', '3', 'correo45@example.com', 'password45', '2023-06-05 08:00:00'),
('46', '3', 'correo46@example.com', 'password46', '2023-06-06 13:10:00'),
('47', '4', 'correo47@example.com', 'password47', '2023-06-07 10:25:00'),
('48', '4', 'correo48@example.com', 'password48', '2023-06-08 15:40:00'),
('49', '4', 'correo49@example.com', 'password49', '2023-06-09 12:05:00'),
('50', '3', 'correo50@example.com', 'password50', '2023-06-10 17:55:00');

SELECT * FROM db_usuario;

CREATE TABLE db_administrador (
    id_administrador VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_admin FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

/* Inserts y select */
INSERT INTO db_administrador (id_administrador, nombre, ap_paterno, ap_materno, usuario_id_usuario)
VALUES
    ('1', 'Administrador 1', 'Apellido 1', 'Apellido 1', '1'),
    ('2', 'Administrador 2', 'Apellido 2', 'Apellido 2', '31'),
    ('3', 'Administrador 3', 'Apellido 3', 'Apellido 3', '41');

SELECT * FROM db_usuario WHERE tipo_usuario = '1';
SELECT * FROM db_administrador;

CREATE TABLE db_paciente (
    id_paciente VARCHAR(10) PRIMARY KEY,
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
    usuario_id_usuario VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_paciente FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

/* Inserts y select */
INSERT INTO db_paciente (id_paciente, nombre, ap_paterno, ap_materno, edad, tipo_sangre, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario)
VALUES
    ('paciente1', 'Nombre1', 'ApellidoP1', 'ApellidoM1', 25, 'O+', 'Calle 1', 10, NULL, 'Colonia 1', 'Delegación 1', 'Entidad 1', '1996-01-01', 70.5, 170.0, 'M', 'Aseguradora 1', '4'),
    ('paciente2', 'Nombre2', 'ApellidoP2', 'ApellidoM2', 30, 'A-', 'Calle 2', 20, NULL, 'Colonia 2', 'Delegación 2', 'Entidad 2', '1992-05-15', 65.2, 160.0, 'F', 'Aseguradora 2', '5'),
    ('paciente3', 'Nombre3', 'ApellidoP3', 'ApellidoM3', 40, 'B+', 'Calle 3', 30, NULL, 'Colonia 3', 'Delegación 3', 'Entidad 3', '1981-12-03', 80.0, 180.0, 'M', 'Aseguradora 3', '7'),
    ('paciente4', 'Nombre4', 'ApellidoP4', 'ApellidoM4', 28, 'AB-', 'Calle 4', 40, NULL, 'Colonia 4', 'Delegación 4', 'Entidad 4', '1993-07-22', 60.0, 165.0, 'F', 'Aseguradora 4', '8'),
    ('paciente5', 'Nombre5', 'ApellidoP5', 'ApellidoM5', 32, 'O+', 'Calle 5', 50, NULL, 'Colonia 5', 'Delegación 5', 'Entidad 5', '1989-09-10', 75.8, 175.0, 'M', 'Aseguradora 5', '9'),
    ('paciente6', 'Nombre6', 'ApellidoP6', 'ApellidoM6', 37, 'A+', 'Calle 6', 60, NULL, 'Colonia 6', 'Delegación 6', 'Entidad 6', '1984-03-18', 68.3, 168.0, 'F', 'Aseguradora 6', '11'),
    ('paciente7', 'Nombre7', 'ApellidoP7', 'ApellidoM7', 45, 'B-', 'Calle 7', 70, NULL, 'Colonia 7', 'Delegación 7', 'Entidad 7', '1978-11-29', 85.0, 190.0, 'M', 'Aseguradora 7', '14'),
    ('paciente8', 'Nombre8', 'ApellidoP8', 'ApellidoM8', 29, 'AB+', 'Calle 8', 80, NULL, 'Colonia 8', 'Delegación 8', 'Entidad 8', '1992-06-04', 63.5, 163.0, 'F', 'Aseguradora 8', '15'),
    ('paciente9', 'Nombre9', 'ApellidoP9', 'ApellidoM9', 42, 'O-', 'Calle 9', 90, NULL, 'Colonia 9', 'Delegación 9', 'Entidad 9', '1979-09-17', 77.2, 178.0, 'M', 'Aseguradora 9', '18'),
    ('paciente10', 'Nombre10', 'ApellidoP10', 'ApellidoM10', 31, 'A-', 'Calle 10', 100, NULL, 'Colonia 10', 'Delegación 10', 'Entidad 10', '1990-08-12', 72.1, 172.0, 'F', 'Aseguradora 10', '19'),
    ('paciente11', 'Nombre11', 'ApellidoP11', 'ApellidoM11', 35, 'AB+', 'Calle 11', 110, NULL, 'Colonia 11', 'Delegación 11', 'Entidad 11', '1986-02-25', 69.7, 166.0, 'F', 'Aseguradora 11', '20'),
    ('paciente12', 'Nombre12', 'ApellidoP12', 'ApellidoM12', 39, 'O+', 'Calle 12', 120, NULL, 'Colonia 12', 'Delegación 12', 'Entidad 12', '1982-10-07', 81.4, 183.0, 'M', 'Aseguradora 12', '24'),
    ('paciente13', 'Nombre13', 'ApellidoP13', 'ApellidoM13', 27, 'B-', 'Calle 13', 130, NULL, 'Colonia 13', 'Delegación 13', 'Entidad 13', '1994-04-14', 67.9, 164.0, 'F', 'Aseguradora 13', '25'),
    ('paciente14', 'Nombre14', 'ApellidoP14', 'ApellidoM14', 34, 'A+', 'Calle 14', 140, NULL, 'Colonia 14', 'Delegación 14', 'Entidad 14', '1987-07-31', 73.8, 170.0, 'M', 'Aseguradora 14', '26'),
    ('paciente15', 'Nombre15', 'ApellidoP15', 'ApellidoM15', 44, 'O-', 'Calle 15', 150, NULL, 'Colonia 15', 'Delegación 15', 'Entidad 15', '1977-12-26', 87.6, 195.0, 'M', 'Aseguradora 15', '27'),
    ('paciente16', 'Nombre16', 'ApellidoP16', 'ApellidoM16', 38, 'B+', 'Calle 16', 160, NULL, 'Colonia 16', 'Delegación 16', 'Entidad 16', '1983-11-08', 79.5, 176.0, 'F', 'Aseguradora 16', '28'),
    ('paciente17', 'Nombre17', 'ApellidoP17', 'ApellidoM17', 33, 'AB-', 'Calle 17', 170, NULL, 'Colonia 17', 'Delegación 17', 'Entidad 17', '1988-09-21', 74.2, 169.0, 'M', 'Aseguradora 17', '29'),
	('paciente18', 'Nombre18', 'ApellidoP18', 'ApellidoM18', 41, 'O+', 'Calle 18', 180, NULL, 'Colonia 18', 'Delegación 18', 'Entidad 18', '1980-03-03', 83.1, 182.0, 'M', 'Aseguradora 18', '30'),
    ('paciente19', 'Nombre19', 'ApellidoP19', 'ApellidoM19', 36, 'A-', 'Calle 19', 190, NULL, 'Colonia 19', 'Delegación 19', 'Entidad 19', '1985-05-19', 70.9, 168.0, 'F', 'Aseguradora 19', '36'),
    ('paciente20', 'Nombre20', 'ApellidoP20', 'ApellidoM20', 43, 'B+', 'Calle 20', 200, NULL, 'Colonia 20', 'Delegación 20', 'Entidad 20', '1978-08-27', 86.0, 190.0, 'M', 'Aseguradora 20', '37'),
    ('paciente21', 'Nombre21', 'ApellidoP21', 'ApellidoM21', 29, 'AB-', 'Calle 21', 210, NULL, 'Colonia 21', 'Delegación 21', 'Entidad 21', '1993-02-14', 66.3, 163.0, 'F', 'Aseguradora 21', '38'),
    ('paciente22', 'Nombre22', 'ApellidoP22', 'ApellidoM22', 32, 'O+', 'Calle 22', 220, NULL, 'Colonia 22', 'Delegación 22', 'Entidad 22', '1990-10-30', 75.5, 175.0, 'M', 'Aseguradora 22', '39'),
    ('paciente23', 'Nombre23', 'ApellidoP23', 'ApellidoM23', 39, 'A+', 'Calle 23', 230, NULL, 'Colonia 23', 'Delegación 23', 'Entidad 23', '1982-06-18', 80.7, 180.0, 'F', 'Aseguradora 23', '40'),
    ('paciente24', 'Nombre24', 'ApellidoP24', 'ApellidoM24', 47, 'B-', 'Calle 24', 240, NULL, 'Colonia 24', 'Delegación 24', 'Entidad 24', '1976-04-05', 88.5, 192.0, 'M', 'Aseguradora 24', '44'),
    ('paciente25', 'Nombre25', 'ApellidoP25', 'ApellidoM25', 37, 'AB+', 'Calle 25', 250, NULL, 'Colonia 25', 'Delegación 25', 'Entidad 25', '1984-01-23', 69.0, 165.0, 'F', 'Aseguradora 25', '47'),
    ('paciente26', 'Nombre26', 'ApellidoP26', 'ApellidoM26', 42, 'O-', 'Calle 26', 260, NULL, 'Colonia 26', 'Delegación 26', 'Entidad 26', '1979-09-10', 77.8, 178.0, 'M', 'Aseguradora 26', '48'),
    ('paciente27', 'Nombre27', 'ApellidoP27', 'ApellidoM27', 33, 'A-', 'Calle 27', 270, NULL, 'Colonia 27', 'Delegación 27', 'Entidad 27', '1988-07-15', 73.4, 170.0, 'F', 'Aseguradora 27', '49');

INSERT INTO db_paciente (id_paciente, nombre, ap_paterno, ap_materno, edad, tipo_sangre, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario)
VALUES
    ('paciente28', 'Nombre28', 'ApellidoP28', 'ApellidoM28', CalcularEdad('1988-07-15'), 'A-', 'Calle 27', 270, NULL, 'Colonia 27', 'Delegación 27', 'Entidad 27', '1988-07-15', 73.4, 170.0, 'F', 'Aseguradora 27', '49');

SELECT * FROM db_usuario WHERE tipo_usuario = '4';
SELECT * FROM db_paciente;

CREATE TABLE catalogo_alergia (
    id_alergia VARCHAR(25) PRIMARY KEY,
    nombre_alergia VARCHAR(15) NOT NULL
);

/* Inserts y select */
INSERT INTO catalogo_alergia (id_alergia, nombre_alergia)
VALUES
    ('alergia1', 'Polen'),
    ('alergia2', 'Polvo'),
    ('alergia3', 'Acaros de polvo'),
    ('alergia4', 'Acaros del moho'),
    ('alergia5', 'Leche'),
    ('alergia6', 'Penicilina'),
    ('alergia7', 'Aspirina'),
    ('alergia8', 'Ibuprofeno'),
    ('alergia9', 'Abejas'),
    ('alergia10', 'Latex');

SELECT * FROM catalogo_alergia;

CREATE TABLE db_alergias_paciente (
    id_alergia_paciente VARCHAR(5) NOT NULL PRIMARY KEY,
    id_alergia VARCHAR(25) NOT NULL,
    paciente_id_paciente VARCHAR(10) NOT NULL,
    descripcion VARCHAR(30),
    CONSTRAINT fk_paciente_alergia FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente),
    CONSTRAINT fk_alergias FOREIGN KEY (id_alergia)
    REFERENCES catalogo_alergia(id_alergia)
);

/* Inserts y select */
INSERT INTO db_alergias_paciente (id_alergia_paciente, id_alergia, paciente_id_paciente, descripcion)
VALUES
('ap1', 'alergia1', 'paciente1', 'Descripción 1'),
('ap2', 'alergia2', 'paciente2', 'Descripción 2'),
('ap3', 'alergia3', 'paciente3', 'Descripción 3'),
('ap4', 'alergia4', 'paciente4', 'Descripción 4'),
('ap5', 'alergia5', 'paciente5', 'Descripción 5'),
('ap6', 'alergia6', 'paciente6', 'Descripción 6'),
('ap7', 'alergia7', 'paciente7', 'Descripción 7'),
('ap8', 'alergia8', 'paciente8', 'Descripción 8'),
('ap9', 'alergia9', 'paciente9', 'Descripción 9'),
('ap10', 'alergia10', 'paciente10', 'Descripción 10'),
('ap11', 'alergia1', 'paciente11', 'Descripción 11'),
('ap12', 'alergia2', 'paciente12', 'Descripción 12'),
('ap13', 'alergia3', 'paciente13', 'Descripción 13'),
('ap14', 'alergia4', 'paciente14', 'Descripción 14'),
('ap15', 'alergia5', 'paciente15', 'Descripción 15'),
('ap16', 'alergia6', 'paciente16', 'Descripción 16'),
('ap17', 'alergia7', 'paciente17', 'Descripción 17'),
('ap18', 'alergia8', 'paciente18', 'Descripción 18'),
('ap19', 'alergia9', 'paciente19', 'Descripción 19'),
('ap20', 'alergia10', 'paciente20', 'Descripción 20');

SELECT * FROM db_alergias_paciente;

CREATE TABLE db_consultorio (
    id_consultorio VARCHAR(5) PRIMARY KEY,
    numero INT NOT NULL,
    estado VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30)
);

/* Inserts y select */
INSERT INTO db_consultorio (id_consultorio, numero, estado, descripcion) VALUES
    ('1', 101, 'Disponible', 'Consultorio en planta baja'),
    ('2', 201, 'Ocupado', 'Consultorio en primer piso'),
    ('3', 301, 'Disponible', 'Consultorio en segundo piso'),
    ('4', 401, 'Disponible', 'Consultorio en tercer piso'),
    ('5', 501, 'Ocupado', 'Consultorio en quinto piso'),
    ('6', 601, 'Disponible', 'Consultorio en sexto piso'),
    ('7', 701, 'Ocupado', 'Consultorio en séptimo piso'),
    ('8', 801, 'Disponible', 'Consultorio en octavo piso'),
    ('9', 901, 'Disponible', 'Consultorio en noveno piso'),
    ('10', 1001, 'Ocupado', 'Consultorio en décimo piso');

SELECT * FROM db_consultorio;

CREATE TABLE db_especialidad (
    id_especialidad VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(30)
);

/* Inserts y select */
INSERT INTO db_especialidad (id_especialidad, nombre, descripcion) VALUES
    ('1', 'Cardiologia', 'Descripción especialidad 1'),
    ('2', 'Dermatologia', 'Descripción especialidad 2'),
    ('3', 'Ginecologia', 'Descripción especialidad 3'),
    ('4', 'Pediatria', 'Descripción especialidad 4'),
    ('5', 'Ortopedia', 'Descripción especialidad 5');

SELECT * FROM db_especialidad;

CREATE TABLE db_horario (
    id_horario VARCHAR(10) PRIMARY KEY,
    turno VARCHAR(10) NOT NULL,
    dia VARCHAR(10) NOT NULL,
    hora_entrada TIME NOT NULL,
    hora_salida TIME NOT NULL,
    hora_ini_receso TIME NOT NULL,
    hora_fin_receso TIME NOT NULL
);

/* Inserts y select */
INSERT INTO db_horario (id_horario, turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso)
VALUES
('horario1', 'Matutino', 'L', '08:00:00', '12:00:00', '10:00:00', '10:30:00'),
('horario2', 'Vespertino', 'M', '14:00:00', '18:00:00', '16:00:00', '16:30:00'),
('horario3', 'Matutino', 'X', '09:00:00', '13:00:00', '11:00:00', '11:30:00'),
('horario4', 'Vespertino', 'J', '15:00:00', '19:00:00', '17:00:00', '17:30:00'),
('horario5', 'Matutino', 'V', '08:30:00', '12:30:00', '10:30:00', '11:00:00');

SELECT * FROM db_horario;

CREATE TABLE db_doctor (
    id_doctor VARCHAR(10) PRIMARY KEY,
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
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    aseguradora VARCHAR(15),
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

/* Inserts y select */
INSERT INTO db_doctor (id_doctor, nombre, ap_paterno, ap_materno, edad, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario, consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad)
VALUES
('doctor1', 'Juan', 'Pérez', 'Gómez', 35, 'Calle 1', 10, NULL, 'Colonia 1', 'Delegación 1', 'Entidad 1', '1988-05-15', 70.5, 175.0, 'M', NULL, '12', '2', 'horario1', '1'),
('doctor2', 'María', 'González', 'López', 42, 'Calle 2', 20, NULL, 'Colonia 2', 'Delegación 2', 'Entidad 2', '1979-10-22', 65.2, 168.0, 'F', NULL, '13', '1', 'horario2', '2'),
('doctor3', 'Carlos', 'Rodríguez', 'Sánchez', 28, 'Calle 3', 30, NULL, 'Colonia 3', 'Delegación 3', 'Entidad 3', '1995-03-10', 75.0, 180.0, 'M', NULL, '16', '3', 'horario3', '3'),
('doctor4', 'Laura', 'Hernández', 'Torres', 39, 'Calle 4', 40, NULL, 'Colonia 4', 'Delegación 4', 'Entidad 4', '1982-08-18', 60.7, 162.0, 'F', NULL, '21', '4', 'horario1', '4'),
('doctor5', 'Pedro', 'López', 'Ramírez', 31, 'Calle 5', 50, NULL, 'Colonia 5', 'Delegación 5', 'Entidad 5', '1990-12-03', 85.3, 190.0, 'M', NULL, '33', '10', 'horario3', '5'),
('doctor6', 'Ana', 'Martínez', 'Soto', 47, 'Calle 6', 60, NULL, 'Colonia 6', 'Delegación 6', 'Entidad 6', '1976-07-21', 68.9, 170.0, 'F', NULL, '42', '8', 'horario5', '5'),
('doctor7', 'José', 'García', 'Pérez', 36, 'Calle 7', 70, NULL, 'Colonia 7', 'Delegación 7', 'Entidad 7', '1987-02-12', 72.1, 176.0, 'M', NULL, '43', '5', 'horario5', '4'),
('doctor8', 'Luisa', 'López', 'González', 33, 'Calle 8', 80, NULL, 'Colonia 8', 'Delegación 8', 'Entidad 8', '1990-09-28', 57.8, 160.0, 'F', NULL, '45', '7', 'horario4', '3'),
('doctor9', 'Javier', 'Sánchez', 'Ramírez', 45, 'Calle 9', 90, NULL, 'Colonia 9', 'Delegación 9', 'Entidad 9', '1978-04-07', 79.4, 182.0, 'M', NULL, '46', '6', 'horario3', '2'),
('doctor10', 'Mariana', 'Gómez', 'Hernández', 29, 'Calle 10', 100, NULL, 'Colonia 10', 'Delegación 10', 'Entidad 10', '1994-01-26', 62.5, 165.0, 'F', NULL, '50', '9', 'horario1', '1');

SELECT * FROM db_doctor;

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

/* Inserts y select */
INSERT INTO db_consulta (id_consulta, hora, fecha, paciente_id_paciente, doctor_id_doctor)
VALUES
('1', '09:00:00', '2023-06-15', 'paciente1', 'doctor1'),
('2', '14:30:00', '2023-06-16', 'paciente2', 'doctor2'),
('3', '11:45:00', '2023-06-17', 'paciente3', 'doctor3'),
('4', '16:15:00', '2023-06-18', 'paciente4', 'doctor4'),
('5', '10:30:00', '2023-06-19', 'paciente5', 'doctor5');

SELECT * FROM db_consulta;

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

/* Inserts y select */
INSERT INTO db_recepcionista (id_recepcionista, nombre, ap_paterno, ap_materno, usuario_id_usuario, horario_id_horario)
VALUES
('1', 'Ana', 'Gómez', 'López', '2', 'horario1'),
('2', 'Juan', 'Hernández', 'Sánchez', '3', 'horario2'),
('3', 'María', 'López', 'González', '6', 'horario3'),
('4', 'Carlos', 'Martínez', 'Torres', '10', 'horario4'),
('5', 'Laura', 'Sánchez', 'Ramírez', '17', 'horario5'),
('6', 'Pedro', 'González', 'Hernández', '22', 'horario1'),
('7', 'Luisa', 'Torres', 'López', '23', 'horario2'),
('8', 'Javier', 'Gómez', 'Hernández', '32', 'horario3'),
('9', 'Mariana', 'Sánchez', 'González', '34', 'horario4'),
('10', 'José', 'Hernández', 'López', '35', 'horario5');

SELECT * FROM db_recepcionista;

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

/* Inserts y select */
INSERT INTO db_medicamento (id_medicamento, nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta)
VALUES
('1', 'Paracetamol', 'Paracetamol', 'Alivio del dolor y reducción de la fiebre', 'Farmaceutica1', 100, 10.99, 'No'),
('2', 'Ibuprofeno', 'Ibuprofeno', 'Antiinflamatorio y analgésico', 'Farmaceutica2', 80, 8.75, 'No'),
('3', 'Amoxicilina', 'Amoxicilina', 'Antibiótico de amplio espectro', 'Farmaceutica3', 50, 15.50, 'Sí'),
('4', 'Loratadina', 'Loratadina', 'Antihistamínico para alivio de alergias', 'Farmaceutica4', 60, 12.25, 'No'),
('5', 'Omeprazol', 'Omeprazol', 'Inhibidor de la bomba de protones para reducir la producción de ácido estomacal', 'Farmaceutica5', 40, 14.75, 'No'),
('6', 'Simvastatina', 'Simvastatina', 'Reductor de los niveles de colesterol', 'Farmaceutica6', 30, 20.50, 'No'),
('7', 'Metformina', 'Metformina', 'Medicamento para el control de la diabetes tipo 2', 'Farmaceutica7', 70, 18.99, 'Sí'),
('8', 'Salbutamol', 'Salbutamol', 'Broncodilatador para el alivio de los síntomas del asma', 'Farmaceutica8', 90, 9.25, 'No'),
('9', 'Hidroclorotiazida', 'Hidroclorotiazida', 'Diurético utilizado para el tratamiento de la hipertensión', 'Farmaceutica9', 55, 11.50, 'No'),
('10', 'Atorvastatina', 'Atorvastatina', 'Medicamento para reducir los niveles de colesterol y triglicéridos', 'Farmaceutica10', 75, 16.75, 'No');

SELECT * FROM db_medicamento;

CREATE TABLE db_receta (
    id_receta VARCHAR(10) PRIMARY KEY,
    fecha_expedicion TIMESTAMP NOT NULL,
    observaciones VARCHAR(30),
    diagnostico VARCHAR(30) NOT NULL,
    costo_total FLOAT NOT NULL,
    doctor_id_doctor VARCHAR(10) NOT NULL,
    medicamento_id_medicamento VARCHAR(10) NOT NULL,
    CONSTRAINT fk_doctor_receta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor)
);

/* Inserts y select */
INSERT INTO db_receta (id_receta, fecha_expedicion, observaciones, diagnostico, costo_total, doctor_id_doctor)
VALUES
('1', '2023-06-14 10:00:00', 'Observación 1', 'Diagnóstico 1', 100.50, 'doctor1'),
('2', '2023-06-14 11:30:00', 'Observación 2', 'Diagnóstico 2', 75.20, 'doctor2'),
('3', '2023-06-14 14:45:00', 'Observación 3', 'Diagnóstico 3', 120.75, 'doctor1'),
('4', '2023-06-14 16:20:00', 'Observación 4', 'Diagnóstico 4', 90.80, 'doctor3'),
('5', '2023-06-14 18:10:00', 'Observación 5', 'Diagnóstico 5', 200.00, 'doctor2');

SELECT * FROM db_receta;

CREATE TABLE db_receta_medicamento (
    receta_id_receta VARCHAR(10) NOT NULL,
    medicamento_id_medicamento VARCHAR(10) NOT NULL,
    CONSTRAINT fk_receta_rm FOREIGN KEY (receta_id_receta)
    REFERENCES db_receta(id_receta),
    CONSTRAINT fk_medicamento_rm FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento)
);

/* Inserts y select */
INSERT INTO db_receta_medicamento (receta_id_receta, medicamento_id_medicamento)
VALUES
('1', '1'),
('1', '2'),
('2', '3'),
('3', '1'),
('4', '2');

SELECT * FROM db_receta_medicamento;

CREATE TABLE db_proveedor (
    id_proveedor VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    telefono INT,
    correo VARCHAR(20) NOT NULL
);

/* Inserts y select */
INSERT INTO db_proveedor (id_proveedor, nombre, telefono, correo)
VALUES
('PROV1', 'Proveedor 1', 123456789, 'proveedor1@example.com'),
('PROV2', 'Proveedor 2', 987654321, 'proveedor2@example.com'),
('PROV3', 'Proveedor 3', 555555555, 'proveedor3@example.com'),
('PROV4', 'Proveedor 4', 111111111, 'proveedor4@example.com'),
('PROV5', 'Proveedor 5', 999999999, 'proveedor5@example.com');

SELECT * FROM db_proveedor;

CREATE TABLE db_pedido (
    id_pedido VARCHAR(10) PRIMARY KEY,
    medicamento_id_medicamento VARCHAR(10) NOT NULL,
    proveedor_id_proveedor VARCHAR(10) NOT NULL,
    CONSTRAINT fk_medicamento_pedido FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento),
    CONSTRAINT fk_proveedor_pedido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

/* Inserts y select */
INSERT INTO db_pedido (id_pedido, medicamento_id_medicamento, proveedor_id_proveedor)
VALUES
('PED1', '1', 'PROV1'),
('PED2', '2', 'PROV2'),
('PED3', '3', 'PROV3'),
('PED4', '4', 'PROV4'),
('PED5', '5', 'PROV5'),
('PED6', '1', 'PROV2'),
('PED7', '2', 'PROV3'),
('PED8', '3', 'PROV4'),
('PED9', '4', 'PROV5'),
('PED10', '5', 'PROV1');

SELECT * FROM db_pedido;

CREATE TABLE db_dias_surtido (
    id_surtido VARCHAR(5) PRIMARY KEY,
    dia VARCHAR(15) NOT NULL,
    hora TIME,
    proveedor_id_proveedor VARCHAR(10) NOT NULL,
    CONSTRAINT fk_proveedor_surtido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

/* Inserts y select */
INSERT INTO db_dias_surtido (id_surtido, dia, hora, proveedor_id_proveedor)
VALUES
('SUR1', 'L', '08:00:00', 'PROV1'),
('SUR2', 'M', '09:30:00', 'PROV2'),
('SUR3', 'X', '10:45:00', 'PROV3'),
('SUR4', 'J', '12:15:00', 'PROV4'),
('SUR5', 'V', '14:30:00', 'PROV5');

SELECT * FROM db_dias_surtido;

CREATE TABLE db_registro_usuarios (
    id_registro INT PRIMARY KEY,
    id_usuario VARCHAR(10),
    fecha_registro DATE,
    hora_registro TIME,
    FOREIGN KEY (id_usuario) REFERENCES db_usuario(id_usuario)
);

/* Inserts y select */
INSERT INTO db_registro_usuarios (id_registro, id_usuario, fecha_registro, hora_registro)
VALUES
(1, '1', '2023-06-01', '09:30:00'),
(2, '2', '2023-06-02', '14:45:00'),
(3, '3', '2023-06-03', '11:15:00'),
(4, '4', '2023-06-04', '16:20:00'),
(5, '5', '2023-06-05', '08:00:00'),
(6, '6', '2023-06-06', '13:10:00'),
(7, '7', '2023-06-07', '10:25:00'),
(8, '8', '2023-06-08', '15:40:00'),
(9, '9', '2023-06-09', '12:05:00'),
(10, '10', '2023-06-10', '17:55:00'),
(11, '11', '2023-06-01', '09:30:00'),
(12, '12', '2023-06-02', '14:45:00'),
(13, '13', '2023-06-03', '11:15:00'),
(14, '14', '2023-06-04', '16:20:00'),
(15, '15', '2023-06-05', '08:00:00'),
(16, '16', '2023-06-06', '13:10:00'),
(17, '17', '2023-06-07', '10:25:00'),
(18, '18', '2023-06-08', '15:40:00'),
(19, '19', '2023-06-09', '12:05:00'),
(20, '20', '2023-06-10', '17:55:00'),
(21, '21', '2023-06-01', '09:30:00'),
(22, '22', '2023-06-02', '14:45:00'),
(23, '23', '2023-06-03', '11:15:00'),
(24, '24', '2023-06-04', '16:20:00'),
(25, '25', '2023-06-05', '08:00:00'),
(26, '26', '2023-06-06', '13:10:00'),
(27, '27', '2023-06-07', '10:25:00'),
(28, '28', '2023-06-08', '15:40:00'),
(29, '29', '2023-06-09', '12:05:00'),
(30, '30', '2023-06-10', '17:55:00'),
(31, '31', '2023-06-01', '09:30:00'),
(32, '32', '2023-06-02', '14:45:00'),
(33, '33', '2023-06-03', '11:15:00'),
(34, '34', '2023-06-04', '16:20:00'),
(35, '35', '2023-06-05', '08:00:00'),
(36, '36', '2023-06-06', '13:10:00'),
(37, '37', '2023-06-07', '10:25:00'),
(38, '38', '2023-06-08', '15:40:00'),
(39, '39', '2023-06-09', '12:05:00'),
(40, '40', '2023-06-10', '17:55:00'),
(41, '41', '2023-06-01', '09:30:00'),
(42, '42', '2023-06-02', '14:45:00'),
(43, '43', '2023-06-03', '11:15:00'),
(44, '44', '2023-06-04', '16:20:00'),
(45, '45', '2023-06-05', '08:00:00'),
(46, '46', '2023-06-06', '13:10:00'),
(47, '47', '2023-06-07', '10:25:00'),
(48, '48', '2023-06-08', '15:40:00'),
(49, '49', '2023-06-09', '12:05:00'),
(50, '50', '2023-06-10', '17:55:00');

SELECT * FROM db_registro_usuarios;

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

/* Prueba */
SELECT CalcularPrecioTotal('1') AS precio_total;

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

/* Prueba */
SELECT CalcularEdad('1979-09-10') AS edad_persona;


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

/* Prueba */
CALL DoctoresDisponiblesPorHorario('L', '10:00:00');

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

/* Prueba */
CALL ObtenerMedicamentosPorProveedor('Proveedor 1');

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

/* Prueba */
INSERT INTO db_usuario (id_usuario, tipo_usuario, correo, password, ultimo_acceso) VALUES
('51', '1', 'correo51@example.com', 'password51', '2023-06-14 11:12:00');


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
