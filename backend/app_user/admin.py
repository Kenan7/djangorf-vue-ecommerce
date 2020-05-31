from django.contrib import admin
from app_user.models import AppUser

# from app_user.forms import CustomUserChangeForm, CustomUserCreationForm
# from app_user.forms import CustomModelForm


@admin.register(AppUser)
class AppUserAdmin(admin.ModelAdmin):
    # add_form = CustomUserCreationForm
    # form = CustomUserChangeForm
    # form = CustomModelForm
    list_display = ("email", "first_name", "is_superuser")
    search_fields = ("first_name", "email")
    ordering = ("created_at",)
    exclude = ['groups', 'user_permissions']

    fieldsets = (
        ("Bilgiler",
         {'fields':
          ('email',  'birth_date', 'city')
          }
         ),
        ('izinler',
         {'fields':
          ('is_staff', 'is_active')
          }
         ),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
