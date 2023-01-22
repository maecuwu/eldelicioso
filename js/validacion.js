const email = document.getElementById("email");
const boton = document.querySelector("#aboutus_form_button");
const formulario = document.querySelector("#formulario");

boton.addEventListener("click", validar);
formulario.addEventListener("submit", enviar);

function validar() {
    const mensaje = document.createElement("p");
    mensaje.classList.add("fs-4", "text-center", "text-danger", "mensaje");
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "10px";
    if (email.value.length > 0) {
        const expresion = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (expresion.test(String(email.value).toLowerCase()) == true) {
            formulario.submit();
        } else {
            mensaje.textContent = "El email debe ser correcto";
        }
    } else {
        mensaje.textContent = "Debes insertar tu email";
    }
    // meter el mensaje y borrarlo al tiempo
    if (document.querySelectorAll(".mensaje").length == 0) {
        document.querySelector("#formulario").appendChild(mensaje);
        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }
}

function enviar(x) {
    x.preventDefault();
}