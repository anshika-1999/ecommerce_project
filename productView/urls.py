
from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.productView,  name='productView'),
    path('checkout/', views.checkout, name='checkout'),
]
