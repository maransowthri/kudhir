# Generated by Django 3.1.7 on 2021-04-10 10:41

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='bio',
            field=models.URLField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
    ]
