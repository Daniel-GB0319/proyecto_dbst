from rest_framework import serializers
from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'


class AdministradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrador
        fields = '__all__'


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'


class AlergiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alergia
        fields = '__all__'


class ConsultorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultorio
        fields = '__all__'


class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = '__all__'


class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Horario
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


class ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consulta
        fields = '__all__'


class RecepcionistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recepcionista
        fields = '__all__'


class MedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicamento
        fields = '__all__'


class RecetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receta
        fields = '__all__'


class RecetaMedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecetaMedicamento
        fields = '__all__'


class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'


class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = '__all__'


class DiasSurtidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiasSurtido
        fields = '__all__'


class RegistroUsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroUsuarios
        fields = '__all__'


class HistorialMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialMedico
        fields = '__all__'


class HistorialConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialConsulta
        fields = '__all__'


class HistorialRecetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistorialReceta
        fields = '__all__'


""" from rest_framework import serializers


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class AdministradorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class AlergiaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class ConsultorioSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class HorarioSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class RecepcionistaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class MedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class RecetaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class RecetaMedicamentoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class DiasSurtidoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class RegistroUsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class HistorialMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class HistorialConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'


class HistorialRecetaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
 """