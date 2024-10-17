// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  // Alternar la clase 'show' al hacer clic en el botón de menú
  menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
  });

  // Ocultar el menú al hacer clic fuera de él
  document.addEventListener("click", function (event) {
      // Verificar si el menú está visible y si el clic fue fuera del menú y del botón
      if (navMenu.classList.contains("show") && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          navMenu.classList.remove("show"); // Ocultar el menú
      }
  });
});
