from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('post', views.post),
    path('signup',views.signup),
    path('signin',views.signin),
    path('signin',views.signin)
]