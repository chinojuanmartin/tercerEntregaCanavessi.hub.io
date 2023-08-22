
const productos = [
    {
        id: 1,
        producto: "anillo de plata",
        categoria: "anillos",
        precio: 13.000,
        marca: "Chicana",
        imagen: "Anillo1.jpg",
        descripcion: "Anillo tipo sello, texturado",
    },
    {
        id: 2,
        producto: "anillo de plata y cobre",
        categoria: "anillos",
        precio: 12.400,
        marca: "Chicana",
        imagen: "Anillo2.jpg",
        descripcion: "Anillo círculo pasante, texturado",
    },
    {
        id: 3,
        producto: "pulsera y piedra",
        categoria: "pulseras",
        precio: 15200,
        marca: "Chicana",
        imagen: "Pulsera1.jpg",
        descripcion: "Pulsera texturada con piedra",
      },
      {
        id: 4,
        producto: "pulsera de plata",
        categoria: "pulsera",
        precio: 14100,
        marca: "Chicana",
        imagen: "Pulsera2.jpg",
        descripcion: "Pulsera de plata con técnica de martilleo",
      },
      {
        id: 5,
        producto: "colgante de plata geo",
        categoria: "colgantes",
        precio: 17200,
        marca: "Chicana",
        imagen: "Colgante1.jpg",
        descripcion: "Colgante de plata triangular con cadena",
      },
      {
        id: 6,
        producto: "colgante de plata",
        categoria: "colgantes",
        precio: 15400,
        marca: "Chicana",
        imagen: "Colgante2.jpg",
        descripcion: "Colgante simple de plata con cadena",
      },
    ];


function generarTarjetas(productos, categoria) {
   
    const contenedor = document.querySelector(`#${categoria}`);
    
   
    if (!contenedor) {
        console.error(`No se encontró el contenedor para la categoría "${categoria}".`);
        return;
    }

   
    const tarjetasHTML = productos.map((producto) => {
        return `
        <div>
            <img src="./img/${producto.imagen}" alt="${producto.producto}" class="joyeriaImg">
            <p>${producto.producto}</p>
            <p>${producto.marca}</p>
            <p>${producto.precio.toFixed(2)}$</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        </div>`;
    });

   
    contenedor.innerHTML = tarjetasHTML.join('');
}


generarTarjetas(productos.filter(producto => producto.categoria === 'anillos'), 'anillos');
generarTarjetas(productos.filter(producto => producto.categoria === 'pulseras'), 'pulseras');
generarTarjetas(productos.filter(producto => producto.categoria === 'colgantes'), 'colgantes');


function agregarAlCarrito(idProducto) {
}
