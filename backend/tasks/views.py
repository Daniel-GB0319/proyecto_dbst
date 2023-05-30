from rest_framework import viewsets
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


class Receta_MedicamentoView(viewsets.ModelViewSet):
    receta_medicamento_class = Receta_MedicamentoSerializer
    queryset = Receta_Medicamento.objects.all()


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
    queryset = HistorialReceta.objects.all()
