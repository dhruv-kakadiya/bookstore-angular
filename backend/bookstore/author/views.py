from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Author
from .serializers import AuthorSerializer


# Create your views here.
class AuthorTopThreeView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        authors = Author.objects.all().order_by('-star')[:3]
        return Response(AuthorSerializer(authors, many = True).data, status = status.HTTP_200_OK)
