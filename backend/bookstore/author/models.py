from django.db import models
from ckeditor.fields import RichTextField 


# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length = 500)
    dob = models.DateField()
    image = models.ImageField(null = True, blank = True)
    short_intro = models.TextField()
    brief_intro = RichTextField()

    def __str__(self):
        return self.name
