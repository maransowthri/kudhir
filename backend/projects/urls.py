from django.urls import path
from projects.views import get_projects, get_project


app_name = 'projects'

urlpatterns = [
    path('', get_projects, name='projects'),
    path('<str:slug>', get_project, name='project'),
]