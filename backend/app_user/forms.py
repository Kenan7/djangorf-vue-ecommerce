# # from django.contrib.auth.forms import UserCreationForm, UserChangeForm


# # # class CustomAppUserCreationForm(UserCreationForm):
# # #     class Meta:
# # #         model = AppUser
# # #         fields = ('email', 'first_name',
# # #                   'last_name', 'gender')


# # from django.forms import ModelForm
# # from .models import AppUser


# # class CustomAppUserChangeForm(UserChangeForm):
# #     class Meta:
# #         model = AppUser
# #         fields = [
# #             ''
# #         ]


# from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# from .models import AppUser


# class CustomUserCreationForm(UserCreationForm):

#     class Meta(UserCreationForm):
#         model = AppUser
#         fields = ('email',)


# class CustomUserChangeForm(UserChangeForm):

#     class Meta:
#         model = AppUser
#         fields = ('email',)
