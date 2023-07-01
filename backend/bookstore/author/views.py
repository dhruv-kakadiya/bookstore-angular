from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Author
from .serializers import AuthorSerializer


# Create your views here.
class AuthorView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        if pk != None:
            author = Author.objects.filter(id = pk)
            if len(author) > 0:
                author = author[0]
                return Response(AuthorSerializer(author).data, status = status.HTTP_200_OK)
            return Response({'error': 'Book Not Found.'}, status = status.HTTP_404_NOT_FOUND)
        authors = Author.objects.all()
        return Response(AuthorSerializer(authors, many = True).data, status = status.HTTP_200_OK)


class AuthorTopThreeView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        authors = Author.objects.all().order_by('-star')[:3]
        return Response(AuthorSerializer(authors, many = True).data, status = status.HTTP_200_OK)
