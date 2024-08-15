from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

# Create your views here.

def main(reqest):
    return render(reqest,'main.html')

def signup(request):
    if request.method=='POST':
        username=request.POST.get('firstname')
        email=request.POST.get('email')
        password=request.POST.get('password')
        my_users=User.objects.create_user(username,email,password)
        my_users.save()
       
        return redirect('login')
    return render(request,'signup.html')

def loginpage(request):
    if request.method=='POST':
        uname=request.POST.get('uname')
        password=request.POST.get('password')
        User=authenticate(request,username=uname,password=password)
        if User is not None:
            login(request,User)
            return redirect('main')
        else:
            return HttpResponse("username or passwor is not correct!")
    return render(request,'login.html')


def logoutpage(request):
    logout(request)
    return redirect('login')