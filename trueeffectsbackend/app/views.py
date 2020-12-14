from django.shortcuts import render
from rest_framework.decorators import  api_view
from rest_framework.response import Response
from .models import *
from django.contrib.auth import get_user_model
from .serializers import *
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework import permissions
from rest_framework.generics import CreateAPIView


class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer



@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "Poprawnie zarejestrowano użytkownika"
            #data['email']= 'email'
            data['email'] = user.email
            data['username'] = user.username
            token = Token.objects.get(user=user).key
            data['token'] = token
        else:
            data= serializer.errors
        return Response(data)
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
