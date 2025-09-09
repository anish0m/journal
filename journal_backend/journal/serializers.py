from rest_framework import serializers
from .models import JournalEntry


class JournalEntrySerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.id', read_only=True)

    class Meta:
        model = JournalEntry
        fields = [
            'id',
            'title',
            'content',
            'author',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'author', 'created_at', 'updated_at']

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return super().create(validated_data)
