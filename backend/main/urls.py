
# from rest_framework.routers import DefaultRouter

# from .views import (
#     UserViewSet,
#     ProductViewSet
# )

# router = DefaultRouter()

# router.register(r'users', UserViewSet)
# router.register(r'products', ProductViewSet)
# router.register(r'products/', ProductViewSet)

# urlpatterns = router.urls


from django.urls import path
from main.views import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name="list"),
    path('products/<int:id>/', ProductDetailAPIView.as_view(), name="detail"),

]
