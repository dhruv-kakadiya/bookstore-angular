from django.db import models


class Transaction(models.Model):
    amount = models.IntegerField()
    order_id = models.CharField(max_length = 255)
    timestamp = models.DateTimeField(auto_now_add = True)
    is_completed = models.BooleanField(default = True, null = True)

    def __str__(self):
        return str(self.order_id) + " -- " + str(self.amount)
