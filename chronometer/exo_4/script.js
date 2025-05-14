// Affiche l'heure actuelle en temps réel dans le DOM
const clockElement = document.getElementById("clock");
setInterval(() => {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}, 1000);
