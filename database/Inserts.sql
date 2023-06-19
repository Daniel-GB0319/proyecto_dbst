use proyecto_dbst;

-- Tabla tipo_usuario
INSERT INTO tipo_usuario(id_tipoUsuario, nombre_tipoUsuario) VALUES
('1','Administrador'), 
('2','Recepcionista'),
('3','Doctor'),
('4','Paciente');

SELECT * FROM tipo_usuario;

-- Tabla db_usuario
INSERT INTO db_usuario (tipo_usuario, correo, password, ultimo_acceso) VALUES
(1, 'mail1@example.com', 'password1', '2023-06-01 09:30:00'),
(1, 'mail2@example.com', 'password2', '2023-06-02 14:45:00'),
(1, 'mail3@example.com', 'password3', '2023-06-03 11:15:00'),
(1, 'mail4@example.com', 'password4', '2023-06-04 16:20:00'),
(1, 'mail5@example.com', 'password5', '2023-06-05 08:00:00'),
(2, 'mail6@example.com', 'password6', '2023-06-06 13:10:00'),
(2, 'mail7@example.com', 'password7', '2023-06-07 10:25:00'),
(2, 'mail8@example.com', 'password8', '2023-06-08 15:40:00'),
(2, 'mail9@example.com', 'password9', '2023-06-09 12:05:00'),
(2, 'mail10@example.com', 'password10', '2023-06-10 17:55:00'),
(3, 'mail11@example.com', 'password11', '2023-06-01 09:30:00'),
(3, 'mail12@example.com', 'password12', '2023-06-02 14:45:00'),
(3, 'mail13@example.com', 'password13', '2023-06-03 11:15:00'),
(3, 'mail14@example.com', 'password14', '2023-06-04 16:20:00'),
(3, 'mail15@example.com', 'password15', '2023-06-05 08:00:00'),
(3, 'mail16@example.com', 'password16', '2023-06-06 13:10:00'),
(3, 'mail17@example.com', 'password17', '2023-06-07 10:25:00'),
(3, 'mail18@example.com', 'password18', '2023-06-08 15:40:00'),
(3, 'mail19@example.com', 'password19', '2023-06-09 12:05:00'),
(3, 'mail20@example.com', 'password20', '2023-06-10 17:55:00'),
(3, 'mail21@example.com', 'password21', '2023-06-01 09:30:00'),
(3, 'mail22@example.com', 'password22', '2023-06-02 14:45:00'),
(3, 'mail23@example.com', 'password23', '2023-06-03 11:15:00'),
(3, 'mail24@example.com', 'password24', '2023-06-04 16:20:00'),
(3, 'mail25@example.com', 'password25', '2023-06-05 08:00:00'),
(3, 'mail26@example.com', 'password26', '2023-06-06 13:10:00'),
(3, 'mail27@example.com', 'password27', '2023-06-07 10:25:00'),
(3, 'mail28@example.com', 'password28', '2023-06-08 15:40:00'),
(3, 'mail29@example.com', 'password29', '2023-06-09 12:05:00'),
(3, 'mail30@example.com', 'password30', '2023-06-10 17:55:00'),
(3, 'mail31@example.com', 'password31', '2023-06-01 09:30:00'),
(3, 'mail32@example.com', 'password32', '2023-06-02 14:45:00'),
(3, 'mail33@example.com', 'password33', '2023-06-03 11:15:00'),
(3, 'mail34@example.com', 'password34', '2023-06-04 16:20:00'),
(3, 'mail35@example.com', 'password35', '2023-06-05 08:00:00'),
(3, 'mail36@example.com', 'password36', '2023-06-06 13:10:00'),
(3, 'mail37@example.com', 'password37', '2023-06-07 10:25:00'),
(3, 'mail38@example.com', 'password38', '2023-06-08 15:40:00'),
(3, 'mail39@example.com', 'password39', '2023-06-09 12:05:00'),
(3, 'mail40@example.com', 'password40', '2023-06-10 17:55:00'),
(3, 'mail41@example.com', 'password41', '2023-06-01 09:30:00'),
(3, 'mail42@example.com', 'password42', '2023-06-02 14:45:00'),
(3, 'mail43@example.com', 'password43', '2023-06-03 11:15:00'),
(3, 'mail44@example.com', 'password44', '2023-06-04 16:20:00'),
(3, 'mail45@example.com', 'password45', '2023-06-05 08:00:00'),
(3, 'mail46@example.com', 'password46', '2023-06-06 13:10:00'),
(3, 'mail47@example.com', 'password47', '2023-06-07 10:25:00'),
(3, 'mail48@example.com', 'password48', '2023-06-08 15:40:00'),
(3, 'mail49@example.com', 'password49', '2023-06-09 12:05:00'),
(3, 'mail50@example.com', 'password50', '2023-06-10 17:55:00'),
(3, 'mail51@example.com', 'password51', '2023-06-01 09:30:00'),
(3, 'mail52@example.com', 'password52', '2023-06-02 14:45:00'),
(3, 'mail53@example.com', 'password53', '2023-06-03 11:15:00'),
(3, 'mail54@example.com', 'password54', '2023-06-04 16:20:00'),
(3, 'mail55@example.com', 'password55', '2023-06-05 08:00:00'),
(3, 'mail56@example.com', 'password56', '2023-06-06 13:10:00'),
(3, 'mail57@example.com', 'password57', '2023-06-07 10:25:00'),
(3, 'mail58@example.com', 'password58', '2023-06-08 15:40:00'),
(3, 'mail59@example.com', 'password59', '2023-06-09 12:05:00'),
(3, 'mail60@example.com', 'password60', '2023-06-10 17:55:00'),
(4, 'mail61@example.com', 'password61', '2023-06-01 09:30:00'),
(4, 'mail62@example.com', 'password62', '2023-06-02 14:45:00'),
(4, 'mail63@example.com', 'password63', '2023-06-03 11:15:00'),
(4, 'mail64@example.com', 'password64', '2023-06-04 16:20:00'),
(4, 'mail65@example.com', 'password65', '2023-06-05 08:00:00'),
(4, 'mail66@example.com', 'password66', '2023-06-06 13:10:00'),
(4, 'mail67@example.com', 'password67', '2023-06-07 10:25:00'),
(4, 'mail68@example.com', 'password68', '2023-06-08 15:40:00'),
(4, 'mail69@example.com', 'password69', '2023-06-09 12:05:00'),
(4, 'mail70@example.com', 'password70', '2023-06-10 17:55:00'),
(4, 'mail71@example.com', 'password71', '2023-06-01 09:30:00'),
(4, 'mail72@example.com', 'password72', '2023-06-02 14:45:00'),
(4, 'mail73@example.com', 'password73', '2023-06-03 11:15:00'),
(4, 'mail74@example.com', 'password74', '2023-06-04 16:20:00'),
(4, 'mail75@example.com', 'password75', '2023-06-05 08:00:00'),
(4, 'mail76@example.com', 'password76', '2023-06-06 13:10:00'),
(4, 'mail77@example.com', 'password77', '2023-06-07 10:25:00'),
(4, 'mail78@example.com', 'password78', '2023-06-08 15:40:00'),
(4, 'mail79@example.com', 'password79', '2023-06-09 12:05:00'),
(4, 'mail80@example.com', 'password80', '2023-06-10 17:55:00'),
(4, 'mail81@example.com', 'password81', '2023-06-01 09:30:00'),
(4, 'mail82@example.com', 'password82', '2023-06-02 14:45:00'),
(4, 'mail83@example.com', 'password83', '2023-06-03 11:15:00'),
(4, 'mail84@example.com', 'password84', '2023-06-04 16:20:00'),
(4, 'mail85@example.com', 'password85', '2023-06-05 08:00:00'),
(4, 'mail86@example.com', 'password86', '2023-06-06 13:10:00'),
(4, 'mail87@example.com', 'password87', '2023-06-07 10:25:00'),
(4, 'mail88@example.com', 'password88', '2023-06-08 15:40:00'),
(4, 'mail89@example.com', 'password89', '2023-06-09 12:05:00'),
(4, 'mail90@example.com', 'password90', '2023-06-10 17:55:00'),
(4, 'mail91@example.com', 'password91', '2023-06-01 09:30:00'),
(4, 'mail92@example.com', 'password92', '2023-06-02 14:45:00'),
(4, 'mail93@example.com', 'password93', '2023-06-03 11:15:00'),
(4, 'mail94@example.com', 'password94', '2023-06-04 16:20:00'),
(4, 'mail95@example.com', 'password95', '2023-06-05 08:00:00'),
(4, 'mail96@example.com', 'password96', '2023-06-06 13:10:00'),
(4, 'mail97@example.com', 'password97', '2023-06-07 10:25:00'),
(4, 'mail98@example.com', 'password98', '2023-06-08 15:40:00'),
(4, 'mail99@example.com', 'password99', '2023-06-09 12:05:00'),
(4, 'mail100@example.com', 'password100', '2023-06-10 17:55:00'),
(4, 'mail101@example.com', 'password101', '2023-06-01 09:30:00'),
(4, 'mail102@example.com', 'password102', '2023-06-02 14:45:00'),
(4, 'mail103@example.com', 'password103', '2023-06-03 11:15:00'),
(4, 'mail104@example.com', 'password104', '2023-06-04 16:20:00'),
(4, 'mail105@example.com', 'password105', '2023-06-05 08:00:00'),
(4, 'mail106@example.com', 'password106', '2023-06-06 13:10:00'),
(4, 'mail107@example.com', 'password107', '2023-06-07 10:25:00'),
(4, 'mail108@example.com', 'password108', '2023-06-08 15:40:00'),
(4, 'mail109@example.com', 'password109', '2023-06-09 12:05:00'),
(4, 'mail110@example.com', 'password110', '2023-06-10 17:55:00');

