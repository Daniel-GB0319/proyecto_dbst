from rest_framework import serializers


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
