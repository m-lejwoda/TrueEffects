from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns=[
    path('',views.exerciseView,name="exercise-view"),
    path('create_exercise/',views.exerciseCreate,name="create_exercise"),
    path('register/',views.registration_view,name='login'),
    path('login/',obtain_auth_token,name="login")
    #path('registerv2/',views.CreateUserView.as_view(),name='registerv2'),
]