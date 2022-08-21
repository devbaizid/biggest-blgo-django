from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include

from post.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('',index,name="index"),
    path('blog/',blog ,name="blog"),
    path('post/<id>/',post, name="post-detail"),
    path('post/<id>/update/',post_update, name="post-update"),
    path('post/<id>/delete/',post_delete, name="post-delete"),
    path('search',search, name="search"),
    path('post-create/',post_create, name="post-create"),

    path('tinymce/', include('tinymce.urls')),




]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)