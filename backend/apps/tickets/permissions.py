from rest_framework.permissions import BasePermission


class IsOwnerOrAgent(BasePermission):
    """
    - Usuario normal: solo ve sus tickets
    - Agente/Admin: ve todos
    """

    def has_object_permission(self, request, view, obj):
        if request.user.is_staff:
            return True

        return obj.created_by == request.user
