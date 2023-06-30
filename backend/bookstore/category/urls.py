from django.urls import path
from .views import *


urlpatterns = [
    path("get_all_categories/", CategoryView.as_view(), name="get_all_categories"),
    path("get_category/<int:pk>", CategoryView.as_view(), name="get_category"),
]