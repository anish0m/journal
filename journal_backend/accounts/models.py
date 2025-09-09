from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.png')
    
    # Optional fields from frontend Profile page
    title = models.CharField(max_length=100, blank=True, default="")  # Job title
    mobile = models.CharField(max_length=20, blank=True, default="")  # Phone number  
    address = models.TextField(max_length=200, blank=True, default="")  # Address
    
    # Social media links (initialize with empty dict)
    social_links = models.JSONField(default=dict, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username}'s profile"
    
    def save(self, *args, **kwargs):
        # Initialize social_links with empty strings if not set
        if not self.social_links:
            self.social_links = {
                "linkedin": "",
                "github": "",
                "twitter": "",
                "instagram": "",
                "facebook": ""
            }
        super().save(*args, **kwargs)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()