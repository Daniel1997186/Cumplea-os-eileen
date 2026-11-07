
const botonInicio = document.getElementById("botonInicio");
const sorpresa = document.getElementById("sorpresa");
const musica = document.getElementById("musicaCumpleanos");

botonInicio.addEventListener("click", () => {

    sorpresa.classList.remove("oculto");

    botonInicio.textContent = "¡Disfruta tu día, Eileen! 💗";

    musica.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });

});
