from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from app_user.models import AppUser


class AppUserSerializers(serializers.ModelSerializer):

    class Meta:
        model = AppUser
        fields = '__all__'


class CustomRegisterSerializer(RegisterSerializer):

    username = None
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    phone_number = serializers.CharField()
    birth_date = serializers.DateField()
    province = serializers.CharField()
    city = serializers.CharField()
    tc = serializers.CharField()

    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()

        return {
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'tc': self.validated_data.get('tc', ''),
            'birth_date': self.validated_data.get('birth_date', ''),
            'province': self.validated_data.get('province', ''),
            'city': self.validated_data.get('city', ''),
            'phone_number': self.validated_data.get('phone_number', ''),
        }


class AppUserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AppUser
        fields = '__all__'
