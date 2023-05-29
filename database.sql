create database proyecto_dbst;

use proyecto_dbst;

create table db_usuario(
    id_usuario varchar2(10) primary key,
    tipo_usuario varchar2(15) not null,
    correo varchar2(20) not null,  
    password varchar2(64) not null,
    ultimo_acceso datetime
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

create table db_receta_medicamento(
    -- jalar id de receta y medicamento como foranea y agregar columna cantidad
    receta_id_receta varchar2(10) not null,
    medicamento_id_medicamento varchar2(10) not null,
    constraint fk_receta foreign key (receta_id_receta)
    references db_receta(id_receta), 
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

-- Bitacoras activadas por triggers

-- Guarda el registro del momento en que se registra un usuario
CREATE TABLE db_registro_usuarios (
    id_registro INT PRIMARY KEY,
    id_usuario VARCHAR(10),
    fecha_registro DATE,
    hora_registro TIME,
    FOREIGN KEY (id_usuario) REFERENCES db_usuario(id_usuario)
);

-- Guarda el registro de todas las consultas y recetas que pertenecen a un paciente
CREATE TABLE db_historial_medico (
    paciente_id_paciente VARCHAR(10) PRIMARY KEY,
    fecha_registro DATE,
    hora_registro TIME
);

CREATE TABLE db_historial_consulta (
    historial_id_paciente VARCHAR(10),
    consulta_id_consulta VARCHAR(10),
    FOREIGN KEY (historial_id_paciente) REFERENCES db_historial_medico(paciente_id_paciente),
    FOREIGN KEY (consulta_id_consulta) REFERENCES db_consulta(id_consulta)
);

CREATE TABLE db_historial_receta (
    historial_id_paciente VARCHAR(10),
    receta_id_receta VARCHAR(10),
    FOREIGN KEY (historial_id_paciente) REFERENCES db_historial_medico(paciente_id_paciente),
    FOREIGN KEY (receta_id_receta) REFERENCES db_receta(id_receta)
);



-- ### Funciones Disponibles ##

-- Calcula el precio total de la receta
CREATE FUNCTION CalcularPrecioTotal(@id_receta VARCHAR(10))
RETURNS FLOAT
AS
BEGIN
    DECLARE @total FLOAT;

    SELECT @total = SUM(m.precio)
    FROM db_receta_medicamento rm
    INNER JOIN db_medicamento m ON rm.medicamento_id_medicamento = m.id_medicamento
    WHERE rm.receta_id_receta = @id_receta;

    RETURN @total;
END;

-- Obtiene el historial medico de un paciente por su id
CREATE FUNCTION ObtenerHistorialMedico(@id_paciente VARCHAR(10))
RETURNS TABLE
AS
RETURN
    SELECT HM.fecha_registro, HM.hora_registro, C.id_consulta, R.id_receta
    FROM db_historial_medico HM
    LEFT JOIN db_historial_consulta HC ON HM.id_historial_medico = HC.historial_id_paciente
    LEFT JOIN db_consulta C ON HC.consulta_id_consulta = C.id_consulta
    LEFT JOIN db_historial_receta HR ON HM.id_historial_medico = HR.historial_id_paciente
    LEFT JOIN db_receta R ON HR.receta_id_receta = R.id_receta
    WHERE HM.paciente_id_paciente = @id_paciente;


-- ### Script Stored Procedures ###

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


-- ## Triggers ##

-- Registra la fecha y hora en la bitacora cuando se registra un nuevo usuario al sistema
CREATE TRIGGER RegistroNuevoUsuario
AFTER INSERT
ON db_usuario
AS
BEGIN
    DECLARE @id_usuario VARCHAR(10);
    SET @id_usuario = (SELECT id_usuario FROM inserted);

    INSERT INTO db_bitacora (id_usuario, fecha_registro, hora_registro)
    VALUES (@id_usuario, GETDATE(), GETDATE());
END;

-- Actualiza el historial cuando un paciente tiene una nueva consulta
CREATE TRIGGER ActualizarHistorialMedico
AFTER INSERT ON db_consulta
FOR EACH ROW
BEGIN
    INSERT INTO db_historial_medico (paciente_id_paciente, fecha_registro, hora_registro)
    VALUES (NEW.paciente_id_paciente, CURRENT_DATE(), CURRENT_TIME());
    
    INSERT INTO db_historial_consulta (historial_id_paciente, consulta_id_consulta)
    VALUES (NEW.paciente_id_paciente, NEW.id_consulta);
END;

-- Actualiza el historial cuando un paciente tiene una nueva receta
CREATE TRIGGER ActualizarHistorialMedicoReceta
AFTER INSERT ON db_receta
FOR EACH ROW
BEGIN
    INSERT INTO db_historial_medico (paciente_id_paciente, fecha_registro, hora_registro)
    VALUES (NEW.paciente_id_paciente, CURRENT_DATE(), CURRENT_TIME());
    
    INSERT INTO db_historial_receta (historial_id_paciente, receta_id_receta)
    VALUES (NEW.paciente_id_paciente, NEW.id_receta);
END;
