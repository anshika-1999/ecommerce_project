from django.db import models

class Product(models.Model):
    product_id = models.AutoField(primary_key = True)
    category = models.CharField(max_length = 50,default='')
    price = models.IntegerField(default=0)
    product_name = models.CharField(max_length=100)
    desc = models.CharField(max_length=1000)
    prod_img = models.ImageField(upload_to='products/images' ,default='')

    def __str__(self):
        return self.product_name
