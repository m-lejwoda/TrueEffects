from django.shortcuts import render
from rest_framework.decorators import  api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
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
from rest_framework import viewsets


class Logout(APIView):
    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(data="Zostałeś wylogowany",status=status.HTTP_200_OK)

class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny
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
    return Response("Api Base Point")

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def exerciseView(request):
    exercises = Exercise.objects.all()
    serializer = ExerciseSerializer(exercises,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def exerciseCreate(request):
    serializer = ExerciseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['POST'])
#@permission_classes([IsAuthenticated,])
def createpersonalDimensions(request):
    request.data['user']= request.user.id
    serializer = PersonalDimensionsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def displaypersonalDimensions(request):
    user= request.user
    personalDimensions = PersonalDimensions.objects.filter(user=user)
    serializer = PersonalDimensionsSerializer(personalDimensions,many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def displayPersonalResults(request):
    user= request.user
    PersonalResults = PersonalResults.objects.filter(user=user)
    serializer = PersonalResultsSerializer(PersonalResults,many=True)
    return Response(serializer.data)

@api_view(['POST'])
# @permission_classes([IsAuthenticated,])
def createPersonalResults(request):
    user = request.user
    serializer = PersonalResultsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def displayPersonalGoals(request):
    user= request.user
    PersonalGoals = PersonalGoals.objects.filter(user=user)
    serializer = PersonalGoalsSerializer(PersonalGoals,many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated,])
def createPersonalGoals(request):
    user = request.user
    serializer = PersonalGoalsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
#@permission_classes([IsAuthenticated,])
def createOwnExercise(request):
    user = request.user
    serializer = OwnExerciseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['GET'])
#@permission_classes([IsAuthenticated,])
def displayTraining(request):
    example = Training.objects.all()
    serializer = TrainingSerializer(example,many=True)
    return Response(serializer.data)

@api_view(['POST'])
#@permission_classes([IsAuthenticated,])
def createTraining(request):
    serializer = TrainingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['POST'])
#@permission_classes([IsAuthenticated,])
def createTraining2(request):
    serializer = TrainingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def displayOwnExercise(request):
    user= request.user
    OwnExercise = OwnExercise.objects.filter(user=user)
    serializer = OwnExerciseSerializer(OwnExercise,many=True)
    return Response(serializer.data)



@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def displaySingleSeries(request):
    user= request.user
    elements = SingleSeries.objects.all()
    serializer = SingleSeriesSerializer(elements,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createSingleSeries(request):
    print(request.data)
    serializer = SingleSeriesSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['GET'])
def displayDescriptionGoals(request):
    user= request.user
    description_data = DescriptionGoals.objects.filter()
    serializer = DescriptionGoalsSerializer(description_data,many=True)
    return Response(serializer.data)
#createTraining
#displayTraining
#createOwnExercise
#displayOwnExercise
#createPersonalGoals
#displayPersonalGoals
#createPersonalResults
#displayPersonalResults
#createpersonalDimensions
#displaypersonalDimensions