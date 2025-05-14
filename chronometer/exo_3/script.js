// Fait clignoter le message dans le DOM toutes les 500 ms
const blinkElement = document.getElementById("blink");
let isVisible = true;
const blinkId = setInterval(() => {
    blinkElement.style.visibility = isVisible ? "visible" : "hidden";
    isVisible = !isVisible;
}, 500);
