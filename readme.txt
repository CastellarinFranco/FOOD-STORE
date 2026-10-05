# Proyecto: Protección de Rutas y Autenticación (Food Store)
#Autor: Castellarin Franco
#Materia: Desarrollo de Software

## Descripción
Este es un proyecto educativo que ilustra un mecanismo de protección de rutas en el lado del cliente utilizando **Vite** y **TypeScript**. 

En esta evolución del trabajo práctico, se ha sustituido la carga abierta de datos por un sistema de **Autenticación y Roles (Admin/Client)**, validando credenciales y gestionando sesiones dinámicas mediante persistencia de datos.

---

##  Requisitos Cumplidos (TP Integrador)
Se han implementado satisfactoriamente los puntos solicitados:
* **Paso 1 - Registro:** Captura de datos, validación de contraseña (mín. 8 caracteres) y asignación automática del rol `client` (eliminando el selector manual). Guardado en un array `users` dentro del `localStorage`.
* **Paso 2 - Login:** Validación cruzada de email y contraseña contra la base de datos local. Guardado de la sesión activa en la clave `userData`.
* **Paso 3 - Protección de Rutas (Guard centralizado):** Lógica implementada directamente en `src/main.ts` para interceptar la carga de vistas. Se bloquea el acceso de usuarios con rol `client` a las rutas `/admin/` y se redirige al login a usuarios sin sesión.
* **UI Dinámica:** El menú de navegación se actualiza automáticamente leyendo `userData`, inyectando el nombre del usuario y ocultando el botón de iniciar sesión.

---

## ¡Importante! Nivel de Seguridad
La protección de rutas implementada en este proyecto **NO ES SEGURA** y no debe utilizarse en un entorno de producción.
- **Razón**: La lógica de autenticación se basa en datos guardados en `localStorage` en el navegador del usuario.
- **Riesgo**: Cualquier usuario con conocimientos técnicos puede modificar el `localStorage` para alterar su rol. La seguridad real debe implementarse en el **backend** mediante APIs.

---

##  Instalación y Uso (Evaluación)
> **Nota:** Este repositorio no incluye la carpeta `node_modules`.

1. Instalar pnpm (si no está instalado):
   `npm install -g pnpm`
2. Instalar las dependencias en la raíz del proyecto:
   `pnpm install`
3. Iniciar el servidor de desarrollo:
   `pnpm dev`

**Testeo del Panel Admin:** Por defecto, los usuarios registrados son clientes. Para probar el Guard del Administrador, modifique manualmente en las herramientas del navegador (Application > Local Storage) el valor `"rol":"client"` a `"rol":"admin"` dentro del array `users`, limpie la sesión actual e inicie sesión nuevamente.

---

##  Estructura del Proyecto
/
├── src/
│   ├── main.ts               # Guard principal: Verificación centralizada de rutas y UI
│   ├── pages/                # Contenedores de las vistas
│   │   ├── admin/            # Zona protegida (solo administradores)
│   │   ├── auth/             # Vistas de registro y login (lógica validada)
│   │   └── client/           # Vistas públicas
│   ├── types/                # Interfaces estrictas (IUser, Rol)
│   └── utils/                # Utilidades secundarias de navegación
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo

Repositorio de GitHub: https://github.com/CastellarinFranco/FOOD-STORE