from django.shortcuts import render
from django.db.models import Sum
from rest_framework.decorators import api_view
from projects.models import Project
from funds.models import DeliveredFund, ReceivedFund, TargetedFund
from funds.serializers import DeliveredFundSerializer, ReceivedFundSerializer, TargetedFundSerializer
from rest_framework.response import Response


@api_view(['GET'])
def get_delivered_funds(request, slug):
    project = Project.objects.get(slug=slug)
    delivered_funds = DeliveredFund.objects.filter(project=project)
    serializer = DeliveredFundSerializer(delivered_funds, many=True)
    total_amount = delivered_funds.aggregate(Sum('amount'))['amount__sum']
    return Response({'total_amount': total_amount, 'funds': serializer.data})

@api_view(['GET'])
def get_received_funds(request, slug):
    project = Project.objects.get(slug=slug)
    received_funds = ReceivedFund.objects.filter(project=project)
    serializer = ReceivedFundSerializer(received_funds, many=True)
    total_amount = received_funds.aggregate(Sum('amount'))['amount__sum']
    return Response({'total_amount': total_amount, 'funds': serializer.data})

@api_view(['GET'])
def get_targeted_funds(request, slug):
    project = Project.objects.get(slug=slug)
    targeted_funds = TargetedFund.objects.filter(project=project)
    serializer = TargetedFundSerializer(targeted_funds, many=True)
    total_amount = targeted_funds.aggregate(Sum('amount'))['amount__sum']
    return Response({ 'total_amount': total_amount, 'funds': serializer.data})


