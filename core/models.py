from django.db import models

# Create your models here.

#
class Usuario(models.Model):
    idUsuario = models.IntegerField(primary_key=True, verbose_name='Id de Usuario')
    nombreUsuario = models.CharField(max_length=15, verbose_name='Nombre de Usuario')
    apellidoUsuario = models.CharField(max_length=15, verbose_name='Apellido de Usuario')
    emailUsuario = models.EmailField(verbose_name='Email de Usuario')
    contrasenaUsuario = models.CharField(max_length=20, verbose_name='Contraseña de Usuario')

    def __str__(self):
        return f"Bienvenido {self.nombreUsuario} {self.apellidoUsuario}"

#Para Bici

class Marca(models.Model):
    idMarca = models.IntegerField(default=0, primary_key=True, verbose_name='Id de Marca')
    nombre = models.CharField(max_length=100, verbose_name='Nombre de la Marca')

    def __str__(self):
        return self.nombre

class Modelo(models.Model):
    idModelo = models.IntegerField(default=0, primary_key=True, verbose_name='Id de Modelo')
    nombre = models.CharField(max_length=100, verbose_name='Nombre del Modelo')
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Bicicleta(models.Model):
    idBici = models.IntegerField(default=0, primary_key=True, verbose_name='Id de Bicicleta')
    precio = models.DecimalField(default=0, max_digits=6, decimal_places=2, verbose_name='Precio de Bicicleta')
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    modelo = models.ForeignKey(Modelo, on_delete=models.CASCADE)
    color = models.CharField(max_length=50, verbose_name='Color de la Bicicleta')

    def __str__(self):
        return f"{self.modelo} {self.marca} ({self.color})"



class Repuestos(models.Model):
    idRepuestos = models.IntegerField(default=0, primary_key=True, verbose_name='Id de Repuestos')
    nombre = models.CharField(max_length=100, verbose_name='Nombre del Repuesto')
    precio = models.DecimalField(max_digits=6, decimal_places=2, verbose_name='Precio del Repuesto')
    bicicleta = models.ForeignKey(Bicicleta, on_delete=models.CASCADE, verbose_name='Clase Bicicleta')

    def __str__(self):
        return f"{self.nombre} ({self.bicicleta})"
