from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category
from .serializers import CategorySerializer


# Create your views here.
class CategoryView(APIView):
    def get(self, request, pk = None, *args, **kwargs):
        if pk != None:
            category = Category.objects.filter(id = pk)
            if category != None:
                return Response(CategorySerializer(category).data, status = status.HTTP_200_OK)
            else:
                return Response({'error': 'Categoey Not Found.'}, status = status.HTTP_404_NOT_FOUND)
        categories = Category.objects.all()
        return Response(CategorySerializer(categories, many = True).data, status = status.HTTP_200_OK)
