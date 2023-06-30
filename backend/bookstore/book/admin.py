from django.contrib import admin
from .models import Book, BookAuthor, BookCategory

# Register your models here.
admin.site.register(Book)
admin.site.register(BookAuthor)
admin.site.register(BookCategory)