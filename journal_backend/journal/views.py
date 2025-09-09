from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import JournalEntry
from .serializers import JournalEntrySerializer

# Create your views here.


class JournalEntryListCreateView(generics.ListCreateAPIView):
    serializer_class = JournalEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return JournalEntry.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
