from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import razorpay
from decouple import config

from .models import Transaction


razpay_key = config('razpay_key')
razpay_secret = config('razpay_secret')
razorpay_client = razorpay.Client(auth = (razpay_key, razpay_secret))


class CreateOrder(APIView):
    def post(self, request, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)

        razorpay_order = razorpay_client.order.create(dict(amount = data['amount'], currency = data['currency'], payment_capture = 0))
        transaction = Transaction(amount = data['amount'], order_id = razorpay_order['id'], is_completed = 0)
        transaction.save()
        return Response({'order_id': razorpay_order['id']}, status = status.HTTP_200_OK)


class VerifyTxn(APIView):
    def post(self, request, pk = None, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)

        if (data["razorpay_order_id"] is None) or (data["razorpay_payment_id"] is None) or (data["razorpay_signature"] is None):
            return Response({"Error": "Unauthorized"}, status = status.HTTP_401_UNAUTHORIZED)

        params_dict = { 
                        "razorpay_order_id": data["razorpay_order_id"], 
                        "razorpay_payment_id": data["razorpay_payment_id"], 
                        "razorpay_signature": data["razorpay_signature"] 
                    }

        transaction = Transaction.objects.filter(order_id = data["razorpay_order_id"]).first()
        if(transaction == None):
            return Response({"Error": "Unauthorized"}, status = status.HTTP_401_UNAUTHORIZED)

        result = razorpay_client.utility.verify_payment_signature(params_dict)
        if result is not None:
            amount = data["amount"]
            try:
                razorpay_client.payment.capture(data["razorpay_payment_id"], amount)
                transaction.is_completed = 1
                transaction.save()
                return Response({'Message': 'Success'}, status = status.HTTP_200_OK)
            except:
                transaction.is_completed = 0
                transaction.save()
                return Response({'Message': 'Failed'}, status = status.HTTP_401_UNAUTHORIZED)
        else:
            transaction.is_completed = 0
            transaction.save()
            return Response({'Message': 'Failed'}, status = status.HTTP_401_UNAUTHORIZED)


class CancelTxn(APIView):
    def post(self, request, pk = None, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)

        if data["order_id"] is None:
            return Response({"Error": "Unauthorized"}, status = status.HTTP_401_UNAUTHORIZED)

        transaction = Transaction.objects.filter(order_id = data["order_id"]).first()
        if transaction is None:
            return Response({"Error": "Unauthorized"}, status = status.HTTP_401_UNAUTHORIZED)

        transaction.is_completed = 0
        transaction.save()
        return Response({'Message': 'Successfully Cancelled'}, status = status.HTTP_200_OK)
