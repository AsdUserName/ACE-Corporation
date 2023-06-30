from django.urls import path
from .views import login_view, index, register, catalog, contact

urlpatterns = [
    path('', index, name='index'),
    path('login/', login_view, name='login'),
    path('register/', register, name='register'),
    path('catalog/', catalog, name='catalog'),
    path('contact/', contact, name='contact'),
]
