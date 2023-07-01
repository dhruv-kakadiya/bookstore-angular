from django.urls import path
from .views import *


urlpatterns = [
    path("author/<int:pk>", AuthorView.as_view(), name="get_author"),
    path("author/", AuthorView.as_view(), name="get_authors"),
    path("get_top_three_authors/", AuthorTopThreeView.as_view(), name="get_top_three_authors"),
]