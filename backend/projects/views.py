from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from projects.projects import SAMPLE_PROJECTS


@api_view(['GET'])
def getProjects(request):
    projects = filter(lambda project: project['is_published'], SAMPLE_PROJECTS)
    return Response({ 'projects': projects }, status=status.HTTP_200_OK)

@api_view(['GET'])
def getProject(request, slug):
    project = list(filter(lambda project: project['slug'] == slug, SAMPLE_PROJECTS))[0]
    return Response({ 'project': project }, status=status.HTTP_200_OK)
