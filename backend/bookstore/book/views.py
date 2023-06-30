from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q

from .models import Book
from .serializers import BookSerializer


# Create your views here.
class BookTopSixView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        books = Book.objects.all().order_by('-star')[:6]
        return Response(BookSerializer(books, many = True).data, status = status.HTTP_200_OK)


class BookView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        request_data = []
        if "param" in kwargs:
            request_data = kwargs["param"].split("&")

        query = Q()
        for data in request_data:
            [key, value] = data.split("=", 1)
            if value:
                if key == "category":
                    query &= Q(bookcategory__category__name__iexact = value)
                elif key == "word":
                    query |= Q(title__icontains = value)
                    query |= Q(bookauthor__author__name__icontains = value)
        books = Book.objects.filter(query)
        return Response(BookSerializer(books, many = True).data, status = status.HTTP_200_OK)
