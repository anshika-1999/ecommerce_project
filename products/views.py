from django.shortcuts import render
from django.http import HttpResponse
from .models import Product

def productsHome(request):
    allProds = []
    catprods = Product.objects.values('category', 'product_id')
    cats = {item['category'] for item in catprods}
    for cat in cats:
        prod = Product.objects.filter(category=cat)
        allProds.append(prod)
    params = {'allProds':allProds}
    return render(request, 'products/productHome.html',params)


def home(request):
    products = Product.objects.all()
    params={'product':products}
    return render(request, 'products/home.html',params)

def checkout(request):
    return render(request, 'products/checkout.html')
