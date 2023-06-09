from django.db import models


class Usuario(models.Model):
    id_usuario = models.CharField(max_length=10, primary_key=True)
    tipo_usuario = models.CharField(max_length=15)
    correo = models.CharField(max_length=20)
    password = models.CharField(max_length=64)
    ultimo_acceso = models.DateTimeField(null=True)


class Administrador(models.Model):
    id_administrador = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=15)
    ap_paterno = models.CharField(max_length=15)
    ap_materno = models.CharField(max_length=15)
    usuario_id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)


class Paciente(models.Model):
    id_paciente = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=15)
    ap_paterno = models.CharField(max_length=15)
    ap_materno = models.CharField(max_length=15)
    edad = models.IntegerField()
    tipo_sangre = models.CharField(max_length=3)
    num_ext = models.IntegerField(null=True)
    num_int = models.IntegerField(null=True)
    colonia = models.CharField(max_length=20)
    delegacion = models.CharField(max_length=20)
    entidad_federativa = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField()
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=4, decimal_places=2)
    sexo = models.CharField(max_length=1)
    aseguradora = models.CharField(max_length=15)
    usuario_id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)


class Alergia(models.Model):
    id_alergia = models.CharField(max_length=5, primary_key=True)
    nombre = models.CharField(max_length=15)
    descripcion = models.TextField(max_length=30)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)


class Consultorio(models.Model):
    id_consultorio = models.CharField(max_length=5, primary_key=True)
    numero = models.IntegerField()
    estado = models.CharField(max_length=15)
    descripcion = models.TextField(max_length=30)


class Especialidad(models.Model):
    id_especialidad = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=20)
    descripcion = models.TextField(max_length=30)

class Horario(models.Model):
    id_horario = models.CharField(max_length=10, primary_key=True)
    turno = models.CharField(max_length=10)
    dia_semana = models.CharField(max_length=10)
    hora_entrada = models.TimeField()
    hora_salida = models.TimeField()
    hora_ini_receso = models.TimeField()
    hora_fin_receso = models.TimeField()
""" class Horario(models.Model):
    id_horario = models.CharField(max_length=10, primary_key=True)
    turno = models.CharField(max_length=10)
    dia_semana = models.CharField(max_length=10)
    hora_entrada = models.TimeField()
    hora_salida = models.TimeField()
    hora_ini_receso = models.TimeField()
    hora__fin_receso = models.TimeField() """


class Doctor(models.Model):
    id_doctor = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=15)
    ap_paterno = models.CharField(max_length=15)
    ap_materno = models.CharField(max_length=15)
    edad = models.IntegerField()
    num_ext = models.IntegerField(null=True)
    num_int = models.IntegerField(null=True)
    colonia = models.CharField(max_length=20)
    delegacion = models.CharField(max_length=20)
    entidad_federativa = models.CharField(max_length=20)
    fecha_nacimiento = models.DateField()
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=4, decimal_places=2)
    sexo = models.CharField(max_length=1)
    aseguradora = models.CharField(max_length=15)
    usuario_id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    consultorio_id_consultorio = models.ForeignKey(Consultorio, on_delete=models.CASCADE)
    horario_id_horario = models.ForeignKey(Horario, on_delete=models.CASCADE)
    especialidad_id_especialidad = models.ForeignKey(Especialidad, on_delete=models.CASCADE)


class Consulta(models.Model):
    id_consulta = models.CharField(max_length=10, primary_key=True)
    hora = models.TimeField()
    fecha = models.DateField()
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)


class Recepcionista(models.Model):
    id_recepcionista = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=15)
    ap_paterno = models.CharField(max_length=15)
    ap_materno = models.CharField(max_length=15)
    usuario_id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    horario_id_horario = models.ForeignKey(Horario, on_delete=models.CASCADE)


class Medicamento(models.Model):
    id_medicamento = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=15)
    compuesto = models.CharField(max_length=15)
    descripcion = models.TextField(max_length=30)
    farmaceutica = models.CharField(max_length=20)
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    requiere_receta = models.CharField(max_length=2)


class Receta(models.Model):
    id_receta = models.CharField(max_length=10, primary_key=True)
    fecha_expedicion = models.DateField()
    observaciones = models.TextField(max_length=30)
    diagnostico = models.TextField(max_length=30)
    costo_total = models.DecimalField(max_digits=8, decimal_places=2)
    doctor_id_doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    medicamento_id_medicamento = models.ForeignKey(Medicamento, on_delete=models.CASCADE)


class RecetaMedicamento(models.Model):
    receta_id_receta = models.ForeignKey(Receta, on_delete=models.CASCADE)
    medicamento_id_medicamento = models.ForeignKey(Medicamento, on_delete=models.CASCADE)


class Proveedor(models.Model):
    id_proveedor = models.CharField(max_length=10, primary_key=True)
    nombre = models.CharField(max_length=15)
    telefono = models.CharField(max_length=10)
    correo = models.CharField(max_length=20)


class Pedido(models.Model):
    id_pedido = models.CharField(max_length=10, primary_key=True)
    medicamento_id_medicamento = models.ForeignKey(Medicamento, on_delete=models.CASCADE)
    proveedor_id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)


class DiasSurtido(models.Model):
    id_surtido = models.CharField(max_length=5, primary_key=True)
    dia = models.CharField(max_length=15)
    hora = models.TimeField(null=True)
    proveedor_id_proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)


class RegistroUsuarios(models.Model):
    id_registro = models.IntegerField(primary_key=True)
    usuario_id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_registro = models.DateField()
    hora_registro = models.TimeField()


""" class HistorialMedico(models.Model):
    id_historial = models.CharField(max_length=10, primary_key=True)
    paciente_id_paciente = models.ForeignKey(Paciente, primary_key=True, on_delete=models.CASCADE)
    fecha_registro = models.DateField()
    hora_registro = models.TimeField() """
class HistorialMedico(models.Model):
    id_historial = models.CharField(max_length=10, primary_key=True)
    paciente_id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    fecha_registro = models.DateField()
    hora_registro = models.TimeField()



class HistorialConsulta(models.Model):
    historial_id_historial = models.ForeignKey(HistorialMedico, on_delete=models.CASCADE)
    consulta_id_consulta = models.ForeignKey(Consulta, on_delete=models.CASCADE)


class HistorialReceta(models.Model):
    historial_id_historial = models.ForeignKey(HistorialMedico, on_delete=models.CASCADE)
    receta_id_receta = models.ForeignKey(Receta, on_delete=models.CASCADE)
