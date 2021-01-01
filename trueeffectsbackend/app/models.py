from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
# Create your models here.
# class User(models.Model):
#     name = models.CharField(max_length=200)
#     email = models.EmailField()
# class Person(models.Model):
#     user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    

class AssumedReps(models.Model):
    assumedreps = models.IntegerField()
    def __str__(self):
        return str(self.assumedreps)
class Reps(models.Model):
    reps = models.IntegerField()
    def __str__(self):
        return str(self.reps)

class AllSeries(models.Model):
    #series = models.ManyToManyField(SingleSeries)
    number_of_series = models.IntegerField()
    rest_after = models.IntegerField()
    #training2 = models.ForeignKey(Training,on_delete=models.CASCADE)

class PersonalExercise(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    name = models.ForeignKey(Exercise,on_delete=models.CASCADE)
    # ownexercisename = models.ForeignKey(OwnExercise,on_delete=models.CASCADE,default=None)
    reps = models.IntegerField()
    predicted_weight = models.FloatField(default=0,null=True)
    weight = models.FloatField(default=0)
    concentric_phase = models.IntegerField(default=0)
    eccentric_phase = models.IntegerField(default=0)
    pause_after_concentric_phase = models.IntegerField()
    pause_after_eccentric_phase = models.IntegerField()
    rest = models.IntegerField(default=60)

class PersonalDimensions(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    left_biceps = models.FloatField()
    right_biceps = models.FloatField()
    left_forearm = models.FloatField()
    right_forearm = models.FloatField()
    left_leg = models.FloatField()
    right_leg = models.FloatField()
    bodyfat = models.FloatField()
class PersonalResults(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    Pullups = models.IntegerField()
    Dips = models.IntegerField()
    Pushups = models.IntegerField()
    Squats = models.IntegerField()
    
class PersonalGoals(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    Pullups = models.IntegerField()
    Dips = models.IntegerField()
    Pushups = models.IntegerField()
    Other = models.CharField(max_length=255)
class OwnExercise(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class SingleSeries(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise,on_delete=models.CASCADE,default=None,null = True)
    ownexercise = models.ForeignKey(OwnExercise,on_delete=models.CASCADE,default=None,null = True)
    weight = models.FloatField()
    rest = models.IntegerField()
    concentric_phase = models.IntegerField(default=0)
    eccentric_phase = models.IntegerField(default=0)
    pause_after_concentric_phase = models.IntegerField()
    pause_after_eccentric_phase = models.IntegerField()
    reps = models.ManyToManyField(Reps)

class Training(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    name = models.CharField(max_length=100)
    training = models.ManyToManyField(SingleSeries)
    date = models.DateField(null=True)
    description = models.CharField(max_length=255,default='',null=True)
    time = models.TimeField(auto_now=False, auto_now_add=False,null=True,default='00:00:00')
    
@receiver(post_save,sender=User)
def create_auth_token(sender,instance=None,created=False,**kwargs):
    if created:
        Token.objects.create(user=instance)