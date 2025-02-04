// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let listaAmigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const btnAgregar = document.getElementById("btnAgregar");
const listaAmigosUI = document.getElementById("listaAmigos");
const btnSortear = document.getElementById("btnSortear");
const resultadoUI = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    listaAmigosUI.innerHTML = "";
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un nombre si el usuario se equivoca
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-delete");
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        listaAmigosUI.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos nombres para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    resultadoUI.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
}

// Event listeners para los botones
btnAgregar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);

// Permitir agregar nombres con la tecla "Enter"
inputAmigo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        agregarAmigo();
    }
});
