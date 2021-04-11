from rest_framework import serializers
from accounts.models import UserProfile


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'name', 'bio', 'portfolio')
