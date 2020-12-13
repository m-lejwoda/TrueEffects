from django.shortcuts import render
from rest_framework.decorators import  api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            data['response'] = "Poprawnie zarejestrowano użytkownika"
            data['email'] = User.email
            data['username'] = User.username()
            token = Token.objects.get(user=User).key
            data['token'] = token
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
