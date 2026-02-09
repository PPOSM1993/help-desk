from rest_framework import viewsets, permissions
from .models import Ticket
from .serializers import TicketSerializer
from .permissions import IsOwnerOrAgent


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.filter(is_active=True)
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAgent]

    def get_queryset(self):
        user = self.request.user

        base_qs = Ticket.objects.filter(is_active=True)

        if user.is_staff:
            return base_qs.order_by("created_at")

        return base_qs.filter(created_by=user).order_by("created_at")


    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(modified_by=self.request.user)

    def perform_destroy(self, instance):
        print("🔥 Eliminando ticket", instance.id)
        instance.is_active = False
        instance.modified_by = self.request.user
        instance.save()

