from django.core.management.base import BaseCommand
from main.models import Product


class Command(BaseCommand):

    def _delete_products(self):
        try:
            Product.objects.all().delete()
        except:
            print("no more")

    def handle(self, *args, **options):
        self._delete_products()
