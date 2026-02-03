from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Ticket(models.Model):

    STATUS_CHOICES = (
        ("open", "Abierto"),
        ("in_progress", "En progreso"),
        ("closed", "Cerrado"),
        ("expired", "Expirado"),
        
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

    assigned_to = models.ForeignKey(
        User,
        related_name="tickets_assigned",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"#{self.id} - {self.title}"
