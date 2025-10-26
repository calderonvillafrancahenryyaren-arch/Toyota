function capturarDatos() {
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const email = document.getElementById('email').value;
    console.log("--- DATOS DEL FORMULARIO CAPTURADOS ---");
    console.log("Nombre:", nombre);
    console.log("Número:", numero);
    console.log("Email:", email);
    console.log("---------------------------------------");
    document.getElementById('formulario-contacto').reset();
}

const botonEnviar = document.getElementById('boton-enviar');

botonEnviar.addEventListener('click', capturarDatos);

const chatButton = document.getElementById('chat-toggle-button');
const chatWidget = document.getElementById('chat-widget');

function toggleChat() {

    chatWidget.classList.toggle('open');
    if (chatWidget.classList.contains('open')) {
        chatButton.textContent = 'O';
    } else {
        chatButton.textContent = 'O';

    }
}

chatButton.addEventListener('click', toggleChat);






