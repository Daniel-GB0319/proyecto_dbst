-- VERSION 1.0
use proyecto_dbst;

 SELECT * FROM tipo_usuario;
 SELECT * FROM db_usuario;
 SELECT * FROM db_usuario WHERE tipo_usuario = '1';
 SELECT * FROM db_administrador;
 SELECT * FROM db_usuario WHERE tipo_usuario = '4';
 SELECT * FROM db_paciente;
 SELECT * FROM catalogo_alergia;
 SELECT * FROM db_alergias_paciente;
 SELECT * FROM db_consultorio;
 SELECT * FROM db_especialidad;
 SELECT * FROM db_horario;
 SELECT * FROM db_doctor;
 SELECT * FROM db_horario_consulta;
 SELECT id_doctor, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso FROM db_doctor d INNER JOIN db_horario h ON d.horario_id_horario = h.id_horario;
 SELECT * FROM db_consulta;
 SELECT * FROM db_recepcionista;
 SELECT * FROM db_medicamento;
 SELECT * FROM db_receta;
 SELECT * FROM db_receta_medicamento;
 SELECT * FROM db_proveedor;
 SELECT * FROM db_pedido;
 SELECT * FROM db_dias_surtido;


/*			Funciones Disponibles			*/

-- Obtiene el tipo de usuario
SELECT MostrarNombreTipoUsuario(9);

-- Calcula la edad
SELECT CalcularEdad('1979-09-10') AS edad_persona;

-- Verifica que el paciente no tenga citas , 1 = Si y 0 = No
SELECT ComprobarCitasPaciente('CURP1') AS Estado;

-- Verifica que el doctor no tenga citas , para baja de doctor
SELECT ComprobarCitasDoctor('CURPDOC1') AS Estado;

-- Calcula el precio total de la receta
SELECT CalcularPrecioTotal(1) AS precio_total;


/*			Script Stored Procedures			*/

-- Procedure qué tipo de usuario es
CALL VerificarTipoUsuario('6');

-- Procedure para verificar que no exista el paciente antes de crearlo
CALL sp_InsertarPaciente('CURP1', 'Paciente1', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 7);
CALL sp_InsertarPaciente('CURPX', 'Paciente8', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 9);

-- Visualizar historial de citas por parte del doctor
CALL sp_VerHistorialCitasDoctor(1, 'Nombre1', 'AP1', 'AM1');

-- Visualizar citas proximas del doctor
CALL sp_VerCitasProximasDoctor(6);

-- Procedure para visualizar el historial de citas por parte del paciente
CALL sp_VerHistorialCitasPaciente(1);

-- Procedure para visualizar citas proximas
CALL sp_VerCitasProximasPaciente(1);

-- Visualizar recetas emitidas por el doctor
CALL sp_VerRecetasDoctor(25);

-- Visualizar historial medico de paciente
CALL sp_VerHistorialMedicoPaciente(1);

-- Busca los doctores disponibles por dia y horario
CALL DoctoresDisponiblesPorHorario('L', '10:00:00');

-- Procedure para obtener medicamento e id de pedido que trajo un proveedor
CALL ObtenerMedicamentosPorProveedor('Proveedor 4');


/*			Triggers			*/

-- Actualizar tabla historial_consultas
INSERT INTO db_consulta (paciente_id_paciente, doctor_id_doctor, fecha, costo, dia, horario) VALUES
(2, 1, '2023-07-17', 60.00, 'L', 2);

-- Actualiza el historial medico
INSERT INTO db_horario_consulta (inicio_consulta, fin_consulta) VALUES
('19:00:00', '22:00:00');

INSERT INTO db_consulta (paciente_id_paciente, doctor_id_doctor, fecha, costo, dia, horario) VALUES
(3, 5, '2023-06-21', 7, 'X', 24);

INSERT INTO db_receta (fecha_expedicion, observaciones, diagnostico, costo_total, doctor_id_doctor) VALUES
('2023-06-21 01:32:00', 'Observacion1', 'Diagnostico1', 50, 5);

SELECT * FROM db_consulta INNER JOIN db_horario_consulta ON horario = id_horario_consulta;