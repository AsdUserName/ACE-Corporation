from django.urls import path
from rest_bicicleta import views
from rest_bicicleta.viewslogin import login

urlpatterns = [
    path('lista_bicicletas', views.lista_bicicletas, name="lista_bicicletas"),
    path('detalle_bicicleta/<id>', views.detalle_bicicleta, name='detalle_bicicleta'),
    path('path', login, name= "login")
]