SELECT * FROM db_usuario;

-- Tabla db_administrador
INSERT INTO db_administrador (nombre, ap_paterno, ap_materno, usuario_id_usuario)
VALUES
('Admin1', 'Paterno1', 'Materno1', 1),
('Admin2', 'Paterno2', 'Materno2', 2),
('Admin3', 'Paterno3', 'Materno3', 3),
('Admin4', 'Paterno4', 'Materno4', 4),
('Admin5', 'Paterno5', 'Materno5', 5);

SELECT * FROM db_usuario WHERE tipo_usuario = '1';
SELECT * FROM db_administrador;

-- Tabla db_paciente
INSERT INTO db_paciente (CURP, nombre, ap_paterno, ap_materno, edad, tipo_sangre, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, peso, altura, sexo, aseguradora, usuario_id_usuario)
VALUES
('CURP1', 'Nombre1', 'ApellidoP1', 'ApellidoM1', 25, 'O+', 'Calle1', 10, NULL, 'Colonia 1', 'Delegacion1', 'Entidad1', '1996-01-01', 70.5, 170.0, 'M', 'Aseguradora1', 61),
('CURP2', 'Nombre2', 'ApellidoP2', 'ApellidoM2', 30, 'A-', 'Calle2', 20, NULL, 'Colonia 2', 'Delegacion2', 'Entidad2', '1992-05-15', 65.2, 160.0, 'F', 'Aseguradora2', 62),
('CURP3', 'Nombre3', 'ApellidoP3', 'ApellidoM3', 40, 'B+', 'Calle3', 30, NULL, 'Colonia 3', 'Delegacion3', 'Entidad3', '1981-12-03', 80.0, 180.0, 'M', 'Aseguradora3', 63),
('CURP4', 'Nombre4', 'ApellidoP4', 'ApellidoM4', 28, 'AB-', 'Calle4', 40, NULL, 'Colonia 4', 'Delegacion4', 'Entidad4', '1993-07-22', 60.0, 165.0, 'F', 'Aseguradora4', 64),
('CURP5', 'Nombre5', 'ApellidoP5', 'ApellidoM5', 32, 'O+', 'Calle5', 50, NULL, 'Colonia 5', 'Delegacion5', 'Entidad5', '1989-09-10', 75.8, 175.0, 'M', NULL, 65),
('CURP6', 'Nombre6', 'ApellidoP6', 'ApellidoM6', 37, 'A+', 'Calle6', 60, NULL, 'Colonia 6', 'Delegacion6', 'Entidad6', '1984-03-18', 68.3, 168.0, 'F', NULL, 66),
('CURP7', 'Nombre7', 'ApellidoP7', 'ApellidoM7', 45, 'B-', 'Calle7', 70, NULL, 'Colonia 7', 'Delegacion7', 'Entidad7', '1978-11-29', 85.0, 190.0, 'M', 'Aseguradora7', 67),
('CURP8', 'Nombre8', 'ApellidoP8', 'ApellidoM8', 29, 'AB+', 'Calle8', 80, NULL, 'Colonia 8', 'Delegacion8', 'Entidad8', '1992-06-04', 63.5, 163.0, 'F', 'Aseguradora8', 68),
('CURP9', 'Nombre9', 'ApellidoP9', 'ApellidoM9', 42, 'O-', 'Calle9', 90, NULL, 'Colonia 9', 'Delegacion9', 'Entidad9', '1979-09-17', 77.2, 178.0, 'M', 'Aseguradora9', 69),
('CURP10', 'Nombre10', 'ApellidoP10', 'ApellidoM10', 31, 'A-', 'Calle10', 100, NULL, 'Colonia 10', 'Delegacion10', 'Entidad10', '1990-08-12', 72.1, 172.0, 'F', 'Aseguradora10', 70),
('CURP11', 'Nombre11', 'ApellidoP11', 'ApellidoM11', 35, 'AB+', 'Calle11', 110, NULL, 'Colonia 11', 'Delegacion11', 'Entidad11', '1986-02-25', 69.7, 166.0, 'F', 'Aseguradora11', 71),
('CURP12', 'Nombre12', 'ApellidoP12', 'ApellidoM12', 39, 'O+', 'Calle12', 120, NULL, 'Colonia 12', 'Delegacion12', 'Entidad12', '1982-10-07', 81.4, 183.0, 'M', 'Aseguradora12', 72),
('CURP13', 'Nombre13', 'ApellidoP13', 'ApellidoM13', 27, 'B-', 'Calle13', 130, NULL, 'Colonia 13', 'Delegacion13', 'Entidad13', '1994-04-14', 67.9, 164.0, 'F', NULL, 73),
('CURP14', 'Nombre14', 'ApellidoP14', 'ApellidoM14', 34, 'A+', 'Calle14', 140, NULL, 'Colonia 14', 'Delegacion14', 'Entidad14', '1987-07-31', 73.8, 170.0, 'M', 'Aseguradora14', 74),
('CURP15', 'Nombre15', 'ApellidoP15', 'ApellidoM15', 44, 'O-', 'Calle15', 150, NULL, 'Colonia 15', 'Delegacion15', 'Entidad15', '1977-12-26', 87.6, 195.0, 'M', 'Aseguradora15', 75),
('CURP16', 'Nombre16', 'ApellidoP16', 'ApellidoM16', 38, 'B+', 'Calle16', 160, NULL, 'Colonia 16', 'Delegacion16', 'Entidad16', '1983-11-08', 79.5, 176.0, 'F', NULL, 76),
('CURP17', 'Nombre17', 'ApellidoP17', 'ApellidoM17', 33, 'AB-', 'Calle17', 170, NULL, 'Colonia 17', 'Delegacion17', 'Entidad17', '1988-09-21', 74.2, 169.0, 'M', NULL, 77),
('CURP18', 'Nombre18', 'ApellidoP18', 'ApellidoM18', 41, 'O+', 'Calle18', 180, NULL, 'Colonia 18', 'Delegacion18', 'Entidad18', '1980-03-03', 83.1, 182.0, 'M', NULL, 78),
('CURP19', 'Nombre19', 'ApellidoP19', 'ApellidoM19', 36, 'A-', 'Calle19', 190, NULL, 'Colonia 19', 'Delegacion19', 'Entidad19', '1985-05-19', 70.9, 168.0, 'F', NULL, 79),
('CURP20', 'Nombre20', 'ApellidoP20', 'ApellidoM20', 43, 'B+', 'Calle20', 200, NULL, 'Colonia 20', 'Delegacion20', 'Entidad20', '1978-08-27', 86.0, 190.0, 'M', NULL, 80),
('CURP21', 'Nombre21', 'ApellidoP21', 'ApellidoM21', 29, 'AB-', 'Calle21', 210, NULL, 'Colonia 21', 'Delegacion21', 'Entidad21', '1993-02-14', 66.3, 163.0, 'F', 'Aseguradora21', 81),
('CURP22', 'Nombre22', 'ApellidoP22', 'ApellidoM22', 32, 'O+', 'Calle22', 220, NULL, 'Colonia 22', 'Delegacion22', 'Entidad22', '1990-10-30', 75.5, 175.0, 'M', 'Aseguradora22', 82),
('CURP23', 'Nombre23', 'ApellidoP23', 'ApellidoM23', 39, 'A+', 'Calle23', 230, NULL, 'Colonia 23', 'Delegacion23', 'Entidad23', '1982-06-18', 80.7, 180.0, 'F', 'Aseguradora23', 83),
('CURP24', 'Nombre24', 'ApellidoP24', 'ApellidoM24', 47, 'B-', 'Calle24', 240, NULL, 'Colonia 24', 'Delegacion24', 'Entidad24', '1976-04-05', 88.5, 192.0, 'M', NULL, 84),
('CURP25', 'Nombre25', 'ApellidoP25', 'ApellidoM25', 37, 'AB+', 'Calle25', 250, NULL, 'Colonia 25', 'Delegacion25', 'Entidad25', '1984-01-23', 69.0, 165.0, 'F', NULL, 85),
('CURP26', 'Nombre26', 'ApellidoP26', 'ApellidoM26', 42, 'O-', 'Calle26', 260, NULL, 'Colonia 26', 'Delegacion26', 'Entidad26', '1979-03-12', 82.3, 181.0, 'M', 'Aseguradora26', 86),
('CURP27', 'Nombre27', 'ApellidoP27', 'ApellidoM27', 31, 'B+', 'Calle27', 270, NULL, 'Colonia 27', 'Delegacion27', 'Entidad27', '1990-07-07', 73.1, 170.0, 'F', NULL, 87),
('CURP28', 'Nombre28', 'ApellidoP28', 'ApellidoM28', 35, 'A-', 'Calle28', 280, NULL, 'Colonia 28', 'Delegacion28', 'Entidad28', '1986-11-29', 68.9, 166.0, 'M', 'Aseguradora28', 88),
('CURP29', 'Nombre29', 'ApellidoP29', 'ApellidoM29', 44, 'AB+', 'Calle29', 290, NULL, 'Colonia 29', 'Delegacion29', 'Entidad29', '1977-10-16', 87.0, 190.0, 'M', NULL, 89),
('CURP30', 'Nombre30', 'ApellidoP30', 'ApellidoM30', 38, 'O+', 'Calle30', 300, NULL, 'Colonia 30', 'Delegacion30', 'Entidad30', '1983-12-02', 78.4, 178.0, 'F', 'Aseguradora30', 90),
('CURP31', 'Nombre31', 'ApellidoP31', 'ApellidoM31', 27, 'A+', 'Calle31', 310, NULL, 'Colonia 31', 'Delegacion31', 'Entidad31', '1996-09-08', 65.2, 160.0, 'F', 'Aseguradora31', 91),
('CURP32', 'Nombre32', 'ApellidoP32', 'ApellidoM32', 33, 'B-', 'Calle32', 320, NULL, 'Colonia 32', 'Delegacion32', 'Entidad32', '1990-05-14', 71.8, 172.0, 'M', 'Aseguradora32', 92),
('CURP33', 'Nombre33', 'ApellidoP33', 'ApellidoM33', 29, 'AB-', 'Calle33', 330, NULL, 'Colonia 33', 'Delegacion33', 'Entidad33', '1992-08-23', 68.5, 167.0, 'F', 'Aseguradora33', 93),
('CURP34', 'Nombre34', 'ApellidoP34', 'ApellidoM34', 42, 'O-', 'Calle34', 340, NULL, 'Colonia 34', 'Delegacion34', 'Entidad34', '1979-07-17', 84.2, 178.0, 'M', NULL, 94),
('CURP35', 'Nombre35', 'ApellidoP35', 'ApellidoM35', 38, 'A+', 'Calle35', 350, NULL, 'Colonia 35', 'Delegacion35', 'Entidad35', '1983-12-12', 76.9, 175.0, 'F', NULL, 95),
('CURP36', 'Nombre36', 'ApellidoP36', 'ApellidoM36', 45, 'AB+', 'Calle36', 360, NULL, 'Colonia 36', 'Delegacion36', 'Entidad36', '1978-03-28', 90.6, 188.0, 'M', 'Aseguradora36', 96),
('CURP37', 'Nombre37', 'ApellidoP37', 'ApellidoM37', 31, 'B+', 'Calle37', 370, NULL, 'Colonia 37', 'Delegacion37', 'Entidad37', '1992-01-05', 72.4, 169.0, 'F', NULL, 97),
('CURP38', 'Nombre38', 'ApellidoP38', 'ApellidoM38', 37, 'A-', 'Calle38', 380, NULL, 'Colonia 38', 'Delegacion38', 'Entidad38', '1986-05-19', 69.8, 166.0, 'M', 'Aseguradora38', 98),
('CURP39', 'Nombre39', 'ApellidoP39', 'ApellidoM39', 39, 'O+', 'Calle39', 390, NULL, 'Colonia 39', 'Delegacion39', 'Entidad39', '1984-08-29', 77.1, 172.0, 'F', 'Aseguradora39', 99),
('CURP40', 'Nombre40', 'ApellidoP40', 'ApellidoM40', 43, 'B-', 'Calle40', 400, NULL, 'Colonia 40', 'Delegacion40', 'Entidad40', '1979-03-17', 82.6, 180.0, 'M', 'Aseguradora40', 100),
('CURP41', 'Nombre41', 'ApellidoP41', 'ApellidoM41', 28, 'AB-', 'Calle41', 410, NULL, 'Colonia 41', 'Delegacion41', 'Entidad41', '1995-07-21', 67.5, 165.0, 'F', 'Aseguradora41', 101),
('CURP42', 'Nombre42', 'ApellidoP42', 'ApellidoM42', 36, 'O-', 'Calle42', 420, NULL, 'Colonia 42', 'Delegacion42', 'Entidad42', '1987-11-09', 79.3, 175.0, 'M', 'Aseguradora42', 102),
('CURP43', 'Nombre43', 'ApellidoP43', 'ApellidoM43', 41, 'A+', 'Calle43', 430, NULL, 'Colonia 43', 'Delegacion43', 'Entidad43', '1982-02-26', 83.7, 180.0, 'F', NULL, 103),
('CURP44', 'Nombre44', 'ApellidoP44', 'ApellidoM44', 30, 'B+', 'Calle44', 440, NULL, 'Colonia 44', 'Delegacion44', 'Entidad44', '1991-09-30', 70.1, 168.0, 'M', NULL, 104),
('CURP45', 'Nombre45', 'ApellidoP45', 'ApellidoM45', 34, 'A-', 'Calle45', 450, NULL, 'Colonia 45', 'Delegacion45', 'Entidad45', '1987-05-03', 68.2, 163.0, 'F', NULL, 105),
('CURP46', 'Nombre46', 'ApellidoP46', 'ApellidoM46', 46, 'AB+', 'Calle46', 460, NULL, 'Colonia 46', 'Delegacion46', 'Entidad46', '1977-12-24', 92.0, 192.0, 'M', 'Aseguradora46', 106),
('CURP47', 'Nombre47', 'ApellidoP47', 'ApellidoM47', 32, 'O+', 'Calle47', 470, NULL, 'Colonia 47', 'Delegacion47', 'Entidad47', '1991-02-13', 73.8, 170.0, 'F', 'Aseguradora47', 107),
('CURP48', 'Nombre48', 'ApellidoP48', 'ApellidoM48', 40, 'B-', 'Calle48', 480, NULL, 'Colonia 48', 'Delegacion48', 'Entidad48', '1983-11-07', 80.5, 175.0, 'M', NULL, 108),
('CURP49', 'Nombre49', 'ApellidoP49', 'ApellidoM49', 44, 'AB-', 'Calle49', 490, NULL, 'Colonia 49', 'Delegacion49', 'Entidad49', '1979-04-28', 85.2, 182.0, 'F', 'Aseguradora49', 109),
('CURP50', 'Nombre50', 'ApellidoP50', 'ApellidoM50', 29, 'O-', 'Calle50', 500, NULL, 'Colonia 50', 'Delegacion50', 'Entidad50', '1993-08-10', 75.4, 168.0, 'M', 'Aseguradora50', 110);

