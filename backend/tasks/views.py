from rest_framework import viewsets
from .serializers import *
from .models import *

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class AdministradorView(viewsets.ModelViewSet):
    serializer_class = AdministradorSerializer
    queryset = Administrador.objects.all()

class PacienteView(viewsets.ModelViewSet):
    serializer_class = PacienteSerializer
    queryset = Paciente.objects.all()

class AlergiaView(viewsets.ModelViewSet):
    serializer_class = AlergiaSerializer
    queryset = Alergia.objects.all()

class ConsultorioView(viewsets.ModelViewSet):
    serializer_class = ConsultorioSerializer
    queryset = Consultorio.objects.all()

class EspecialidadView(viewsets.ModelViewSet):
    serializer_class = EspecialidadSerializer
    queryset = Especialidad.objects.all()

class HorarioView(viewsets.ModelViewSet):
    serializer_class = HorarioSerializer
    queryset = Horario.objects.all()

class DoctorView(viewsets.ModelViewSet):
    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()

class ConsultaView(viewsets.ModelViewSet):
    serializer_class = ConsultaSerializer
    queryset = Consulta.objects.all()

class RecepcionistaView(viewsets.ModelViewSet):
    serializer_class = RecepcionistaSerializer
    queryset = Recepcionista.objects.all()

class MedicamentoView(viewsets.ModelViewSet):
    serializer_class = MedicamentoSerializer
    queryset = Medicamento.objects.all()

class RecetaView(viewsets.ModelViewSet):
    serializer_class = RecetaSerializer
    queryset = Receta.objects.all()

class RecetaMedicamentoView(viewsets.ModelViewSet):
    serializer_class = RecetaMedicamentoSerializer
    queryset = RecetaMedicamento.objects.all()

class ProveedorView(viewsets.ModelViewSet):
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()

class PedidoView(viewsets.ModelViewSet):
    serializer_class = PedidoSerializer
    queryset = Pedido.objects.all()

class DiasSurtidoView(viewsets.ModelViewSet):
    serializer_class = DiasSurtidoSerializer
    queryset = DiasSurtido.objects.all()

class RegistroUsuariosView(viewsets.ModelViewSet):
    serializer_class = RegistroUsuariosSerializer
    queryset = RegistroUsuarios.objects.all()

class HistorialMedicoView(viewsets.ModelViewSet):
    serializer_class = HistorialMedicoSerializer
    queryset = HistorialMedico.objects.all()

class HistorialConsultaView(viewsets.ModelViewSet):
    serializer_class = HistorialConsultaSerializer
    queryset = HistorialConsulta.objects.all()

class HistorialRecetaView(viewsets.ModelViewSet):
    serializer_class = HistorialRecetaSerializer
    queryset = HistorialReceta.objects.all()


""" from rest_framework import viewsets
from .serializer import *
from .models import *


# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    usuario_class = UsuarioSerializer
    queryset = Usuario.objects.all()


class AdministradorView(viewsets.ModelViewSet):
    administrador_class = AdministradorSerializer
    queryset = Administrador.objects.all()


class PacienteView(viewsets.ModelViewSet):
    paciente_class = PacienteSerializer
    queryset = Paciente.objects.all()


class AlergiaView(viewsets.ModelViewSet):
    alergia_class = AlergiaSerializer
    queryset = Alergia.objects.all()


class ConsultorioView(viewsets.ModelViewSet):
    consultorio_class = ConsultorioSerializer
    queryset = Consultorio.objects.all()


class EspecialidadView(viewsets.ModelViewSet):
    especialidad_class = EspecialidadSerializer
    queryset = Especialidad.objects.all()


class HorarioView(viewsets.ModelViewSet):
    horario_class = HorarioSerializer
    queryset = Horario.objects.all()


class DoctorView(viewsets.ModelViewSet):
    doctor_class = DoctorSerializer
    queryset = Doctor.objects.all()


class ConsultaView(viewsets.ModelViewSet):
    consulta_class = ConsultaSerializer
    queryset = Consulta.objects.all()


class RecepcionistaView(viewsets.ModelViewSet):
    recepcionista_class = RecepcionistaSerializer
    queryset = Recepcionista.objects.all()


class MedicamentoView(viewsets.ModelViewSet):
    medicamento_class = MedicamentoSerializer
    queryset = Medicamento.objects.all()


class RecetaView(viewsets.ModelViewSet):
    receta_class = RecetaSerializer
    queryset = Receta.objects.all()


class RecetaMedicamentoView(viewsets.ModelViewSet):
    receta_medicamento_class = RecetaMedicamentoSerializer
    queryset = RecetaMedicamento.objects.all()


class ProveedorView(viewsets.ModelViewSet):
    proveedor_class = ProveedorSerializer
    queryset = Proveedor.objects.all()


class PedidoView(viewsets.ModelViewSet):
    pedido_class = PedidoSerializer
    queryset = Pedido.objects.all()


class DiasSurtidoView(viewsets.ModelViewSet):
    dias_surtido_class = DiasSurtidoSerializer
    queryset = DiasSurtido.objects.all()


class RegistroUsuariosView(viewsets.ModelViewSet):
    registro_usuario_class = RegistroUsuariosSerializer
    queryset = RegistroUsuarios.objects.all()


class HistorialMedicoView(viewsets.ModelViewSet):
    historial_medico_class = HistorialMedicoSerializer
    queryset = HistorialMedico.objects.all()


class HistorialConsultaView(viewsets.ModelViewSet):
    historial_consulta_class = HistorialConsultaSerializer
    queryset = HistorialConsulta.objects.all()


class HistorialRecetaView(viewsets.ModelViewSet):
    historial_receta_class = HistorialRecetaSerializer
    queryset = HistorialReceta.objects.all() """
