from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
import json

from .models import Book
from .serializers import BookSerializer


# Create your views here.
class BookView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        if pk != None:
            book = Book.objects.filter(id = pk)
            if len(book) > 0:
                book = book[0]
                return Response(BookSerializer(book).data, status = status.HTTP_200_OK)
            return Response({'error': 'Book Not Found.'}, status = status.HTTP_404_NOT_FOUND)
        books = Book.objects.all()
        return Response(BookSerializer(books, many = True).data, status = status.HTTP_200_OK)


class SearchedBookView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        request_data = []
        if "param" in kwargs:
            request_data = kwargs["param"].split("&")

        query = Q()
        count = 0
        for data in request_data:
            [key, value] = data.split("=", 1)
            if value:
                if key == "category":
                    query &= Q(bookcategory__category__name__iexact = value)
                elif key == "word":
                    query |= Q(title__icontains = value)
                    query |= Q(bookauthor__author__name__icontains = value)
                elif key == "minPrice":
                    value = int(value)
                    query &= Q(price__gte = value)
                elif key == "maxPrice":
                    value = int(value)
                    query &= Q(price__lte = value)
                elif key == "minDate":
                    value = int(value)
                    query &= Q(releaseDate__gte = value)
                elif key == "maxDate":
                    value = int(value)
                    query &= Q(releaseDate__lte = value)
                elif key == "count":
                    count = int(value)
        books = Book.objects.filter(query).order_by('-star')
        if count:
            books = books[:count]
        return Response(BookSerializer(books, many = True).data, status = status.HTTP_200_OK)


class CartBookView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        [key, value] = kwargs["param"].split("=")
        value = json.loads(value)
        books = Book.objects.filter(id__in = value)
        return Response(BookSerializer(books, many = True).data, status = status.HTTP_200_OK)
