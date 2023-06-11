-- VERSION 1.1
/* create database proyecto_dbst;

use proyecto_dbst; */



CREATE TABLE db_usuario (
    id_usuario VARCHAR(10) PRIMARY KEY,
    tipo_usuario VARCHAR(15) NOT NULL,
    correo VARCHAR(20) NOT NULL,
    password VARCHAR(64) NOT NULL,
    ultimo_acceso DATETIME
);

CREATE TABLE db_administrador (
    id_administrador VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario VARCHAR(10) NOT NULL,
    CONSTRAINT fk_usuario_admin FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

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

CREATE TABLE db_alergias (
    id_alergia VARCHAR(5) PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30),
    paciente_id_paciente VARCHAR(10) NOT NULL,
    CONSTRAINT fk_paciente_alergia FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente)
);

CREATE TABLE db_consultorio (
    id_consultorio VARCHAR(5) PRIMARY KEY,
    numero INT NOT NULL,
    estado VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30)
);

CREATE TABLE db_especialidad (
    id_especialidad VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(30)
);

CREATE TABLE db_horario (
    id_horario VARCHAR(10) PRIMARY KEY,
    turno VARCHAR(10) NOT NULL,
    dia VARCHAR(10) NOT NULL,
    hora_entrada TIME NOT NULL,
    hora_salida TIME NOT NULL,
    hora_ini_receso TIME NOT NULL,
    hora_fin_receso TIME NOT NULL
);

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


