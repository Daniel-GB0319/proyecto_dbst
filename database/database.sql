-- VERSION 1.1
create database proyecto_dbst;
use proyecto_dbst;

CREATE TABLE tipo_usuario (
    id_tipoUsuario INT PRIMARY KEY,
    nombre_tipoUsuario VARCHAR(15) NOT NULL
);

CREATE TABLE db_usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    tipo_usuario INT NOT NULL,
    correo VARCHAR(20) NOT NULL,
    password VARCHAR(64) NOT NULL,
    ultimo_acceso DATETIME,
    CONSTRAINT fk_tipo_usuario FOREIGN KEY (tipo_usuario)
    REFERENCES tipo_usuario(id_tipoUsuario)
);

CREATE TABLE db_administrador (
    id_administrador INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario INT NOT NULL,
    CONSTRAINT fk_usuario_admin FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

CREATE TABLE db_paciente (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
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
    usuario_id_usuario INT NOT NULL,
    CONSTRAINT fk_usuario_paciente FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario)
);

CREATE TABLE catalogo_alergia (
    id_alergia INT AUTO_INCREMENT PRIMARY KEY,
    nombre_alergia VARCHAR(15) NOT NULL
);

CREATE TABLE db_alergias_paciente (
    id_alergia_paciente INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_alergia INT NOT NULL,
    paciente_id_paciente INT NOT NULL,
    descripcion VARCHAR(30),
    CONSTRAINT fk_paciente_alergia FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente),
    CONSTRAINT fk_alergias FOREIGN KEY (id_alergia)
    REFERENCES catalogo_alergia(id_alergia)
);

CREATE TABLE db_consultorio (
    id_consultorio INT AUTO_INCREMENT PRIMARY KEY,
    numero INT NOT NULL,
    estado VARCHAR(15) NOT NULL,
    descripcion VARCHAR(30)
);

CREATE TABLE db_especialidad (
    id_especialidad INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion VARCHAR(30)
);

CREATE TABLE db_horario (
    id_horario INT AUTO_INCREMENT PRIMARY KEY,
    turno VARCHAR(10) NOT NULL,
    dia VARCHAR(10) NOT NULL,
    hora_entrada TIME NOT NULL,
    hora_salida TIME NOT NULL,
    hora_ini_receso TIME NOT NULL,
    hora_fin_receso TIME NOT NULL
);

CREATE TABLE db_doctor (
    id_doctor INT AUTO_INCREMENT PRIMARY KEY,
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
    usuario_id_usuario INT NOT NULL,
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
    id_horario_consulta INT AUTO_INCREMENT PRIMARY KEY,
	inicio_consulta TIME NOT NULL,
    fin_consulta TIME NOT NULL
);

CREATE TABLE db_consulta (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id_paciente INT NOT NULL,
    doctor_id_doctor INT NOT NULL,
    fecha DATE NOT NULL,
    costo DOUBLE NOT NULL,
    dia VARCHAR(10) NOT NULL,
    horario INT NOT NULL,
    CONSTRAINT fk_paciente_consulta FOREIGN KEY (paciente_id_paciente)
    REFERENCES db_paciente(id_paciente),
    CONSTRAINT fk_doctor_consulta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor),
    CONSTRAINT fk_horario_consulta FOREIGN KEY (horario)
    REFERENCES db_horario_consulta(id_horario_consulta)
);

CREATE TABLE db_recepcionista (
    id_recepcionista INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    ap_paterno VARCHAR(15) NOT NULL,
    ap_materno VARCHAR(15) NOT NULL,
    usuario_id_usuario INT NOT NULL,
    horario_id_horario INT NOT NULL,
    CONSTRAINT fk_usuario_recepcionista FOREIGN KEY (usuario_id_usuario)
    REFERENCES db_usuario(id_usuario) ON DELETE CASCADE,
    CONSTRAINT fk_horario_recepcionista FOREIGN KEY (horario_id_horario)
    REFERENCES db_horario(id_horario)
);

CREATE TABLE db_medicamento (
    id_medicamento INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    compuesto VARCHAR(25) NOT NULL,
    descripcion VARCHAR(30),
    farmaceutica VARCHAR(20) NOT NULL,
    cantidad INT NOT NULL,
    precio DOUBLE NOT NULL,
    req_receta CHAR(2)
);

