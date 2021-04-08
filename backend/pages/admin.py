from django.contrib import admin
from pages.models import Member, People, Post, PostSocial


admin.site.register(Member)
admin.site.register(People)
admin.site.register(Post)
admin.site.register(PostSocial)