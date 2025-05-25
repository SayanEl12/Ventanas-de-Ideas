console.log("Hola desde el frontend!")

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("mensaje");
    if (div) {
        div.textContent = "Este JS";
    }
});