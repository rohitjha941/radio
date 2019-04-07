from django.contrib import admin
from django.urls import path,include, re_path
from django.conf.urls import url
from django.views.generic import  TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
     
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
 
