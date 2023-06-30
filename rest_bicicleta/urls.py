from django.urls import path
from rest_bicicleta.views import lista_bicicletas

urlpatterns = [
    path('lista_bicicletas', lista_bicicletas, name="lista_bicicletas"),

]