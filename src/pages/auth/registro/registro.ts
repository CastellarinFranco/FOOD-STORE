import { IUser } from '../../../types/IUser';

const formRegistro = document.getElementById('form-registro') as HTMLFormElement;

formRegistro.addEventListener('submit', (evento) => {
    // Evita que la página se recargue al tocar el botón
    evento.preventDefault();

    // 1. Capturamos los valores de los inputs
    const nombreInput = document.getElementById('nombre') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (passwordInput.value.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return; // El return hace que el código frene acá y no siga leyendo hacia abajo
    }

    // 2. Creamos el objeto usuario (forzando el rol 'client' como pide el TP)
    const nuevoUsuario: IUser = {
        id: crypto.randomUUID(), // Genera un ID único automático
        nombre: nombreInput.value,
        email: emailInput.value,
        contrasena: passwordInput.value,
        rol: 'client'
    };

    // 3. Buscamos si ya hay usuarios guardados en localStorage bajo la clave "users"
    const usuariosGuardados = localStorage.getItem('users');
    
    // Si hay usuarios, los convertimos a array. Si no hay nada, creamos un array vacío []
    const listaUsuarios: IUser[] = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    // 4. Agregamos el usuario nuevo al array
    listaUsuarios.push(nuevoUsuario);

    // 5. Guardamos el array actualizado en localStorage (convertido a texto)
    localStorage.setItem('users', JSON.stringify(listaUsuarios));

    alert('¡Cuenta creada con éxito!');
    
    // Limpiamos el formulario
    formRegistro.reset();

    //Lo mandamos automáticamente al Login
    setTimeout(() => {
        window.location.assign('/src/pages/auth/login/login.html');
    }, 100);
});