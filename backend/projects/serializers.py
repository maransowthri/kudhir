from rest_framework.serializers import ModelSerializer
from projects.models import Project


class ProjectListSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('title', 'city', 'state', 'zipcode', 'created_on')