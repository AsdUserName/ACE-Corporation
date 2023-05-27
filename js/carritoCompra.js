// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'BICICLETA POLYGON TRID ZZ',
        precio: 999990,
        imagen: 'img/TridZZ.jpg',
        marca: 'Apple',
        modelo: ' 1'
    },
    {
        id: 2,
        nombre: 'BICICLETA POLYGON CASCADE 3',
        precio: 199000,
        imagen: 'img/Cascade3.jpg',
        marca: 'Apple',
        modelo: ' 2'
    },
    {
        id: 3,
        nombre: 'BICICLETA POLYGON SISKIU D7',
        precio: 1499000,
        imagen: 'img/PolygonD7.jpg',
        marca: 'Apple',
        modelo: ' 3'
    },
    {
        id: 4,
        nombre: 'BICICLETA POLYGON XTRADA 5',
        precio: 666666,
        imagen: 'img/Xtrada5.jpg',
        marca: 'Apple',
        modelo: ' 4'
    }
    ,
    {
        id: 5,
        nombre: 'BICICLETA TREK MARLIN 6 2023',
        precio: 549900,
        imagen: 'img/Marlin6.jpg',
        marca: 'Apple',
        modelo: ' 5'
    }
    ,
    {
        id: 6,
        nombre: 'BICICLETA OXFORD MERAK 1',
        precio: 266990,
        imagen: 'img/merak1.png',
        marca: 'Apple',
        modelo: ' 6'
    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        
        // Contenedor de marca y modelo
        const miNodoMarcaModelo = document.createElement('div');
        miNodoMarcaModelo.classList.add('marca-modelo', 'row', 'col');
        
        // Marca
        const miNodoMarca = document.createElement('h6');
        miNodoMarca.classList.add('card-subtitle');
        miNodoMarca.textContent = info.marca;
        
        // Espacio
        const espacio = document.createElement('span');
        espacio.innerHTML = '&nbsp;';
        
        // Modelo
        const miNodoModelo = document.createElement('h6');
        miNodoModelo.classList.add('card-subtitle');
        miNodoModelo.textContent = info.modelo;
        
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'añadir 🛒';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        
        // Estructura los elementos
        miNodoMarcaModelo.appendChild(miNodoMarca);
        miNodoMarcaModelo.appendChild(espacio);
        miNodoMarcaModelo.appendChild(miNodoModelo);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoMarcaModelo);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}



/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();