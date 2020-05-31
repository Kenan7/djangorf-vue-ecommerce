from django.core.management.base import BaseCommand
from main.models import Product


class Command(BaseCommand):

    def _create_products(self):
        for i in range(200):
            Product.objects.create(
                title="test",
                brief="testtttttt",
                description="well well well well well well well ",
                image="product_images/def.png"
            )

    def handle(self, *args, **options):
        self._create_products()
