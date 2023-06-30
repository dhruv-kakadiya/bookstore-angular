from django.db import models
from ckeditor.fields import RichTextField 

from author.models import Author
from category.models import Category


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length = 500)
    releaseDate = models.DateField()
    image = models.ImageField(null = True, blank = True)
    star = models.FloatField(default = 0)
    short_intro = models.TextField()
    brief_intro = RichTextField()
    price = models.FloatField()

    def __str__(self):
        return self.title


class BookAuthor(models.Model):
    author = models.ForeignKey(Author, on_delete = models.CASCADE)
    book = models.ForeignKey(Book, on_delete = models.CASCADE)

    def __str__(self):
        return (self.author.name + " & " + self.book.title)


class BookCategory(models.Model):
    category = models.ForeignKey(Category, on_delete = models.CASCADE)
    book = models.ForeignKey(Book, on_delete = models.CASCADE)

    def __str__(self):
        return (self.category.name + " & " + self.book.title)
