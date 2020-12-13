from .models import *
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
class ExerciseSerializer(serializers.ModelsSerializer):
    class Meta:
        model = ExerciseSerializer
        fields = ['__all__']

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
        model = TrainingSerializer
        fields = ['__all__']