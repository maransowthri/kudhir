from rest_framework import serializers
from accounts.serializers import AccountSerializer
from funds.models import DeliveredFund, ReceivedFund, TargetedFund


class DeliveredFundSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveredFund
        fields = ('id', 'description', 'amount', 'bill')


class ReceivedFundSerializer(serializers.ModelSerializer):
    user = AccountSerializer(many=False, read_only=True)
    class Meta:
        model = ReceivedFund
        fields = ('id', 'transaction_id', 'user', 'amount')


class TargetedFundSerializer(serializers.ModelSerializer):
    class Meta:
        model = TargetedFund
        fields = ('id', 'description', 'amount', 'is_delivered')