from django.contrib import admin
from funds.models import TargetedFund, ReceivedFund, DeliveredFund


admin.site.register(TargetedFund)
admin.site.register(ReceivedFund)
admin.site.register(DeliveredFund)