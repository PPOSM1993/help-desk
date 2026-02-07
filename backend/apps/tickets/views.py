from rest_framework import viewsets, permissions
from .models import Ticket
from .serializers import TicketSerializer
from .permissions import IsOwnerOrAgent


class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAgent]

    def get_queryset(self):
        user = self.request.user

        queryset = Ticket.objects.filter(is_active=True)

        # Admin / staff ve todo
        if user.is_staff:
            return Ticket.objects.all().order_by("created_at")

        # Usuario normal ve solo sus tickets
        return Ticket.objects.filter(created_by=user).order_by("created_at")

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(modified_by=self.request.user)

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.modified_by = self.request.user
        instance.save()
