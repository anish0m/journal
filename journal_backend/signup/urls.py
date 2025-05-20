from django.urls import path
from .views import SignupView, VerifyOTPView

urlpatterns = [
    path('', SignupView.as_view(), name='signup'),
    path('verify/', VerifyOTPView.as_view(), name='verify_otp'),
]
