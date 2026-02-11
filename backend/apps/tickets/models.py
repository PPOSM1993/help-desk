from datetime import timezone
from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Ticket(models.Model):

    STATUS_CHOICES = (
        ("open", "Abierto"),
        ("in_progress", "En progreso"),
        ("closed", "Cerrado"),
        ("expired", "Expirado"),
        ("pending", "Pendiente"),
        ("resolved", "Resuelto"),
    )

    PRIORITY_CHOICES = (
        ("low", "Baja"),
        ("medium", "Media"),
        ("high", "Alta"),
        ("urgent", "Urgente"),
    )

    title = models.CharField(max_length=255)
    description = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="open",
    )

    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES,
        default="medium",
    )

    created_by = models.ForeignKey(
        User,
    related_name="tickets_created",
        on_delete=models.CASCADE,
    )

    first_response_at = models.DateTimeField(null=True, blank=True)
    resolved_at = models.DateTimeField(null=True, blank=True)

    sla_response_deadline = models.DateTimeField(null=True, blank=True)
    sla_resolution_deadline = models.DateTimeField(null=True, blank=True)

    modified_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name="modified_tickets")

    assigned_to = models.ForeignKey(
        User,
        related_name="tickets_assigned",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    is_active = models.BooleanField(default=True)  # 👈 🔥 AQUÍ


    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def response_sla_status(self):
        if not self.first_response_at:
            if timezone.now() > self.sla_response_deadline:
                return "breached"
            return "pending"
        return "met"


    @property
    def resolution_sla_status(self):
        if not self.resolved_at:
            if timezone.now() > self.sla_resolution_deadline:
                return "breached"
            return "pending"
        return "met"


    def __str__(self):
        return f"#{self.id} - {self.title}"