CREATE TABLE db_receta (
    id_receta INT AUTO_INCREMENT PRIMARY KEY,
    fecha_expedicion TIMESTAMP NOT NULL,
    observaciones VARCHAR(30),
    diagnostico VARCHAR(30) NOT NULL,
    costo_total DOUBLE NOT NULL,
    doctor_id_doctor INT,
    CONSTRAINT fk_doctor_receta FOREIGN KEY (doctor_id_doctor)
    REFERENCES db_doctor(id_doctor)
);

CREATE TABLE db_receta_medicamento (
    receta_id_receta INT  AUTO_INCREMENT NOT NULL,
    cantidad_medicamento INT NOT NULL,
    medicamento_id_medicamento INT NOT NULL,
    CONSTRAINT fk_receta_rm FOREIGN KEY (receta_id_receta)
    REFERENCES db_receta(id_receta),
    CONSTRAINT fk_medicamento_rm FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento)
);

CREATE TABLE db_proveedor (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(15) NOT NULL,
    telefono INT,
    correo VARCHAR(20) NOT NULL
);

CREATE TABLE db_pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    medicamento_id_medicamento INT NOT NULL,
    proveedor_id_proveedor INT NOT NULL,
    CONSTRAINT fk_medicamento_pedido FOREIGN KEY (medicamento_id_medicamento)
    REFERENCES db_medicamento(id_medicamento),
    CONSTRAINT fk_proveedor_pedido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

CREATE TABLE db_dias_surtido (
    id_surtido INT AUTO_INCREMENT PRIMARY KEY,
    dia VARCHAR(15) NOT NULL,
    hora TIME,
    proveedor_id_proveedor INT NOT NULL,
    CONSTRAINT fk_proveedor_surtido FOREIGN KEY (proveedor_id_proveedor)
    REFERENCES db_proveedor(id_proveedor)
);

CREATE TABLE db_registro_usuarios (
    id_registro INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_usuario INT,
    correo VARCHAR(20) NOT NULL,
    fecha_registro DATE NOT NULL,
    hora_registro TIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES db_usuario(id_usuario)
);

CREATE TABLE db_historial_consulta (
    id_historial INT AUTO_INCREMENT primary key,
    fecha_registro DATE NOT NULL,
    hora_registro TIME NOT NULL,
    consulta_id_consulta INT,
    paciente_id_paciente INT,
    doctor_id_doctor INT,
    costo_consulta DOUBLE NOT NULL,
    fecha_consulta DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    FOREIGN KEY (consulta_id_consulta) REFERENCES db_consulta(id_consulta),
    FOREIGN KEY (paciente_id_paciente) REFERENCES db_paciente(id_paciente),
    FOREIGN KEY (doctor_id_doctor) REFERENCES db_doctor(id_doctor)
);

CREATE TABLE db_historial_medico (
	id_historial INT AUTO_INCREMENT primary key,
    fecha_registro DATE NOT NULL,
    hora_registro TIME NOT NULL,
    consulta_id_consulta INT,
    receta_id_receta INT NOT NULL,
    curp_doctor VARCHAR (18) NOT NULL,
    curp_paciente VARCHAR (18) NOT NULL,
    observaciones VARCHAR(30),
    diagnostico VARCHAR(30) NOT NULL,
    total_servicio DOUBLE NOT NULL,
    FOREIGN KEY (receta_id_receta) REFERENCES db_receta(id_receta),
    FOREIGN KEY (consulta_id_consulta) REFERENCES db_historial_consulta(consulta_id_consulta) 
);

/*CREATE TABLE db_historial_receta (
    id_historial int AUTO_INCREMENT,
    fecha_registro DATE NOT NULL,
    hora_registro TIME NOT NULL,
    receta_id_receta int,
	doctor_id_doctor int NOT NULL,
    FOREIGN KEY (receta_id_receta) REFERENCES db_receta(id_receta),
    FOREIGN KEY (doctor_id_doctor) REFERENCES db_doctor(id_doctor)
);*/