from django.shortcuts import render
from django.db.models import Sum
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from projects.models import Project
from projects.serializers import ProjectListSerializer, ProjectDetailSerializer


@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.filter(is_published=True).annotate(
                    received_amount=Sum('received_funds__amount'),
                )
    serializer = ProjectListSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request, slug):
    projects = Project.objects.filter(slug=slug).annotate(
                    received_amount=Sum('received_funds__amount'),
                    delivered_amount=Sum('delivered_funds__amount'),
                    targeted_amount=Sum('targeted_funds__amount')
                )
    serializer = ProjectDetailSerializer(projects, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# def getProject(request, slug):
#     project = list(filter(lambda project: project['slug'] == slug, SAMPLE_PROJECTS))[0]
#     return Response({ 'project': project }, status=status.HTTP_200_OK)
