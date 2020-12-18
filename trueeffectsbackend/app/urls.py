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
    path('create_training',views.createTraining,name="create_training"),
    path('display_training',views.createTraining,name="display_training"),
    path('create_own_exercise',views.createOwnExercise,name="create_own_exercise"),
    path('display_own_exercise',views.displayOwnExercise,name="display_own_exercise"),
    path('create_personal_goals',views.createPersonalGoals,name="create_personal_goals"),
    path('display_personal_goals',views.displayPersonalGoals,name="display_personal_goals"),
    path('create_personal_goals',views.createPersonalResults,name="create_personal_results"),
    path('display_personal_goals',views.displayPersonalResults,name="display_personal_results"),



]


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