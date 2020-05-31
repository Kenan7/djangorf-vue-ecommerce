from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination
)


class ProductLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 2
    max_limit = 2


class ProductPagePagination(PageNumberPagination):
    page_size = 30
