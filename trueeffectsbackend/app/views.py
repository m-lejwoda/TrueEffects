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
from rest_framework.authtoken.views import ObtainAuthToken
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
        })

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
    # request.data['user']= request.user.id
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
    personalDimensions = PersonalDimensions.objects.filter(user=user).order_by('date')
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
@permission_classes([IsAuthenticated,])
def createOwnExercise(request):
    data = request.data
    user = request.user.id
    data['user'] = user
    serializer = OwnExerciseSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def displayTraining(request):
    training = Training.objects.filter(user=request.user)
    print(training)
    serializer = TrainingSerializer(training,many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def updateTraining(request):
    training = Training.objects.get(id=request.data['id'])
    print("training")
    # training.values()
    serializer = TrainingSerializer(instance=training,data=request.data)
    if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
#@permission_classes([IsAuthenticated,])
def createTraining(request):
    data = request.data
    data["user"] = request.user.id
    for element in data['training']:
        element["user"] = request.user.id  
    serializer = TrainingSerializer(data=data)
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
    exercises = OwnExercise.objects.filter(user=user)
    serializer = OwnExerciseSerializer(exercises,many=True)
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
    serializer = SingleSeriesSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)

@api_view(['GET'])
def displayDescriptionGoals(request):
    user= request.user
    description_data = DescriptionGoals.objects.filter(user=user)
    serializer = DescriptionGoalsSerializer(description_data,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createDescriptionGoals(request):
    data = request.data
    data['user'] = request.user.id
    serializer = DescriptionGoalsSerializer(data = data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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