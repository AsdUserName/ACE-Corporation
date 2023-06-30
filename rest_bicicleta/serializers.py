from rest_framework import serializers
from core.models import Bicicleta

class BicicletaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bicicleta
        field = ['precio','marca','modelo','color']