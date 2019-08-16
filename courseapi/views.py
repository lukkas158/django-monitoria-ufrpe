from django.shortcuts import render
from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer
# Create your views here.


class CourseList(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    def get_queryset(self):
        name = self.request.query_params.get('name', None )
        if( name is not None ):
            print(name)
            print(type(name))
            return Course.objects.filter(name__icontains=name)
        else:
            return Course.objects.all()


