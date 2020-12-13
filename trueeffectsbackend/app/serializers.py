from .models import *
from rest_framework import serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['__all__']
class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields=['__all__']
class PersonalDimensionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalDimensions
        fields = ['__all__']
class PersonalGoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalGoals
        fields = ['__all__']
class PersonalResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalResults
        fields = ['__all__']
class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['name']

class OwnExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnExercise
        fields = ['__all__']

class PersonalExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalExercise
        fields = ['__all__']    

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['__all__']