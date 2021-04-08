from django.urls import path
from projects.views import getProjects
# , getProject


app_name = 'projects'

urlpatterns = [
    path('projects/', getProjects, name='projects'),
    # path('projects/<str:slug>', getProject, name='project'),
]