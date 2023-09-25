from django.shortcuts import render
from .models import Post

# Create your views here.
def home(request):
    return render(request,'index.html')

def post(request):
    return render(request,'post.html')

def signup(request):
    return render(request,'signup.html') 

def signin(request):
    return render(request,'signin.html') 

