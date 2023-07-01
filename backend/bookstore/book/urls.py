from django.urls import path
from .views import *

urlpatterns = [
    path("book/<int:pk>", BookView.as_view(), name="get_book"),
    path("book/", BookView.as_view(), name="get_books"),
    path("search/<param>", SearchedBookView.as_view(), name="search"),
    path("search/", SearchedBookView.as_view(), name="search"),
    path("cart/<param>", CartBookView.as_view(), name="search"),
]