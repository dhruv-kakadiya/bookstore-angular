from django.urls import path
from .views import *


urlpatterns = [
    path("get_top_three_authors/", AuthorTopThreeView.as_view(), name="get_top_three_authors"),
]