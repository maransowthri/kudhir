from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from projects.models import Project
from projects.serializers import ProjectListSerializer


@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.filter(is_published=True)
    serializer = ProjectListSerializer(projects, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# def getProject(request, slug):
#     project = list(filter(lambda project: project['slug'] == slug, SAMPLE_PROJECTS))[0]
#     return Response({ 'project': project }, status=status.HTTP_200_OK)
