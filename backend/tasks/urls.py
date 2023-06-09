from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.UsuarioView, 'tasks')

urlpatterns = [
    path('proyecto-tt/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Proyecto TT API'))
]


""" from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views, 'tasks')

urlpatterns = [
    path('proyecto-tt/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Proyecto TT API'))
] """
