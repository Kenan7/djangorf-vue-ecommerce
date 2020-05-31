from django.contrib import admin
from main.models import Product
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from django import forms
from django.contrib.auth.models import User
# from user_profile.models import Profile


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')


# @admin.register(Profile)
# class ProfileForm(forms.ModelForm):
#     class Meta:
#         model = Profile
#         fields = (
#             'tc',
#             'phone_number',
#             'birth_date',
#             'province',
#             'city'
#         )


@admin.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'brief', 'description')


admin.site.unregister(Group)
