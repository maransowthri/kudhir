from django.db import models
from django.utils.text import slugify
from django.conf import settings
import os
import uuid


def get_upi_qr_filepath(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return os.path.join(f'projects/upi_qr/', filename)


def get_project_image_filepath(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return os.path.join(f'projects/images/', filename)


class Project(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    mnemonic = models.CharField(max_length=5, unique=True)
    description = models.TextField()
    bank_account_name = models.CharField(max_length=255)
    bank_account_number = models.CharField(max_length=50)
    ifsc_code = models.CharField(max_length=50)
    upi_id = models.CharField(max_length=50)
    upi_qr = models.ImageField(upload_to=get_upi_qr_filepath)
    bitcoin_wallet_address = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)
    is_published = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    image = models.ImageField(upload_to=get_project_image_filepath)
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return self.project.title


class ProjectSocial(models.Model):
    link = models.URLField(max_length=250)
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='socials')

    def __str__(self):
        return self.project.mnemonic + ': ' + self.link


class ProjectMember(models.Model):
    project = models.ForeignKey('Project', models.CASCADE, related_name='members')
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='member')

    class Meta:
        unique_together = ('project', 'user')

    def __str__(self):
        return self.project.mnemonic + ': ' + self.user.name



