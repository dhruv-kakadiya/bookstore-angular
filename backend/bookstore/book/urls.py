from django.urls import path
from .views import *

urlpatterns = [
    path("get_top_six_books/", BookTopSixView.as_view(), name="get_top_six_books"),
    path("search/", BookView.as_view(), name="search"),
    path("search/<param>", BookView.as_view(), name="search"),
]