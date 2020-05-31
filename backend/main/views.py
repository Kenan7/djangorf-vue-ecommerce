from .serializers import (
    UserSerializer
)
from django.shortcuts import render
from main.models import Product
from django.views.generic import ListView
from main.forms import RegisterForm

from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.http import Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import CreateView, DetailView, View
from rest_framework.generics import ListAPIView, RetrieveAPIView
from main.serializers import ProductSerializer
from rest_framework.viewsets import ModelViewSet
from main.pagination import ProductLimitOffsetPagination, ProductPagePagination


User = get_user_model()


class ProductListAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagePagination

    def filter_queryset(self, queryset):
        queryset = super(ProductListAPIView, self).filter_queryset(queryset)
        return queryset.order_by('-modified_at')


class ProductDetailAPIView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'


class UserViewSet(ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer


# class ProductViewSet(ViewSet):

#     def list(self, request):
#         paginate_by = 20
#         queryset = Product.objects.all()
#         serializer = ProductSerializer(queryset)
#         return Response(serializer.data)

#     def retrieve(self, request, pk=None):
#         queryset = User.objects.all()
#         product = get_object_or_404(queryset, pk=pk)
#         serializer = ProductSerializer(product)
#         return Response(serializer.data)

#     def filter_queryset(self, queryset):
#         queryset = super(ProductViewSet, self).filter_queryset(queryset)
#         return queryset.order_by('-modified_at')


class RegisterView(SuccessMessageMixin, CreateView):
    form_class = RegisterForm
    template_name = 'registration/register.html'
    success_url = '/'
    success_message = "Your account was created successfully. Please check your email."

    def dispatch(self, *args, **kwargs):
        # if self.request.user.is_authenticated():
        #     return redirect("/logout")
        return super(RegisterView, self).dispatch(*args, **kwargs)


class Home(ListView):
    queryset = Product.objects.all()
    template_name = "base.html"
    context_object_name = "products"
    paginate_by = 20
