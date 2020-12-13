from django.shortcuts import render
from rest_framework.decorators import  api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
@api_view(['GET'])
def apiOverview(request):
    return Response("Api Base Point", safe=False)

@api_view(['GET'])
def exerciseView(request):
    exercises = Exercise.objects.all()
    serializer = ExerciseSerializer(exercises,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def exerciseCreate(request):
    serializer = ExerciseSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)