from django.urls import path
from .views import *

urlpatterns = [
   path('', mypage, name="mypage"),
]