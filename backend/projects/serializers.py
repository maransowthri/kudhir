from rest_framework import serializers
from accounts.serializers import AccountSerializer
from projects.models import Project
from projects.models import ProjectImage, ProjectSocial, ProjectMember
from accounts.models import UserProfile


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ('image',)


class ProjectSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectSocial
        fields = ('link',)


class ProjectMemberSerializer(serializers.ModelSerializer):
    user = AccountSerializer(many=False, read_only=True)
    class Meta:
        model = ProjectMember
        fields = ('user',)


class ProjectListSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)
    socials = ProjectSocialSerializer(many=True, read_only=True)
    received_amount = serializers.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    
    class Meta:
        model = Project
        fields = (
            'id', 'title', 'slug', 'city',
            'state', 'zipcode', 'created_on',
            'images', 'socials', 'received_amount'
        )


class ProjectDetailSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)
    socials = ProjectSocialSerializer(many=True, read_only=True)
    received_amount = serializers.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    delivered_amount = serializers.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    targeted_amount = serializers.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    members = ProjectMemberSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = (
            'id', 'title', 'slug', 'description',
            'bank_account_name', 'bank_account_number',
            'ifsc_code', 'upi_id', 'upi_qr', 'bitcoin_wallet_address',
            'city', 'state', 'zipcode', 'created_on',
            'images', 'socials', 'targeted_amount',
            'received_amount', 'delivered_amount', 'members'
        )