SELECT * FROM db_usuario WHERE tipo_usuario = '4';
SELECT * FROM db_paciente;

-- Tabla catalogo_alergia
INSERT INTO catalogo_alergia (nombre_alergia)
VALUES
('Polen'),
('Polvo'),
('Acaros de polvo'),
('Acaros del moho'),
('Leche'),
('Penicilina'),
('Aspirina'),
('Ibuprofeno'),
('Abejas'),
('Latex');

SELECT * FROM catalogo_alergia;

-- Tabla
INSERT INTO db_alergias_paciente (id_alergia, paciente_id_paciente, descripcion)
VALUES
(1, 61, 'Descripcion1'),
(2, 62, 'Descripcion2'),
(3, 63, 'Descripcion3'),
(4, 64, 'Descripcion4'),
(5, 75, 'Descripcion5'),
(6, 96, 'Descripcion6'),
(7, 67, 'Descripcion7'),
(8, 88, 'Descripcion8'),
(9, 69, 'Descripcion9'),
(10, 70, 'Descripcion10'),
(1, 101, 'Descripcion11'),
(2, 98, 'Descripcion12'),
(3, 73, 'Descripcion13'),
(4, 104, 'Descripcion14'),
(5, 61, 'Descripcion15'),
(6, 72, 'Descripcion16'),
(7, 87, 'Descripcion17'),
(8, 108, 'Descripcion18'),
(9, 90, 'Descripcion19'),
(10, 72, 'Descripcion20');

