import uuid
import os
from django.db import models


def get_member_filepath(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return os.path.join(f'uploads/members/', filename)

def get_people_filepath(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return os.path.join(f'uploads/people/', filename)

class Member(models.Model):
    name = models.CharField(max_length=50)
    website = models.URLField(max_length=250, blank=True)
    logo = models.ImageField(upload_to=get_member_filepath)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class People(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=100)
    portfolio = models.URLField(max_length=250, blank=True)
    image = models.ImageField(upload_to=get_people_filepath)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name