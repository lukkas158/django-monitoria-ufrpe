from rest_framework import serializers
from .models import User


### Custom User model used only for Registration validation. 
class UserRegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(max_length=100)

    class Meta:
        model = User
        fields = [
            'email', 
            'password',
            'password2',
            'course', 
            'first_name',
            'last_name',
            ]
    ## Not used
    def create(self, validated_data):
        del validated_data['password2']
        instance = User.objects.create(**validated_data)
        instance.set_password(validated_data['password'])
        return instance


    def validate(self, data):
        if(data['password'] != data['password2']):
            raise serializers.ValidationError("Passwords must match")
        return data


# User Serializer used for any others purposes.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email', 
            'password',
            'course', 
            'first_name',
            'last_name',
        ]

        extra_kwargs = {
            'password': {'write_only': True},
        }


    def create(self, validated_data):
        instance = User.objects.create(**validated_data)
        instance.set_password(validated_data['password'])
        instance.save()
        return instance
    