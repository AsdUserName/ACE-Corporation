from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'core/index.html')

def login_view(request):
    return render(request, 'core/login.html')

def register(request):
    return render(request, 'core/register.html')

def catalog(request):
    return render(request, 'core/catalog.html')

def contact(request):
    return render(request, 'core/contact.html')


from django. shortcuts import render
from .models import Bicicleta
# Create your views here.

def home (request):
    #accedendo al objeto que contiene los datos de la base
    # el metodo all traera todas los vehículos que estan en la tabla
    bicicletas = Bicicleta.objects.all()
    # ahora crearemos una variable que le pase los datos del vehículo al template
    datos = {
         'bicicletas': bicicletas
    }
    # ahora lo agregamos para que se envie a Template
    return render(request, 'core/catalog.html', datos)
