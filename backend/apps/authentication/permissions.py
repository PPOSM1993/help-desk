from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    """
    Permite acceso solo al dueño del objeto.
    Ejemplo: ver o editar su propio perfil.
    """

    def has_object_permission(self, request, view, obj):
        return obj == request.user


class IsBusinessAdmin(permissions.BasePermission):
    """
    Permite acceso solo a usuarios con rol 'admin'
    o a superusuarios de Django.
    """

    def has_permission(self, request, view):
        user = request.user
        return (
            user.is_authenticated and
            (user.role == "admin" or user.is_superuser)
        )


class IsAgent(permissions.BasePermission):
    """
    Permite acceso solo a usuarios con rol 'agent'.
    """

    def has_permission(self, request, view):
        user = request.user
        return (
            user.is_authenticated and
            user.role == "agent"
        )


class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Permite lectura a cualquier usuario autenticado.
    Permite escritura solo a admin (rol negocio) o superuser.
    """

    def has_permission(self, request, view):
        user = request.user

        if request.method in permissions.SAFE_METHODS:
            return user.is_authenticated

        return (
            user.is_authenticated and
            (user.role == "admin" or user.is_superuser)
        )
