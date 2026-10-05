/*import { IUser } from './types/IUser';

function protegerRutas() {
    // 1. Vemos en qué página está intentando entrar el usuario
    const rutaActual = window.location.pathname;
    
    // 2. Traemos al usuario que inició sesión en el Paso 2
    const usuarioStorage = localStorage.getItem('usuarioActivo');
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
}

// Ejecutamos la función automáticamente ni bien cargue el script
protegerRutas();
*/