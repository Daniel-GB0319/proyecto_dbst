create database proyecto_dbst;

use proyecto_dbst;

create table db_usuario(
    id_usuario varchar2(10) primary key,
    tipo_usuario varchar2(15) not null,
    correo varchar2(20) not null,  
    password varchar2(64) not null
);

create table db_administrador(
    id_administrador varchar2(10) primary key,
    nombre varchar2(15) not null,
    ap_paterno varchar2(15) not null,
    ap_materno varchar2(15) not null,
    usuario_id_usuario varchar2(10) not null,
    constraint fk_usuario foreign key (usuario_id_usuario)
    references db_usuario(id_usuario)
);

create table db_paciente(
    id_paciente varchar2(10) primary key,
    nombre varchar2(15) not null,
    ap_paterno varchar2(15) not null,
    ap_materno varchar2(15) not null,
    edad int not null,
    tipo_sangre varchar2(3) not null,
    calle varchar2(20) not null,
    num_ext int,
    num_int int,
    colonia varchar2(20) not null,
    delegacion varchar2(20) not null,
    entidad_federativa varchar2(20) not null,
    fecha_nac date not null,
    peso float not null,
    altura float not null,
    sexo varchar2(1) not null,
    aseguradora varchar2(15),
    usuario_id_usuario varchar2(10) not null,
    constraint fk_usuario foreign key (usuario_id_usuario)
    references db_usuario(id_usuario) 
);

create table db_alergias(
    id_alergia varchar2(5) primary key,
    nombre varchar2(15) not null,
    descripcion varchar2(30),
    paciente_id_paciente varchar2(10) not null,
    constraint fk_paciente foreign key (paciente_id_paciente)
    references db_paciente(id_paciente) 
);

create table db_consultorio(
    id_consultorio varchar2(5) primary key,
    numero int not null,
    estado varchar2(15) not null,
    descripcion varchar2(30)
);

create table db_especialidad(
    id_especialidad varchar2(10) primary key,
    nombre varchar2(20) not null,
    descripcion varchar2(30)
);

create table db_horario(
    id_horario varchar2(10) primary key,
    turno varchar2(10) not null,
    dia varchar2(10) not null,
    hora_entrada time not null,
    hora_salida time not null,
    hora_ini_receso time not null,
    hora_fin_receso time not null
);

create table db_doctor(
    id_doctor varchar2(10) primary key,
    nombre varchar2(15) not null,
    ap_paterno varchar2(15) not null,
    ap_materno varchar2(15) not null,
    edad int not null,
    calle varchar2(20) not null,
    num_ext int,
    num_int int,
    colonia varchar2(20) not null,
    delegacion varchar2(20) not null,
    entidad_federativa varchar2(20) not null,
    fecha_nac date not null,
    peso float not null,
    altura float not null,
    sexo varchar2(1) not null,
    aseguradora varchar2(15),
    usuario_id_usuario varchar2(10) not null,
    consultorio_id_consultorio varchar2(5) not null,
    horario_id_horario varchar2(10) not null,
    especialidad_id_especialidad varchar2(10) not null,
    constraint fk_usuario foreign key (usuario_id_usuario)
    references db_usuario(id_usuario),
    constraint fk_consultorio foreign key (consultorio_id_consultorio)
    references db_consultorio(id_consultorio),
    constraint fk_horario foreign key (horario_id_horario)
    references db_horario(id_horario),  
    constraint fk_especialidad foreign key (especialidad_id_especialidad)
    references db_especialidad(id_especialidad)
);

create table db_consulta(
    id_consulta varchar2(10) primary key,
    hora time not null,
    fecha date not null,
    paciente_id_paciente varchar2(10) not null,
    doctor_id_doctor varchar2(10) not null,
    constraint fk_paciente foreign key (paciente_id_paciente)
    references db_paciente(id_paciente),
    constraint fk_doctor foreign key (doctor_id_doctor)
    references db_doctor(id_doctor)  
);

create table db_recepcionista(
    id_recepcionista varchar2(10) primary key,
    nombre varchar2(15) not null,
    ap_paterno varchar2(15) not null,
    ap_materno varchar2(15) not null,
    usuario_id_usuario varchar2(10) not null,
    horario_id_horario varchar2(10) not null,
    constraint fk_usuario foreign key (usuario_id_usuario)
    references db_usuario(id_usuario),
    constraint fk_horario foreign key (horario_id_horario)
    references db_horario(id_horario)
);

create table db_medicamento(
    id_medicamento varchar2(10) primary key,
    nombre varchar2(15) not null,
    compuesto varchar2(15) not null,
    descripcion varchar2(30),
    farmaceutica varchar2(20) not null,
    cantidad int not null,
    precio float not null,
    req_receta char(2)
);

create table db_receta(
    id_receta varchar2(10) primary key,
    fecha_expedicion timestamp not null,
    observaciones varchar2(30),
    diagnostico varchar2(30) not null,
    costo_total float not null,
    doctor_id_doctor varchar2(10) not null,
    medicamento_id_medicamento varchar2(10) not null,
    constraint fk_doctor foreign key (doctor_id_doctor)
    references db_doctor(id_doctor),
    constraint fk_medicamento foreign key (medicamento_id_medicamento)
    references db_medicamento(id_medicamento)    
);

create table db_proveedor(
    id_proveedor varchar2(10) primary key,
    nombre varchar2(15) not null,
    telefono number,
    correo varchar2(20) not null
);

create table db_pedido(
    id_pedido varchar2(10) primary key,
    medicamento_id_medicamento varchar2(10) not null,
    proveedor_id_proveedor varchar2(10) not null,
    constraint fk_medicamento foreign key (medicamento_id_medicamento)
    references db_medicamento(id_medicamento),
    constraint fk_proveedor foreign key (proveedor_id_proveedor)
    references db_proveedor(id_proveedor)    
);

create table db_dias_surtido(
    id_surtido varchar2(5) primary key,
    dia varchar2(15) not null,
    hora time,
    proveedor_id_proveedor varchar2(10) not null,
    constraint fk_proveedor foreign key (proveedor_id_proveedor)
    references db_proveedor(id_proveedor)   
);

-- aqui van las funciones

-- aqui van los script