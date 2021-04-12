from rest_framework import serializers
from pages.models import People, Member, Post, PostSocial


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ('id', 'name', 'designation', 'portfolio', 'image')


class PostSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostSocial
        fields = ('id', 'link')


class PostSerializer(serializers.ModelSerializer):
    socials = PostSocialSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'message', 'socials')


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id','name', 'website', 'logo')



