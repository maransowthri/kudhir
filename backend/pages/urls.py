from django.urls import path
from pages.views import get_people, get_members, get_posts


urlpatterns = [
    path('people/', get_people, name='people'),
    path('members/', get_members, name='members'),
    path('posts/', get_posts, name='posts'),
]