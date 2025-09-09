from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class JournalEntry(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='journal_entries')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']  # Latest entries first
        verbose_name_plural = "Journal Entries"

    def __str__(self):
        return f"{self.title} by {self.author.username}"
