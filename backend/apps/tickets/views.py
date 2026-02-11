from rest_framework import viewsets, permissions
from rest_framework.exceptions import PermissionDenied
from .models import Ticket
from .serializers import TicketSerializer
from .permissions import *
from core.permissions import IsAdmin, IsAdminOrSupport

class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "admin":
            return Ticket.objects.filter(is_active=True).order_by("-created_at")

        if user.role == "support":
            return Ticket.objects.filter(
                is_active=True,
                assigned_to=user
            ).order_by("-created_at")

        # client
        return Ticket.objects.filter(
            is_active=True,
            created_by=user
        ).order_by("-created_at")

    # 🔐 Permisos por acción
    def get_permissions(self):
        if self.action == "destroy" and self.request.user.role != "admin":
            raise PermissionDenied("Solo admin puede eliminar tickets")

        if self.action in ["update", "partial_update"]:
            if self.request.user.role not in ["admin", "support"]:
                raise PermissionDenied("No tienes permiso para modificar tickets")

        return [permissions.IsAuthenticated()]

    # 🆕 Crear
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    # ✏️ Actualizar
    def perform_update(self, serializer):
        user = self.request.user

        # Solo admin puede cambiar prioridad
        if "priority" in serializer.validated_data:
            if user.role != "admin":
                raise PermissionDenied("Solo admin puede cambiar prioridad")

        serializer.save(modified_by=user)

    # 🗑 Soft delete
    def perform_destroy(self, instance):
        instance.is_active = False
        instance.modified_by = self.request.user
        instance.save()