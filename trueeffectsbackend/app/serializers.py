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
        fields = '__all__'

# class PersonalExerciseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PersonalExercise
#         fields = ['__all__']    


class RepsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reps
        fields = '__all__'

class SingleSeriesSerializer(serializers.ModelSerializer):
    reps = RepsSerializer(many=True)
    class Meta:
        model = SingleSeries
        fields = '__all__'
    def create(self, validated_data):
        print(validated_data)
        reps_data = validated_data.pop('reps')
        print(reps_data)
        singleseries = SingleSeries.objects.create(**validated_data)
        for rep_data in reps_data:
            reps,created = Reps.objects.get_or_create(**rep_data)
            print(reps)
            singleseries.reps.add(reps)
        return singleseries

class TrainingSerializer(serializers.ModelSerializer):
    training = SingleSeriesSerializer(many=True)
    class Meta:
        model = Training
        fields = '__all__'
    def create(self,validated_data):
        singleseries_data = validated_data.pop('training')
        for singleseries_dat in singleseries_data:
            print(singleseries_dat)
            reps_data = singleseries_dat.pop('reps')
            for repeats in reps_data:
                reps = Reps.objects.create(**repeats)
                print(reps)
        #return training
        
        
        
        
        
        # print("validated_data")
        # print(validated_data)
        # training = Training.objects.create(**validated_data)
        # trainings_data = validated_data.pop('training')
        # singleseries = SingleSeries.objects.create()
        # print("trening")
        # print(trainings_data)
        # print("koniec treningu")
        # for training_data in trainings_data:
        #     reps = training_data.pop('reps')
        #     print("reps")
        #     print(reps)
            #training.training.add(train)
            # for rep in reps:
            #     repeats = Reps.objects.get_or_create(**rep)
            #     print("repeats")
            #     print(repeats)
            #     print("reps")
            #     print(rep)
            # singleseries = SingleSeries.objects.create(reps = repeats)
            # print(singleseries)
            # print("wartosci")
            # print(singleseries.values())
            # training = Training.objects.create(training=singleseries **training_data)
        # return training
        
       
        
        
