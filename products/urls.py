
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.productsHome,  name='productHome'),
    path('checkout/', views.checkout, name='checkout'),
    path('<int:product_id>/', include('productView.urls')),
]
