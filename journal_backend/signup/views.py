from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PendingUser
from .serializers import SignupSerializer
import random
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User


class SignupView(APIView):
    def post(self, request):
        data = request.data.copy()
        data['otp'] = str(random.randint(100000, 999999))
        serializer = SignupSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            # Send OTP Email
            send_mail(
                'Your OTP for Journal Signup',
                f"Your OTP is: {data['otp']}",
                settings.DEFAULT_FROM_EMAIL,
                [data['email']],
                fail_silently=False,
            )
            return Response({'message': 'OTP sent to email'}, status=201)
        return Response(serializer.errors, status=400)

class VerifyOTPView(APIView):
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')

        try:
            pending = PendingUser.objects.get(email=email)
            if pending.otp == otp:
                # Create real User
                user = User.objects.create_user(
                    username=pending.user_name,
                    email=pending.email,
                    password=pending.password,
                    first_name=pending.first_name,
                    last_name=pending.last_name
                )
                # Profile pic can be handled later
                pending.delete()
                return Response({'message': 'Account created'}, status=201)
            else:
                return Response({'error': 'Invalid OTP'}, status=400)
        except PendingUser.DoesNotExist:
            return Response({'error': 'Email not found'}, status=404)
