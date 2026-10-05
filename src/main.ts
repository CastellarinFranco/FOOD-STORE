import { IUser } from './types/IUser';

function protegerRutas() {
    // 1. Vemos en qué página está intentando entrar el usuario
    const rutaActual = window.location.pathname;
    
    // 2. Traemos al usuario que inició sesión en el Paso 2
    const usuarioStorage = localStorage.getItem('userData');
    const usuarioActivo: IUser | null = usuarioStorage ? JSON.parse(usuarioStorage) : null;

    // Detectamos si la URL contiene la palabra '/admin/'
    const esRutaAdmin = rutaActual.includes('/admin/');

    // REGLA A: Si intenta entrar al admin y NO inició sesión -> Mandarlo al Login
    if (esRutaAdmin && !usuarioActivo) {
        window.location.href = '/src/pages/auth/login/login.html'; // Usamos ruta absoluta desde la raíz
        return;
    }

    // REGLA B: Si inició sesión, es 'client', e intenta entrar al admin -> Mandarlo al Inicio
    if (esRutaAdmin && usuarioActivo?.rol === 'client') {
        alert('Acceso denegado: Esta zona es exclusiva para administradores.');
        window.location.href = '/index.html';
        return;
    }

    // Buscamos los elementos del menú en el HTML
    const infoUsuario = document.getElementById('info-usuario');
    const itemLogin = document.getElementById('item-login');

    // Si hay un usuario logueado y los elementos del menú existen en esta página:
    if (usuarioActivo && infoUsuario && itemLogin) {
        // Ocultamos el botón original de "Iniciar Sesión"
        itemLogin.style.display = 'none';
        
        // Inyectamos el texto con el nombre del usuario
        infoUsuario.innerHTML = `Nombre de Usuario: <strong>${usuarioActivo.nombre}</strong>`;
    }
}

// Ejecutamos la función automáticamente ni bien cargue el script
protegerRutas();
