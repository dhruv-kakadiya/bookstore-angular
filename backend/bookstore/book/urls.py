from django.urls import path
from .views import *

urlpatterns = [
    path("search/<param>", BookView.as_view(), name="search"),
    path("search/", BookView.as_view(), name="search"),
    path("cart/<param>", CartBookView.as_view(), name="search"),
]