SELECT * FROM db_alergias_paciente;

-- Tabla db_consultorio
INSERT INTO db_consultorio (numero, estado, descripcion) VALUES
(101, 'Disponible', 'Consultorio en planta baja'),
(201, 'Ocupado', 'Consultorio en primer piso'),
(301, 'Disponible', 'Consultorio en segundo piso'),
(401, 'Disponible', 'Consultorio en tercer piso'),
(501, 'Ocupado', 'Consultorio en quinto piso'),
(601, 'Disponible', 'Consultorio en sexto piso'),
(701, 'Ocupado', 'Consultorio en séptimo piso'),
(801, 'Disponible', 'Consultorio en octavo piso'),
(901, 'Disponible', 'Consultorio en noveno piso'),
(1001, 'Ocupado', 'Consultorio en décimo piso');

SELECT * FROM db_consultorio;

-- Tabla db_especialidad
INSERT INTO db_especialidad (nombre, descripcion) VALUES
('Cardiologia', 'Descripción especialidad 1'),
('Dermatologia', 'Descripción especialidad 2'),
('Ginecologia', 'Descripción especialidad 3'),
('Pediatria', 'Descripción especialidad 4'),
('Ortopedia', 'Descripción especialidad 5');

SELECT * FROM db_especialidad;

-- Tabla db_horario
INSERT INTO db_horario (turno, dia, hora_entrada, hora_salida, hora_ini_receso, hora_fin_receso)
VALUES
('Matutino', 'L', '08:00:00', '12:00:00', '10:00:00', '10:30:00'),
('Vespertino', 'L', '14:00:00', '18:00:00', '16:00:00', '16:30:00'),
('Matutino', 'M', '08:00:00', '12:00:00', '10:00:00', '10:30:00'),
('Vespertino', 'M', '14:00:00', '18:00:00', '16:00:00', '16:30:00'),
('Matutino', 'X', '09:00:00', '13:00:00', '11:00:00', '11:30:00'),
('Vespertino', 'X', '15:00:00', '19:00:00', '17:00:00', '17:30:00'),
('Matutino', 'J', '08:00:00', '12:00:00', '10:00:00', '10:30:00'),
('Vespertino', 'J', '15:00:00', '19:00:00', '17:00:00', '17:30:00'),
('Matutino', 'V', '08:30:00', '12:30:00', '10:30:00', '11:00:00'),
('Vespertino', 'V', '13:30:00', '17:30:00', '15:30:00', '16:00:00');

SELECT * FROM db_horario;

