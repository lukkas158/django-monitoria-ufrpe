from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserRegisterSerializer
# Create your views here.

## Custom view used for registrations.
class RegisterView(APIView):
    def post(self,request):
        user = UserRegisterSerializer(data=request.data)
        if(user.is_valid()):
            user = UserSerializer(data=request.data)
            user.is_valid(raise_exception=True)
            user.save()
            return Response(user.data, status=status.HTTP_201_CREATED)
        else:
            return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)
            
