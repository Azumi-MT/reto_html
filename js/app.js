// 1. Prueba de conexión
console.log("app.js conectado");

// 3. Saludo según la hora
const hora = new Date().getHours();
let saludo = "Buenas noches";
if (hora >= 5 && hora < 12) {
    saludo = "Buenos días";
} else if (hora >= 12 && hora < 19) {
    saludo = "Buenas tardes";
}
const mensaje = `${saludo}, gracias por tu visita`;
document.querySelector("#saludo").textContent = mensaje;

// 4. Modo oscuro
const botonTema = document.querySelector("#boton-tema");
botonTema.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        botonTema.textContent = "Modo claro";
    } else {
        botonTema.textContent = "Modo oscuro";
    }
});

// 5. Botón Leer más / Leer menos
const botonLeerMas = document.querySelector("#leer-mas");
const parrafoExtra = document.querySelector(".extra");

botonLeerMas.addEventListener("click", function () {
    parrafoExtra.classList.toggle("oculto");
    if (parrafoExtra.classList.contains("oculto")) {
        botonLeerMas.textContent = "Leer más";
    } else {
        botonLeerMas.textContent = "Leer menos";
    }
});

// 6. Servicios dinámicos
const servicios = [
    {
        titulo: "Diseño web",
        texto: "Creación de páginas web sencillas utilizando HTML y CSS."
    },
    {
        titulo: "Desarrollo web",
        texto: "Organización de contenido y personalización de sitios web."
    },
    {
        titulo: "Programación básica",
        texto: "Desarrollo de pequeños programas utilizando Python."
    }
];

function crearServicio(servicio) {
    return `
        <article class="mini-tarjeta">
            <h3>${servicio.titulo}</h3>
            <p>${servicio.texto}</p>
        </article>
    `;
}

const listaServicios = document.querySelector("#servicios-lista");
for (const servicio of servicios) {
    listaServicios.innerHTML += crearServicio(servicio);
}