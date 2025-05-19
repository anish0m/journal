from django.urls import path
from .views import SignupView, VerifyOTPView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('signup/verify/', VerifyOTPView.as_view(), name='verify_otp'),
]
