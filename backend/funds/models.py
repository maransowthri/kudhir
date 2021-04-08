from django.db import models
from projects.models import Project
from django.conf import settings
import os
import uuid


def get_delivered_funds_bill_filepath(instance, filename):
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return os.path.join(f'projects/delivered_funds/bills/', filename)


class TargetedFund(models.Model):
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_delivered = models.BooleanField(default=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='targeted_funds')
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.project.mnemonic + ": " + self.description


class ReceivedFund(models.Model):
    transaction_id = models.CharField(max_length=50, unique=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='received_funds_users')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='received_funds')
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.project.mnemonic + ": " + self.transaction_id


class DeliveredFund(models.Model):
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    bill = models.ImageField(upload_to=get_delivered_funds_bill_filepath)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='delivered_funds')
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.project.mnemonic + ": " + self.description


