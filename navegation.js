document.addEventListener('DOMContentLoaded', function() {
    var botonMenu = document.getElementById('boton-menu');
    var menuDesplegable = document.getElementById('menu-desplegable');

    // Mostrar u ocultar el menú desplegable al hacer clic en el botón
    botonMenu.addEventListener('click', function() {
        menuDesplegable.classList.toggle('mostrar');
    });

    // Desplazarse a la sección correspondiente al hacer clic en un enlace del menú
    menuDesplegable.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            var seccionId = event.target.getAttribute('href');
            var seccion = document.querySelector(seccionId);
            if (seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
                menuDesplegable.classList.remove('mostrar'); // Oculta el menú después de hacer clic en un enlace
            }
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        }
    });
});