-- Tabla db_doctor
INSERT INTO db_doctor (CURP, nombre, ap_paterno, ap_materno, edad, calle, num_ext, num_int, colonia, delegacion, entidad_federativa, fecha_nac, sexo, aseguradora, usuario_id_usuario, consultorio_id_consultorio, horario_id_horario, especialidad_id_especialidad) VALUES
('CURPDOC1', 'Nombre1', 'AP1', 'AM1', 35, 'Calle1', 1, NULL, 'Colonia1', 'Delegacion1', 'EntFed1', '1987-01-01', 'M', 'Aseguradora1', 11, 1, 0, 1),
('CURPDOC2', 'Nombre2', 'AP2', 'AM2', 40, 'Calle2', 2, NULL, 'Colonia2', 'Delegacion2', 'EntFed2', '1982-02-02', 'F', 'Aseguradora2', 12, 0, 3, 2),
('CURPDOC3', 'Nombre3', 'AP3', 'AM3', 45, 'Calle3', 3, NULL, 'Colonia3', 'Delegacion3', 'EntFed3', '1977-03-03', 'M', 'Aseguradora3', 13, 2, 5, 3),
('CURPDOC4', 'Nombre4', 'AP4', 'AM4', 50, 'Calle4', 4, NULL, 'Colonia4', 'Delegacion4', 'EntFed4', '1972-04-04', 'F', 'Aseguradora4', 14, 2, 9, 4),
('CURPDOC5', 'Nombre5', 'AP5', 'AM5', 55, 'Calle5', 5, NULL, 'Colonia5', 'Delegacion5', 'EntFed5', '1967-05-05', 'M', 'Aseguradora5', 15, 0, 2, 0),
('CURPDOC6', 'Nombre6', 'AP6', 'AM6', 60, 'Calle6', 6, NULL, 'Colonia6', 'Delegacion6', 'EntFed6', '1962-06-06', 'F', 'Aseguradora6', 16, 1, 6, 0),
('CURPDOC7', 'Nombre7', 'AP7', 'AM7', 65, 'Calle7', 7, NULL, 'Colonia7', 'Delegacion7', 'EntFed7', '1957-07-07', 'M', 'Aseguradora7', 17, 5, 7, 4),
('CURPDOC8', 'Nombre8', 'AP8', 'AM8', 70, 'Calle8', 8, NULL, 'Colonia8', 'Delegacion8', 'EntFed8', '1952-08-08', 'F', 'Aseguradora8', 18, 9, 5, 3),
('CURPDOC9', 'Nombre9', 'AP9', 'AM9', 75, 'Calle9', 9, NULL, 'Colonia9', 'Delegacion9', 'EntFed9', '1947-09-09', 'M', 'Aseguradora9', 19, 0, 9, 4),
('CURPDOC10', 'Nombre10', 'AP10', 'AM10', 80, 'Calle10', 10, NULL, 'Colonia10', 'Delegacion10', 'EntFed10', '1942-10-10', 'F', 'Aseguradora10', 20, 1, 0, 2),
('CURPDOC11', 'Nombre11', 'AP11', 'AM11', 85, 'Calle11', 11, NULL, 'Colonia11', 'Delegacion11', 'EntFed11', '1937-11-11', 'M', 'Aseguradora11', 21, 2, 1, 4),
('CURPDOC12', 'Nombre12', 'AP12', 'AM12', 90, 'Calle12', 12, NULL, 'Colonia12', 'Delegacion12', 'EntFed12', '1932-12-12', 'F', 'Aseguradora12', 22, 3, 1, 1),
('CURPDOC13', 'Nombre13', 'AP13', 'AM13', 95, 'Calle13', 13, NULL, 'Colonia13', 'Delegacion13', 'EntFed13', '1927-01-13', 'M', 'Aseguradora13', 23, 4, 2, 0),
('CURPDOC14', 'Nombre14', 'AP14', 'AM14', 100, 'Calle14', 14, NULL, 'Colonia14', 'Delegacion14', 'EntFed14', '1922-02-14', 'F', 'Aseguradora14', 24, 5, 4, 1),
('CURPDOC15', 'Nombre15', 'AP15', 'AM15', 105, 'Calle15', 15, NULL, 'Colonia15', 'Delegacion15', 'EntFed15', '1917-03-15', 'M', 'Aseguradora15', 25, 8, 3, 1),
('CURPDOC16', 'Nombre16', 'AP16', 'AM16', 110, 'Calle16', 16, NULL, 'Colonia16', 'Delegacion16', 'EntFed16', '1912-04-16', 'F', 'Aseguradora16', 26, 9, 4, 1),
('CURPDOC17', 'Nombre17', 'AP17', 'AM17', 115, 'Calle17', 17, NULL, 'Colonia17', 'Delegacion17', 'EntFed17', '1907-05-17', 'M', 'Aseguradora17', 27, 0, 6, 2),
('CURPDOC18', 'Nombre18', 'AP18', 'AM18', 120, 'Calle18', 18, NULL, 'Colonia18', 'Delegacion18', 'EntFed18', '1902-06-18', 'F', 'Aseguradora18', 28, 2, 8, 4),
('CURPDOC19', 'Nombre19', 'AP19', 'AM19', 125, 'Calle19', 19, NULL, 'Colonia19', 'Delegacion19', 'EntFed19', '1897-07-19', 'M', 'Aseguradora19', 29, 3, 1, 3),
('CURPDOC20', 'Nombre20', 'AP20', 'AM20', 130, 'Calle20', 20, NULL, 'Colonia20', 'Delegacion20', 'EntFed20', '1892-08-20', 'F', 'Aseguradora20', 30, 2, 2, 3),
('CURPDOC21', 'Nombre21', 'AP21', 'AM21', 135, 'Calle21', 21, NULL, 'Colonia21', 'Delegacion21', 'EntFed21', '1887-09-21', 'M', 'Aseguradora21', 31, 3, 1, 3),
('CURPDOC22', 'Nombre22', 'AP22', 'AM22', 140, 'Calle22', 22, NULL, 'Colonia22', 'Delegacion22', 'EntFed22', '1882-10-22', 'F', 'Aseguradora22', 32, 4, 2, 3),
('CURPDOC23', 'Nombre23', 'AP23', 'AM23', 145, 'Calle23', 23, NULL, 'Colonia23', 'Delegacion23', 'EntFed23', '1877-11-23', 'M', 'Aseguradora23', 33, 7, 2, 3),
('CURPDOC24', 'Nombre24', 'AP24', 'AM24', 150, 'Calle24', 24, NULL, 'Colonia24', 'Delegacion24', 'EntFed24', '1872-12-24', 'F', 'Aseguradora24', 34, 8, 2, 4),
('CURPDOC25', 'Nombre25', 'AP25', 'AM25', 155, 'Calle25', 25, NULL, 'Colonia25', 'Delegacion25', 'EntFed25', '1867-01-25', 'M', 'Aseguradora25', 35, 6, 5, 0),
('CURPDOC26', 'Nombre26', 'AP26', 'AM26', 160, 'Calle26', 26, NULL, 'Colonia26', 'Delegacion26', 'EntFed26', '1862-02-26', 'F', 'Aseguradora26', 36, 6, 6, 0),
('CURPDOC27', 'Nombre27', 'AP27', 'AM27', 165, 'Calle27', 27, NULL, 'Colonia27', 'Delegacion27', 'EntFed27', '1857-03-27', 'M', 'Aseguradora27', 37, 6, 5, 1),
('CURPDOC28', 'Nombre28', 'AP28', 'AM28', 170, 'Calle28', 28, NULL, 'Colonia28', 'Delegacion28', 'EntFed28', '1852-04-28', 'F', 'Aseguradora28', 38, 5, 8, 2),
('CURPDOC29', 'Nombre29', 'AP29', 'AM29', 175, 'Calle29', 29, NULL, 'Colonia29', 'Delegacion29', 'EntFed29', '1847-05-29', 'M', 'Aseguradora29', 39, 7, 9, 2),
('CURPDOC30', 'Nombre30', 'AP30', 'AM30', 180, 'Calle30', 30, NULL, 'Colonia30', 'Delegacion30', 'EntFed30', '1842-06-30', 'F', 'Aseguradora30', 40, 1, 8, 3),
('CURPDOC31', 'Nombre31', 'AP31', 'AM31', 185, 'Calle31', 31, NULL, 'Colonia31', 'Delegacion31', 'EntFed31', '1837-07-01', 'M', 'Aseguradora31', 41, 2, 1, 1),
('CURPDOC32', 'Nombre32', 'AP32', 'AM32', 190, 'Calle32', 32, NULL, 'Colonia32', 'Delegacion32', 'EntFed32', '1832-08-02', 'F', 'Aseguradora32', 42, 0, 3, 2),
('CURPDOC33', 'Nombre33', 'AP33', 'AM33', 195, 'Calle33', 33, NULL, 'Colonia33', 'Delegacion33', 'EntFed33', '1827-09-03', 'M', 'Aseguradora33', 43, 0, 3, 3),
('CURPDOC34', 'Nombre34', 'AP34', 'AM34', 200, 'Calle34', 34, NULL, 'Colonia34', 'Delegacion34', 'EntFed34', '1822-10-04', 'F', 'Aseguradora34', 44, 1, 3, 3),
('CURPDOC35', 'Nombre35', 'AP35', 'AM35', 205, 'Calle35', 35, NULL, 'Colonia35', 'Delegacion35', 'EntFed35', '1817-11-05', 'M', 'Aseguradora35', 45, 8, 5, 0),
('CURPDOC36', 'Nombre36', 'AP36', 'AM36', 210, 'Calle36', 36, NULL, 'Colonia36', 'Delegacion36', 'EntFed36', '1812-12-06', 'F', 'Aseguradora36', 46, 9, 6, 4),
('CURPDOC37', 'Nombre37', 'AP37', 'AM37', 215, 'Calle37', 37, NULL, 'Colonia37', 'Delegacion37', 'EntFed37', '1807-01-07', 'M', 'Aseguradora37', 47, 2, 7, 1),
('CURPDOC38', 'Nombre38', 'AP38', 'AM38', 220, 'Calle38', 38, NULL, 'Colonia38', 'Delegacion38', 'EntFed38', '1802-02-08', 'F', 'Aseguradora38', 48, 8, 8, 2),
('CURPDOC39', 'Nombre39', 'AP39', 'AM39', 225, 'Calle39', 39, NULL, 'Colonia39', 'Delegacion39', 'EntFed39', '1797-03-09', 'M', 'Aseguradora39', 49, 9, 9, 2),
('CURPDOC40', 'Nombre40', 'AP40', 'AM40', 230, 'Calle40', 40, NULL, 'Colonia40', 'Delegacion40', 'EntFed40', '1792-04-10', 'F', 'Aseguradora40', 50, 7, 0, 2),
('CURPDOC41', 'Nombre41', 'AP41', 'AM41', 235, 'Calle41', 41, NULL, 'Colonia41', 'Delegacion41', 'EntFed41', '1787-05-11', 'M', 'Aseguradora41', 51, 8, 4, 1),
('CURPDOC42', 'Nombre42', 'AP42', 'AM42', 240, 'Calle42', 42, NULL, 'Colonia42', 'Delegacion42', 'EntFed42', '1782-06-12', 'F', 'Aseguradora42', 52, 2, 4, 2),
('CURPDOC43', 'Nombre43', 'AP43', 'AM43', 245, 'Calle43', 43, NULL, 'Colonia43', 'Delegacion43', 'EntFed43', '1777-07-13', 'M', 'Aseguradora43', 53, 9, 3, 4),
('CURPDOC44', 'Nombre44', 'AP44', 'AM44', 250, 'Calle44', 44, NULL, 'Colonia44', 'Delegacion44', 'EntFed44', '1772-08-14', 'F', 'Aseguradora44', 54, 0, 4, 4),
('CURPDOC45', 'Nombre45', 'AP45', 'AM45', 255, 'Calle45', 45, NULL, 'Colonia45', 'Delegacion45', 'EntFed45', '1767-09-15', 'M', 'Aseguradora45', 55, 1, 4, 0),
('CURPDOC46', 'Nombre46', 'AP46', 'AM46', 260, 'Calle46', 46, NULL, 'Colonia46', 'Delegacion46', 'EntFed46', '1762-10-16', 'F', 'Aseguradora46', 56, 8, 4, 2),
('CURPDOC47', 'Nombre47', 'AP47', 'AM47', 265, 'Calle47', 47, NULL, 'Colonia47', 'Delegacion47', 'EntFed47', '1757-11-17', 'M', 'Aseguradora47', 57, 9, 7, 2),
('CURPDOC48', 'Nombre48', 'AP48', 'AM48', 270, 'Calle48', 48, NULL, 'Colonia48', 'Delegacion48', 'EntFed48', '1752-12-18', 'F', 'Aseguradora48', 58, 7, 8, 2),
('CURPDOC49', 'Nombre49', 'AP49', 'AM49', 275, 'Calle49', 49, NULL, 'Colonia49', 'Delegacion49', 'EntFed49', '1747-01-19', 'M', 'Aseguradora49', 59, 0, 9, 1),
('CURPDOC50', 'Nombre50', 'AP50', 'AM50', 280, 'Calle50', 50, NULL, 'Colonia50', 'Delegacion50', 'EntFed50', '1742-02-20', 'F', 'Aseguradora50', 60, 0, 8, 1);

