from django.urls import path
from app_user import views


urlpatterns = [
    path(
        'list/',
        views.AppUserListAPIView.as_view(),
        name='app_user_list'
    ),
    path(
        '<int:id/',
        views.AppUserRetrieveUpdateDestroyAPIView.as_view(),
        name='app_user_rud'
    ),

]
