

const botonInicio = document.getElementById("botonInicio");
const sorpresa = document.getElementById("sorpresa");
const musica = document.getElementById("musicaCumpleanos");

botonInicio.addEventListener("click", () => {

    sorpresa.classList.remove("oculto");

    botonInicio.textContent = "¡Feliz cumpleaños, Eileen! 💗";

    musica.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });

    // Explosión de confeti
    const elementos = ["🎉", "✨", "💗", "🌸", "🎊", "⭐"];

    for (let i = 0; i < 80; i++) {
        const confeti = document.createElement("span");

        confeti.classList.add("confeti");
        confeti.textContent =
            elementos[Math.floor(Math.random() * elementos.length)];

        confeti.style.left = Math.random() * 100 + "vw";
        confeti.style.fontSize = (15 + Math.random() * 20) + "px";
        confeti.style.animationDelay = Math.random() * 1.5 + "s";

        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 4500);
    }

});