SELECT * FROM db_doctor;

-- Tabla db_consulta
INSERT INTO db_consulta (id_consulta, hora, fecha, paciente_id_paciente, doctor_id_doctor)
VALUES
('1', '09:00:00', '2023-06-15', 'paciente1', 'doctor1'),
('2', '14:30:00', '2023-06-16', 'paciente2', 'doctor2'),
('3', '11:45:00', '2023-06-17', 'paciente3', 'doctor3'),
('4', '16:15:00', '2023-06-18', 'paciente4', 'doctor4'),
('5', '10:30:00', '2023-06-19', 'paciente5', 'doctor5');

SELECT * FROM db_consulta;

-- Tabla db_recepcionista
INSERT INTO db_recepcionista (nombre, ap_paterno, ap_materno, usuario_id_usuario, horario_id_horario)
VALUES
('Ana', 'Gómez', 'López', 6, 1),
('Juan', 'Hernández', 'Sánchez', 7, 2),
('María', 'López', 'González', 8, 3),
('Carlos', 'Martínez', 'Torres', 9, 4),
('Laura', 'Sánchez', 'Ramírez', 10, 5);

SELECT * FROM db_recepcionista;

-- Tabla db_medicamento
INSERT INTO db_medicamento (nombre, compuesto, descripcion, farmaceutica, cantidad, precio, req_receta)
VALUES
('Paracetamol', 'Paracetamol', 'Alivio del dolor y reducción de la fiebre', 'Farmaceutica1', 100, 10.99, 'No'),
('Ibuprofeno', 'Ibuprofeno', 'Antiinflamatorio y analgésico', 'Farmaceutica2', 80, 8.75, 'No'),
('Amoxicilina', 'Amoxicilina', 'Antibiótico de amplio espectro', 'Farmaceutica3', 50, 15.50, 'Sí'),
('Loratadina', 'Loratadina', 'Antihistamínico para alivio de alergias', 'Farmaceutica4', 60, 12.25, 'No'),
('Omeprazol', 'Omeprazol', 'Inhibidor de la bomba de protones para reducir la producción de ácido estomacal', 'Farmaceutica5', 40, 14.75, 'No'),
('Simvastatina', 'Simvastatina', 'Reductor de los niveles de colesterol', 'Farmaceutica6', 30, 20.50, 'No'),
('Metformina', 'Metformina', 'Medicamento para el control de la diabetes tipo 2', 'Farmaceutica7', 70, 18.99, 'Sí'),
('Salbutamol', 'Salbutamol', 'Broncodilatador para el alivio de los síntomas del asma', 'Farmaceutica8', 90, 9.25, 'No'),
('Hidroclorotiazida', 'Hidroclorotiazida', 'Diurético utilizado para el tratamiento de la hipertensión', 'Farmaceutica9', 55, 11.50, 'No'),
('Atorvastatina', 'Atorvastatina', 'Medicamento para reducir los niveles de colesterol y triglicéridos', 'Farmaceutica10', 75, 16.75, 'No'),
('Diclofenaco', 'Diclofenaco', 'Analgésico y antiinflamatorio no esteroideo', 'Farmaceutica11', 50, 9.99, 'No'),
('Cetirizina', 'Cetirizina', 'Antihistamínico para alivio de la rinitis alérgica', 'Farmaceutica12', 60, 7.75, 'No'),
('Diazepam', 'Diazepam', 'Benzodiacepina para el tratamiento de la ansiedad y los trastornos convulsivos', 'Farmaceutica13', 40, 13.50, 'Sí'),
('Paroxetina', 'Paroxetina', 'Antidepresivo inhibidor selectivo de la recaptación de serotonina', 'Farmaceutica14', 30, 15.75, 'Sí'),
('Metoprolol', 'Metoprolol', 'Bloqueador beta utilizado para tratar la hipertensión y enfermedades del corazón', 'Farmaceutica15', 70, 11.99, 'No'),
('Lansoprazol', 'Lansoprazol', 'Inhibidor de la bomba de protones para tratar la acidez estomacal y las úlceras', 'Farmaceutica16', 80, 10.25, 'No'),
('Tramadol', 'Tramadol', 'Analgésico opioide para el tratamiento del dolor moderado a severo', 'Farmaceutica17', 90, 14.50, 'Sí'),
('Ciprofloxacino', 'Ciprofloxacino', 'Antibiótico fluoroquinolona de amplio espectro', 'Farmaceutica18', 55, 12.75, 'Sí'),
('Sertralina', 'Sertralina', 'Antidepresivo inhibidor selectivo de la recaptación de serotonina', 'Farmaceutica19', 65, 13.99, 'Sí'),
('Rosuvastatina', 'Rosuvastatina', 'Medicamento para reducir el colesterol y prevenir enfermedades cardiovasculares', 'Farmaceutica20', 75, 19.25, 'No'),
('Metronidazol', 'Metronidazol', 'Antibiótico y antiprotozoario utilizado para tratar infecciones', 'Farmaceutica21', 40, 8.50, 'Sí'),
('Dipirona', 'Dipirona', 'Analgésico y antipirético utilizado para tratar el dolor y reducir la fiebre', 'Farmaceutica22', 60, 9.25, 'No'),
('Amlodipino', 'Amlodipino', 'Bloqueador de los canales de calcio para tratar la hipertensión y enfermedades del corazón', 'Farmaceutica23', 70, 11.99, 'No'),
('Fluoxetina', 'Fluoxetina', 'Antidepresivo inhibidor selectivo de la recaptación de serotonina', 'Farmaceutica24', 50, 14.25, 'Sí'),
('Furosemida', 'Furosemida', 'Diurético utilizado para tratar la retención de líquidos y la hipertensión', 'Farmaceutica25', 45, 10.50, 'No'),
('Pregabalina', 'Pregabalina', 'Anticonvulsivo y analgésico utilizado para tratar la epilepsia y el dolor neuropático', 'Farmaceutica26', 35, 17.75, 'Sí'),
('Escitalopram', 'Escitalopram', 'Antidepresivo inhibidor selectivo de la recaptación de serotonina', 'Farmaceutica27', 80, 15.99, 'Sí'),
('Levotiroxina', 'Levotiroxina', 'Hormona tiroidea sintética para tratar el hipotiroidismo', 'Farmaceutica28', 90, 8.25, 'Sí'),
('Losartan', 'Losartan', 'Bloqueador de los receptores de angiotensina II para tratar la hipertensión', 'Farmaceutica29', 60, 12.50, 'No'),
('Ondansetron', 'Ondansetron', 'Antiemético utilizado para prevenir las náuseas y los vómitos', 'Farmaceutica30', 70, 11.75, 'No'),
('Metformina XR', 'Metformina XR', 'Medicamento de liberación prolongada para el control de la diabetes tipo 2', 'Farmaceutica31', 55, 16.50, 'Sí'),
('Clonazepam', 'Clonazepam', 'Benzodiacepina para el tratamiento de la ansiedad y los trastornos convulsivos', 'Farmaceutica32', 75, 14.75, 'Sí'),
('Atenolol', 'Atenolol', 'Bloqueador beta utilizado para tratar la hipertensión y enfermedades del corazón', 'Farmaceutica33', 80, 9.99, 'No'),
('Ranitidina', 'Ranitidina', 'Antagonista del receptor H2 utilizado para tratar la acidez estomacal y las úlceras', 'Farmaceutica34', 65, 8.25, 'No'),
('Codeína', 'Codeína', 'Analgésico opioide utilizado para tratar el dolor leve a moderado', 'Farmaceutica35', 70, 12.50, 'Sí'),
('Levetiracetam', 'Levetiracetam', 'Antiepiléptico utilizado para tratar la epilepsia', 'Farmaceutica36', 85, 10.75, 'Sí'),
('Metronidazol gel', 'Metronidazol gel', 'Gel tópico con propiedades antimicrobianas para tratar infecciones cutáneas', 'Farmaceutica37', 40, 9.99, 'Sí'),
('Candesartan', 'Candesartan', 'Bloqueador de los receptores de angiotensina II para tratar la hipertensión', 'Farmaceutica38', 55, 13.25, 'No'),
('Venlafaxina', 'Venlafaxina', 'Antidepresivo inhibidor de la recaptación de serotonina y noradrenalina', 'Farmaceutica39', 60, 16.50, 'Sí'),
('Alprazolam', 'Alprazolam', 'Benzodiacepina para el tratamiento de la ansiedad y los trastornos de pánico', 'Farmaceutica40', 45, 11.75, 'Sí'),
('Vitamina C', 'Ácido ascórbico', 'Vitamina antioxidante para fortalecer el sistema inmunológico', 'Farmaceutica41', 100, 7.99, 'No'),
('Vitamina D', 'Colecalciferol', 'Vitamina para fortalecer los huesos y mejorar la absorción de calcio', 'Farmaceutica42', 90, 9.25, 'No'),
('Vitamina B12', 'Cianocobalamina', 'Vitamina esencial para el funcionamiento adecuado del sistema nervioso y la formación de glóbulos rojos', 'Farmaceutica43', 80, 8.99, 'No'),
('Hierro', 'Sulfato ferroso', 'Suplemento mineral para tratar la deficiencia de hierro y prevenir la anemia', 'Farmaceutica44', 70, 10.25, 'No'),
('Calcio', 'Carbonato de calcio', 'Suplemento mineral para fortalecer los huesos y los dientes', 'Farmaceutica45', 60, 9.50, 'No'),
('Ácido fólico', 'Ácido fólico', 'Vitamina B para prevenir defectos del tubo neural en el feto y tratar la deficiencia de folato', 'Farmaceutica46', 55, 7.75, 'No'),
('Melatonina', 'Melatonina', 'Hormona natural que regula el sueño y ayuda a aliviar el jet lag', 'Farmaceutica47', 50, 11.99, 'No'),
('Probióticos', 'Varios', 'Suplementos con bacterias beneficiosas para mejorar la salud intestinal', 'Farmaceutica48', 65, 12.25, 'No'),
('Ginkgo biloba', 'Ginkgo biloba', 'Suplemento herbáceo utilizado para mejorar la memoria y la circulación', 'Farmaceutica49', 40, 9.50, 'No'),
('Aceite de pescado', 'Ácidos grasos omega-3', 'Suplemento con ácidos grasos esenciales para mantener la salud cardiovascular', 'Farmaceutica50', 75, 13.75, 'No'),
('Glucosamina', 'Glucosamina', 'Suplemento para aliviar el dolor en las articulaciones y mejorar la flexibilidad', 'Farmaceutica51', 80, 14.99, 'No'),
('Luteína', 'Luteína', 'Antioxidante para mantener la salud ocular y prevenir enfermedades oculares', 'Farmaceutica52', 85, 8.75, 'No'),
('Coenzima Q10', 'Coenzima Q10', 'Antioxidante para apoyar la salud cardiovascular y combatir el envejecimiento', 'Farmaceutica53', 90, 16.50, 'No'),
('Multivitamínico', 'Varios', 'Suplemento con una combinación de vitaminas y minerales para promover la salud general', 'Farmaceutica54', 100, 11.75, 'No'),
('L-carnitina', 'L-carnitina', 'Suplemento para aumentar la energía y promover la quema de grasa', 'Farmaceutica55', 65, 9.99, 'No'),
('Colágeno', 'Colágeno', 'Suplemento para mantener la salud de la piel, las articulaciones y los huesos', 'Farmaceutica56', 70, 12.25, 'No'),
('Aceite de coco', 'Aceite de coco', 'Aceite natural utilizado para el cuidado del cabello y la piel', 'Farmaceutica57', 55, 7.50, 'No'),
('Aceite de oliva', 'Aceite de oliva', 'Aceite vegetal rico en grasas saludables para cocinar y aderezar alimentos', 'Farmaceutica58', 60, 9.75, 'No'),
('Té verde', 'Té verde', 'Infusión con propiedades antioxidantes y beneficios para la salud', 'Farmaceutica59', 80, 6.99, 'No'),
('Aceite de lavanda', 'Aceite de lavanda', 'Aceite aromático utilizado para promover la relajación y aliviar el estrés', 'Farmaceutica60', 45, 11.50, 'No');

