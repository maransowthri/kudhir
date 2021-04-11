from django.urls import path
from funds.views import get_delivered_funds, get_received_funds, get_targeted_funds


urlpatterns = [
    path('<str:slug>/delivered', get_delivered_funds, name='delivered_funds'),
    path('<str:slug>/received', get_received_funds, name='received_funds'),
    path('<str:slug>/targeted', get_targeted_funds, name='targeted_funds'),
]