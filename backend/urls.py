from django.contrib import admin
from django.urls import path,include, re_path
from django.conf.urls import url
from django.views.generic import  TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path(".*", TemplateView.as_view(template_name = "index.html"))   
]

 