SELECT * FROM db_medicamento;

-- Tabla db_receta
INSERT INTO db_receta (fecha_expedicion, observaciones, diagnostico, costo_total, doctor_id_doctor)
VALUES
('2023-06-14 10:00:00', 'Observacion1', 'Diagnostico1', 100.50, '1'),
('2023-06-14 11:30:00', 'Observacion2', 'Diagnostico2', 75.20, '2'),
('2023-06-14 14:45:00', 'Observacion3', 'Diagnostico3', 120.75, '3'),
('2023-06-14 16:20:00', 'Observacion4', 'Diagnostico4', 90.80, '4'),
('2023-06-14 18:10:00', 'Observacion5', 'Diagnostico5', 200.00, '5'),
('2023-06-14 09:30:00', 'Observacion6', 'Diagnostico6', 80.50, '6'),
('2023-06-14 11:15:00', 'Observacion7', 'Diagnostico7', 95.20, '7'),
('2023-06-14 13:45:00', 'Observacion8', 'Diagnostico8', 110.75, '8'),
('2023-06-15 15:30:00', 'Observacion9', 'Diagnostico9', 65.80, '9'),
('2023-06-15 17:20:00', 'Observacion10', 'Diagnostico10', 150.00, '10'),
('2023-06-16 09:45:00', 'Observacion11', 'Diagnostico11', 105.50, '11'),
('2023-06-16 12:00:00', 'Observacion12', 'Diagnostico12', 85.20, '12'),
('2023-06-16 14:30:00', 'Observacion13', 'Diagnostico13', 130.75, '13'),
('2023-06-16 16:45:00', 'Observacion14', 'Diagnostico14', 70.80, '14'),
('2023-06-16 18:20:00', 'Observacion15', 'Diagnostico15', 180.00, '15'),
('2023-06-17 09:15:00', 'Observacion16', 'Diagnostico16', 95.50, '16'),
('2023-06-17 11:45:00', 'Observacion17', 'Diagnostico17', 75.20, '17'),
('2023-06-17 14:00:00', 'Observacion18', 'Diagnostico18', 120.75, '18'),
('2023-06-17 16:30:00', 'Observacion19', 'Diagnostico19', 85.80, '19'),
('2023-06-17 18:45:00', 'Observacion20', 'Diagnostico20', 190.00, '20'),
('2023-06-18 10:30:00', 'Observacion21', 'Diagnostico21', 90.50, '21'),
('2023-06-18 13:15:00', 'Observacion22', 'Diagnostico22', 105.20, '22'),
('2023-06-18 15:45:00', 'Observacion23', 'Diagnostico23', 140.75, '23'),
('2023-06-18 17:10:00', 'Observacion24', 'Diagnostico24', 75.80, '24'),
('2023-06-18 19:00:00', 'Observacion25', 'Diagnostico25', 220.00, '25'),
('2023-06-18 10:00:00', 'Observacion26', 'Diagnostico26', 100.50, '26'),
('2023-06-18 11:30:00', 'Observacion27', 'Diagnostico27', 75.20, '27'),
('2023-06-18 14:45:00', 'Observacion28', 'Diagnostico28', 120.75, '28'),
('2023-06-18 16:20:00', 'Observacion29', 'Diagnostico29', 90.80, '29'),
('2023-06-18 18:10:00', 'Observacion30', 'Diagnostico30', 200.00, '30'),
('2023-06-18 09:30:00', 'Observacion31', 'Diagnostico31', 80.50, '31'),
('2023-06-18 11:15:00', 'Observacion32', 'Diagnostico32', 95.20, '32'),
('2023-06-18 13:45:00', 'Observacion33', 'Diagnostico33', 110.75, '33'),
('2023-06-20 15:30:00', 'Observacion34', 'Diagnostico34', 65.80, '34'),
('2023-06-20 17:20:00', 'Observacion35', 'Diagnostico35', 150.00, '35'),
('2023-06-21 09:45:00', 'Observacion36', 'Diagnostico36', 105.50, '36'),
('2023-06-21 12:00:00', 'Observacion37', 'Diagnostico37', 85.20, '37'),
('2023-06-21 14:30:00', 'Observacion38', 'Diagnostico38', 130.75, '38'),
('2023-06-21 16:45:00', 'Observacion39', 'Diagnostico39', 70.80, '39'),
('2023-06-21 18:20:00', 'Observacion40', 'Diagnostico40', 180.00, '40'),
('2023-06-22 09:15:00', 'Observacion41', 'Diagnostico41', 95.50, '41'),
('2023-06-22 11:45:00', 'Observacion42', 'Diagnostico42', 75.20, '42'),
('2023-06-22 14:00:00', 'Observacion43', 'Diagnostico43', 120.75, '43'),
('2023-06-22 16:30:00', 'Observacion44', 'Diagnostico44', 85.80, '44'),
('2023-06-22 18:45:00', 'Observacion45', 'Diagnostico45', 190.00, '45'),
('2023-06-23 10:30:00', 'Observacion46', 'Diagnostico46', 90.50, '46'),
('2023-06-23 13:15:00', 'Observacion47', 'Diagnostico47', 105.20, '47'),
('2023-06-23 15:45:00', 'Observacion48', 'Diagnostico48', 140.75, '48'),
('2023-06-23 17:10:00', 'Observacion49', 'Diagnostico49', 75.80, '49'),
('2023-06-23 19:00:00', 'Observacion50', 'Diagnostico50', 220.00, '50');

