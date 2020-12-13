from django.urls import path
from . import views

urlpatterns=[
    path('',views.exerciseView,name="exercise-view"),
    path('create_exercise/',views.exerciseCreate,name="create_exercise")
]