from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_image = models.ImageField(upload_to='avatars/', default='avatars/default.png')
    REQUIRED_FIELDS = ['email']

