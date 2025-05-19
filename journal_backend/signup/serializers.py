from rest_framework import serializers
from .models import PendingUser
from django.contrib.auth.models import User
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = PendingUser
        fields = '__all__'

    def validate_email(self, value):
        try:
            validate_email(value)
        except ValidationError:
            raise serializers.ValidationError("Invalid email address")
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already in use")
        return value