SELECT * FROM db_receta;

-- Tabla db_receta_medicamento
INSERT INTO db_receta_medicamento (receta_id_receta, medicamento_id_medicamento)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(4, 8),
(4, 9),
(5, 10),
(6, 11),
(6, 12),
(7, 13),
(7, 14),
(8, 15),
(9, 16),
(9, 17),
(10, 18),
(10, 19),
(11, 20),
(12, 21),
(12, 22),
(13, 23),
(13, 24),
(14, 25),
(15, 26),
(15, 27),
(16, 28),
(16, 29),
(17, 30),
(18, 31),
(18, 32),
(19, 33),
(19, 34),
(20, 35),
(21, 36),
(21, 37),
(22, 38),
(22, 39),
(23, 40),
(24, 41),
(24, 42),
(25, 43),
(25, 44),
(26, 45),
(27, 46),
(27, 47),
(28, 48),
(28, 49),
(29, 50),
(30, 1),
(30, 10),
(31, 5),
(31, 15),
(32, 20),
(32, 25),
(33, 30),
(33, 35),
(34, 40),
(34, 45),
(35, 2),
(35, 12),
(36, 17),
(36, 22),
(37, 27),
(37, 32),
(38, 37),
(38, 42),
(39, 47),
(39, 50),
(40, 3),
(40, 8),
(41, 13),
(41, 18),
(42, 23),
(42, 28),
(43, 33),
(43, 38),
(44, 43),
(44, 48),
(45, 4),
(45, 9),
(46, 14),
(46, 19),
(47, 24),
(47, 29),
(48, 34),
(48, 39),
(49, 44),
(49, 49),
(50, 6),
(50, 11);

SELECT * FROM db_receta_medicamento;

-- Tabla db_proveedor
INSERT INTO db_proveedor (nombre, telefono, correo)
VALUES
('Proveedor 1', 123456789, 'prov1@example.com'),
('Proveedor 2', 987654321, 'prov2@example.com'),
('Proveedor 3', 555555555, 'prov3@example.com'),
('Proveedor 4', 111111111, 'prov4@example.com'),
('Proveedor 5', 999999999, 'prov5@example.com');

SELECT * FROM db_proveedor;

-- Tabla db_pedido
INSERT INTO db_pedido (id_pedido, medicamento_id_medicamento, proveedor_id_proveedor)
VALUES
('PED1', '1', 1),
('PED2', '2', 2),
('PED3', '3', 3),
('PED4', '4', 4),
('PED5', '5', 5),
('PED6', '1', 2),
('PED7', '2', 3),
('PED8', '3', 4),
('PED9', '4', 'PROV5'),
('PED10', '5', 'PROV1');

SELECT * FROM db_pedido;

-- Tabla db_dias_surtido
INSERT INTO db_dias_surtido (id_surtido, dia, hora, proveedor_id_proveedor)
VALUES
('SUR1', 'L', '08:00:00', 'PROV1'),
('SUR2', 'M', '09:30:00', 'PROV2'),
('SUR3', 'X', '10:45:00', 'PROV3'),
('SUR4', 'J', '12:15:00', 'PROV4'),
('SUR5', 'V', '14:30:00', 'PROV5');

SELECT * FROM db_dias_surtido;

-- ### Funciones Disponibles ##

-- Calcula el precio total de la receta
SELECT CalcularPrecioTotal('1') AS precio_total;

-- Calcula la edad
SELECT CalcularEdad('1979-09-10') AS edad_persona;

-- ### Script Stored Procedures ###
-- Busca los doctores disponibles por dia y horario
CALL DoctoresDisponiblesPorHorario('L', '10:00:00');

-- Procedure para obtener medicamento e id de pedido que trajo un proveedor
CALL ObtenerMedicamentosPorProveedor('Proveedor 1');

-- Procedure para verificar que no exista el paciente antes de crearlo
CALL sp_InsertarPaciente('CURP1', 'Paciente1', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 7);
CALL sp_InsertarPaciente('CURPX', 'Paciente8', 'Apellido1', 'Apellido2', 25, 'O+', 'Calle1', 123, NULL, 'Colonia1', 'Delegacion1', 'Entidad1', '1998-01-01', 70.5, 170.2, 'M', 'Aseguradora1', 9);

-- Procedure qué tipo de usuario es
CALL VerificarTipoUsuario('6');