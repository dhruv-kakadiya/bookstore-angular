from django.urls import path
from .views import *

urlpatterns = [
    path('create_transaction/', CreateOrder.as_view(), name="create_order"),
    path('verify_txn/', VerifyTxn.as_view(), name="verify_txn"),
    path('cancel_txn/', CancelTxn.as_view(), name="verify_txn"),
]
