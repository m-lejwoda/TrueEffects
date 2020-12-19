from .models import *
from rest_framework import serializers
from django.contrib.auth.models import User
class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields=['username','email', 'password','password2']
        extra_kwargs = {
            'password': {'write_only':True}
        }
        def save(self):
            user = User(
                username=self.validated_data['username'],
                email=self.validated_data['email'],
            )
            password = self.validated_data['password']
            password2 = self.validated_data['password2']
            if password != password2:
                raise serializers.ValidationError({'password': 'Hasła się nie zgadzają'})
            user.set_password(password)
            user.save()
            return user

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ('id', 'username','email', 'password','password2')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'password': 'Hasła się nie zgadzają'})
        else:
            user.set_password(validated_data['password'])
            user.save()

        return user
# class PersonSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Person
#         fields=['__all__']
class PersonalDimensionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalDimensions
        fields = '__all__'
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

# class PersonalExerciseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PersonalExercise
#         fields = ['__all__']    

class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['__all__']