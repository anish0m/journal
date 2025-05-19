from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PendingUser
from .serializers import SignupSerializer
import random
from django.core.mail import send_mail
from django.conf import settings


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
