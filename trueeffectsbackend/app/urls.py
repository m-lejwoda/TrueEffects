from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns=[
    path('display_exercises/',views.exerciseView,name="exercise-view"),
    path('create_exercise/',views.exerciseCreate,name="create_exercise"),
    path('register/',views.registration_view,name='login'),
    path('login/',obtain_auth_token,name="login"),
    path('create_personal_dimensions/',views.createpersonalDimensions,name="createpersonalDimensions"),
    path('display_personal_dimensions/',views.displaypersonalDimensions,name="drisplaypersonalDimensions"),
    path('logout/', views.Logout.as_view()),
    #path('registerv2/',views.CreateUserView.as_view(),name='registerv2'),
]