from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pages.models import People, Member, Post
from pages.serializers import PeopleSerializer, MemberSerializer, PostSerializer


@api_view(['GET'])
def get_people(request):
    people = People.objects.filter(is_active=True)
    serializer = PeopleSerializer(people, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_members(request):
    members = Member.objects.filter(is_active=True)
    serializer = MemberSerializer(members, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.filter(show=True)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)