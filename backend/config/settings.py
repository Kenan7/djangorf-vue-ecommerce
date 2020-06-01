import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

AUTH_USER_MODEL = 'app_user.AppUser'

# HOME_TEMPLATE = os.path.join(BASE_DIR, 'main', 'templates')
# AUTH_TEMPLATE = os.path.join(BASE_DIR, 'main', 'templates', 'auth')

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
STATIC_ROOT = os.path.join(BASE_DIR, "static")
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
# STATICFILES_DIRS = [os.path.join(BASE_DIR, "client", "dist")]


REST_AUTH_REGISTER_SERIALIZERS = {
    "REGISTER_SERIALIZER": "app_user.serializers.CustomRegisterSerializer",
}
# COMPRESS_PRECOMPILERS = (
#     ('text/x-scss', 'django_libsass.SassCompiler'),
# )

# STATICFILES_FINDERS = [
#     'django.contrib.staticfiles.finders.FileSystemFinder',
#     'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#     'compressor.finders.CompressorFinder'
# ]

# COMPRESS_OFFLINE = True
# LIBSASS_OUTPUT_STYLE = 'compressed'
# STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'

SECRET_KEY = os.environ.get("SECRET_KEY", 'foo')

DEBUG = int(os.environ.get("DEBUG", default=0))

ALLOWED_HOSTS = ['*']

BASE = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
]

LOCAL = [
    'main.apps.MainConfig',
    # 'user_profile.apps.UserProfileConfig',
    'app_user.apps.AppUserConfig',
]

THIRD_PARTY = [
    'versatileimagefield',
    'rest_framework',
    'corsheaders',
    'rest_framework.authtoken',
    'dj_rest_auth',
    'dj_rest_auth.registration',
    'allauth',
    'allauth.account',
]

INSTALLED_APPS = BASE + LOCAL + THIRD_PARTY

CORS_ORIGIN_ALLOW_ALL = True

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [HOME_TEMPLATE, AUTH_TEMPLATE],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

DATABASES = {
    "default": {
        "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.sqlite3"),
        "NAME": os.environ.get("SQL_DATABASE", os.path.join(BASE_DIR, "db.sqlite3")),
        "USER": os.environ.get("SQL_USER", "user"),
        "PASSWORD": os.environ.get("SQL_PASSWORD", "password"),
        "HOST": os.environ.get("SQL_HOST", "localhost"),
        "PORT": os.environ.get("SQL_PORT", "5432"),
    }
}


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
SITE_ID = 1

# REST_AUTH_REGISTER_SERIALIZERS = {
#     "REGISTER_SERIALIZER": "app_user.serializers.CustomRegisterSerializer",
# }

ACCOUNT_USER_MODEL_USERNAME_FIELD = 'username'
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USER_EMAIL_FIELD = 'email'
ACCOUNT_LOGOUT_ON_GET = True
ACCOUNT_EMAIL_VERIFICATION = "none"
