# 🛠️ Sistema de Mesa de Ayuda

Sistema de gestión de tickets de mesa de ayuda desarrollado con una arquitectura moderna, escalable y orientada a producción.

El proyecto utiliza un **monorepo**, separando claramente frontend y backend, y está pensado como una solución real para empresas u organizaciones.

---

## 🚀 Stack Tecnológico

### 🖥️ Frontend
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **shadcn/ui**
- Plantilla UI base para acelerar el desarrollo
- Consumo de API REST

### ⚙️ Backend
- **Python**
- **Django**
- **Django Rest Framework (DRF)**
- Arquitectura basada en API REST
- Autenticación (JWT / Clerk / por definir)

### 🗄️ Base de Datos
- **PostgreSQL**
- ORM de Django
- Migraciones versionadas

### 🔐 Autenticación
- JWT (Django Simple JWT) **o**
- Clerk (pendiente de decisión final)

### ☁️ Infraestructura (planificada)
- Frontend: Vercel
- Backend: Railway / Render / Fly.io
- Base de datos: PostgreSQL gestionado
- Variables de entorno con `.env`

---

## 📂 Estructura del Proyecto



---

## 🧩 Funcionalidades (planificadas)

### 👤 Usuarios
- Registro / Login
- Roles:
  - Usuario
  - Soporte
  - Administrador

### 🎫 Tickets
- Crear tickets
- Asignar prioridad
- Estados:
  - Abierto
  - En progreso
  - Resuelto
  - Cerrado
- Comentarios y seguimiento
- Historial de cambios

### 📊 Dashboard
- Resumen de tickets
- Tickets por estado
- Tickets por usuario
- Métricas básicas

---

## 🛠️ Instalación y Uso

### Requisitos
- Node.js 18+
- Python 3.10+
- PostgreSQL
- Git

---

### ▶️ Frontend

```bash
cd frontend
npm install
npm run dev
```

---
### ▶️ Backend

```
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### 🔑 Variables de Entorno

- Frontend (frontend/.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

- Backend (backend/.env)

```
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgres://user:password@localhost:5432/mesa_ayuda
```

### 📅 Estado del Proyecto

- 🚧 En desarrollo activo
  
 - Estructura base del proyecto
 - Integración plantilla frontend
 - Setup backend Django + DRF
 - Modelo de usuarios
 - Sistema de tickets
 - Autenticación
   Deploy
```
