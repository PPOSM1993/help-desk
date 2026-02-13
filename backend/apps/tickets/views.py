from rest_framework import viewsets, permissions
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from .models import Ticket
from .serializers import TicketSerializer
from .permissions import *
from core.permissions import IsAdmin, IsAdminOrSupport
from django.utils import timezone
from datetime import timedelta


class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if user.role == "admin":
            return Ticket.objects.filter(is_active=True).order_by("-created_at")

        if user.role == "support":
            return Ticket.objects.filter(is_active=True, assigned_to=user).order_by(
                "-created_at"
            )

        # client
        return Ticket.objects.filter(is_active=True, created_by=user).order_by(
            "-created_at"
        )

    # 🔐 Permisos por acción
    def get_permissions(self):
        if self.action == "destroy" and self.request.user.role != "admin":
            raise PermissionDenied("Solo admin puede eliminar tickets")

        if self.action in ["update", "partial_update"]:
            if self.request.user.role not in ["admin", "support"]:
                raise PermissionDenied("No tienes permiso para modificar tickets")
        else:
            permissions_classes = [IsAuthenticated]

        return [permissions() for permissions in self.permission_classes]

    # 🆕 Crear
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

def perform_create(self, serializer):
    ticket = serializer.save(created_by=self.request.user)

    priority_sla = {
        "low": (8, 72),
        "medium": (4, 48),
        "high": (2, 24),
        "urgent": (1, 8),
    }

    response_hours, resolution_hours = priority_sla.get(ticket.priority, (4, 48))

    ticket.sla_response_deadline = timezone.now() + timedelta(hours=response_hours)
    ticket.sla_resolution_deadline = timezone.now() + timedelta(hours=resolution_hours)
    ticket.save()

    # ✏️ Actualizar
    def perform_update(self, serializer):
        user = self.request.user
        instance = self.get_object()


        # Solo admin puede cambiar prioridad
        if "priority" in serializer.validated_data:
            if user.role != "admin":
                raise PermissionDenied("Solo admin puede cambiar prioridad")
        if (
            "status" in serializer.validated_data and
            serializer.validated_data["status"] == "in_progress" and
            not instance.first_response_at
        ):
            instance.first_response_at = timezone.now()

        if (
            "status" in serializer.validated_data and
            serializer.validated_data["status"] == "resolved" and
            not instance.resolved_at
        ):
            instance.resolved_at = timezone.now()


        serializer.save(modified_by=user)

    # 🗑 Soft delete
    def perform_destroy(self, instance):
        instance.is_active = False
        instance.modified_by = self.request.user
        instance.save()
