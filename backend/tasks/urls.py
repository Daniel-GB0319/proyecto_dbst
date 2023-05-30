from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views, 'tasks')

urlpattern[
    path('proyecto-tt/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Proyecto TT API'))
]
