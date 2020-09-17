from django.shortcuts import render
from products.models import Product

def productView(request, product_id):
    product = Product.objects.filter(product_id=product_id)
    return render(request, 'productView/productView.html' ,{'product':product[0]})

def checkout(request, product_id):
    return render(request, 'products/checkout.html')
