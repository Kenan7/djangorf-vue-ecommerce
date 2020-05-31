from django.db import models
from versatileimagefield.fields import VersatileImageField
from django.utils.translation import gettext as _
from main.utils import TimeStampedModel


class Product(TimeStampedModel):
    title = models.CharField(_("Ürün ismi"), max_length=50)
    brief = models.CharField(_("Kısa bilgi"), max_length=250)
    description = models.CharField(_("Hakkında"), max_length=1000)
    image = VersatileImageField(
        'Fotograf',
        upload_to='product_images/'
    )

    def __str__(self):
        return self.title
