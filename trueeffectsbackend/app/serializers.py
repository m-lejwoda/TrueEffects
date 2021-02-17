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
        fields = '__all__'

class OwnExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnExercise
        fields = '__all__'

class DescriptionGoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DescriptionGoals
        fields = '__all__'

class RepsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reps
        fields = '__all__'
class AssumedRepsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssumedReps
        fields = '__all__'
class SingleSeriesSerializer(serializers.ModelSerializer):
    reps = RepsSerializer(many=True)
    exercise = ExerciseSerializer(required=False, allow_null=True)
    ownexercise = OwnExerciseSerializer(required=False, allow_null=True)
    class Meta:
        model = SingleSeries
        fields = '__all__'
        
    def create(self, validated_data):
        reps_data = validated_data.pop('reps')
        singleseries = SingleSeries.objects.create(**validated_data)
        for rep_data in reps_data:
            # reps,created = Reps.objects.get_or_create(**rep_data)
            reps = Reps.objects.create(**rep_data)
            singleseries.reps.add(reps)
        return singleseries

class TrainingSerializer(serializers.ModelSerializer):
    training = SingleSeriesSerializer(many=True)
    class Meta:
        model = Training
        fields = '__all__'
    def update(self, instance, validated_data):
        print("update")
        print("Poprawka przed update")
        # print(instance.name)
        # print(instance.training.all())
        training = validated_data.pop('training')
        print(training)
        for el in range(len(instance.training.all())):
            print(training[el]['reps'])
            singleseries = SingleSeries.objects.get(id = instance.training.all()[el].id)
            print("singleseries.reps.all()")
            print(singleseries.reps)
            # for rep in singleseries.reps.all():
            #     print("to jest rep")
            #     print(rep.delete())
            for element in training[el]['reps']:
                print(element['reps'])
                repeats,repbool=Reps.objects.get_or_create(reps = element['reps'])
                print("to jest repeat")
                print(repeats)
                singleseries.reps.add(repeats)
            #     print(repeats)
            #     singleseries.reps.add(repeats[0])
            # print(singleseries)
            # for ss in singleseries.reps.all():
            #     print(ss)
            # for elements in range(len(singleseries.reps)):
            #     print(elements)
            # print(singleseries.exercise)
            # print(training[el]['exercise']['name'])
            # exercise = Exercise.object.get(name =  )
        # for el in instance.training.all():
        #     singleseries = SingleSeries.objects.get(id = el.id)
        #     print(singleseries.exercise)
        # SingleSeries.object
        # for el in instance:
        #     print(el)
        print("koniec treningu")
       
        # instance['training'] = validated_data
        # print(validated_data)
        # instance = validated_data
        
        return instance
    def create(self,validated_data):
        singleseries_data = validated_data.pop('training')
        training = Training.objects.create(**validated_data)
        for singleseries_dat in singleseries_data:
            exercise = Exercise.objects.get(name = singleseries_dat['exercise']['name'])
            singleseries_dat['exercise'] = exercise
            reps_data = singleseries_dat.pop('reps')
            exercise_data = singleseries_dat.pop('exercise')
            singleseries_dat['exercise'] = (exercise_data)
            singleseries = SingleSeries.objects.create(**singleseries_dat)
            for rep_data in reps_data:
                reps = Reps.objects.get_or_create(**rep_data)
                singleseries.reps.add(reps)
            training.training.add(singleseries)
        return training
    
        
        
