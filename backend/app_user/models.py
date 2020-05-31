from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from main.utils import TimeStampedModel

from phonenumber_field.modelfields import PhoneNumberField


class AppUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        # temp_notf = UserNotifications.objects.create(
        # temp_notf = UserNotifications.objects.create(
        #     title="test", data="whatever", date=timezone.now()
        # )
        # extra_fields.setdefault('notifications', temp_notf)

        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class AppUser(AbstractUser, TimeStampedModel):
    email = models.EmailField(('email address'), unique=True)

    tc = models.CharField(
        verbose_name="kimlik numarası",
        blank=True,
        null=True,
        max_length=11
    )

    phone_number = models.CharField(
        verbose_name="Telefon numarası",
        blank=True,
        null=True,
        max_length=15
    )
    birth_date = models.DateField(
        null=True,
        blank=True,
        verbose_name="Doğum tarihi"
    )

    address1 = models.CharField(
        verbose_name="Address 1",
        blank=True,
        null=True,
        max_length=200,
    )

    address2 = models.CharField(
        verbose_name="Address 2",
        max_length=200,
        blank=True,
        null=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = AppUserManager()

    def __str__(self):
        return f"{self.email} - {self.get_full_name()}"

    def get_short_name(self):
        return self.first_name
