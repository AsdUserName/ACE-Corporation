# Generated by Django 4.1.5 on 2023-06-15 01:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bicicleta',
            fields=[
                ('idBici', models.IntegerField(default=0, primary_key=True, serialize=False, verbose_name='Id de Bicicleta')),
                ('precio', models.DecimalField(decimal_places=2, default=0, max_digits=6, verbose_name='Precio de Bicicleta')),
                ('marca', models.CharField(max_length=100, verbose_name='Marca de la Bicicleta')),
                ('modelo', models.CharField(max_length=100, verbose_name='Modelo de la Bicicleta')),
                ('color', models.CharField(max_length=50, verbose_name='Color de la Bicicleta')),
            ],
        ),
        migrations.CreateModel(
            name='Repuestos',
            fields=[
                ('idRepuestos', models.IntegerField(default=0, primary_key=True, serialize=False, verbose_name='Id de Repuestos')),
                ('nombre', models.CharField(max_length=100, verbose_name='Nombre del Repuesto')),
                ('precio', models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Precio del Repuesto')),
                ('bicicleta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.bicicleta', verbose_name='Clase Bicicleta')),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('idUsuario', models.IntegerField(primary_key=True, serialize=False, verbose_name='Id de Usuario')),
                ('nombreUsuario', models.CharField(max_length=15, verbose_name='Nombre de Usuario')),
                ('apellidoUsuario', models.CharField(max_length=15, verbose_name='Apellido de Usuario')),
                ('emailUsuario', models.EmailField(max_length=254, verbose_name='Email de Usuario')),
                ('contrasenaUsuario', models.CharField(max_length=20, verbose_name='Contraseña de Usuario')),
            ],
        ),
        migrations.RemoveField(
            model_name='vehiculo',
            name='categoria',
        ),
        migrations.DeleteModel(
            name='Categoria',
        ),
        migrations.DeleteModel(
            name='Vehiculo',
        ),
    ]
