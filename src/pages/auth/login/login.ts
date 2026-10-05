import { IUser } from '../../../types/IUser';

// Atrapamos el formulario (como es el único form en tu HTML, lo buscamos directo)
const formLogin = document.querySelector('form') as HTMLFormElement;

formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que la página recargue

    // 1. Capturamos los datos que escribió la persona
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    // 2. Traemos la lista de usuarios desde el localStorage
    const usuariosGuardados = localStorage.getItem('users');
    const listaUsuarios: IUser[] = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    // 3. Buscamos si existe un usuario que coincida EXACTAMENTE en email y contraseña
    const usuarioEncontrado = listaUsuarios.find(
        (usuario) => usuario.email === emailInput && usuario.contrasena === passwordInput
    );

    // 4. Verificamos el resultado
    if (usuarioEncontrado) {
        alert(`¡Bienvenido de vuelta, ${usuarioEncontrado.nombre}!`);
        
        // Guardamos quién es el usuario que acaba de iniciar sesión
        localStorage.setItem('userData', JSON.stringify(usuarioEncontrado));
        
        // Lo mandamos al inicio de la tienda (ajustamos la ruta con los saltos)
        window.location.href = '../../../../index.html';
    } else {
        alert('Email o contraseña incorrectos. Por favor, intentá de nuevo.');
    }
});