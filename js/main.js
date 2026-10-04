// A. Función para Renderizar (dibujar) las Categorías
const cargarCategorias = () => {
    // 1. Seleccionamos el contenedor HTML vacío
    const contenedor = document.getElementById("lista-categorias");

    // 2. Recorremos el array de categorías usando un bucle
    categorias.forEach(categoria => {
        // 3. Armamos el HTML de cada ítem usando Template Strings
        const itemHTML = `<li><a href="#">${categoria}</a></li>`;
        
        // 4. Inyectamos el ítem adentro del contenedor
        contenedor.innerHTML += itemHTML;
    });
};

// Ejecutamos la función para que empiece a trabajar
cargarCategorias();

// B. Función para Renderizar (dibujar) los Productos
const cargarProductos = () => {
    // 1. Seleccionamos el contenedor de los productos
    const contenedorProductos = document.getElementById("contenedor-productos");

    // 2. Recorremos el array de objetos "productos"
    productos.forEach(producto => {
        // 3. Armamos la tarjeta HTML inyectando las propiedades del objeto
        const productoHTML = `
            <article>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: <strong>$${producto.precio}</strong></p>
                <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar</button>
            </article>
        `;
        
        // 4. Inyectamos la tarjeta en la caja principal
        contenedorProductos.innerHTML += productoHTML;
    });

    
};

// Función para el botón Agregar
const agregarAlCarrito = (nombreDelProducto) => {
    alert(`¡Agregaste "${nombreDelProducto}" a tu pedido!`);
};


// Ejecutamos la función para que dibuje los productos
cargarProductos();