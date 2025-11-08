// Manejo del menú de navegación móvil
const botonMenuMovil = document.getElementById('boton-menu-movil');
const navegacion = document.getElementById('navegacion');
const menuPrincipal = document.getElementById('menu-principal');

// Abrir y cerrar el menú móvil
botonMenuMovil.addEventListener('click', function() {
    botonMenuMovil.classList.toggle('activo');
    navegacion.classList.toggle('activo');
});

// Cerrar el menú cuando se hace clic en un enlace
const enlacesNavegacion = navegacion.querySelectorAll('a');
enlacesNavegacion.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        botonMenuMovil.classList.remove('activo');
        navegacion.classList.remove('activo');
    });
});

// Efecto de sombra en el menú al hacer scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        menuPrincipal.classList.add('scroll');
    } else {
        menuPrincipal.classList.remove('scroll');
    }
});

// Resaltar el enlace activo según la sección visible
window.addEventListener('scroll', function() {
    const secciones = document.querySelectorAll('section[id]');
    const scrollActual = window.scrollY + 100;

    secciones.forEach(function(seccion) {
        const alturaSeccion = seccion.offsetHeight;
        const posicionSeccion = seccion.offsetTop;
        const idSeccion = seccion.getAttribute('id');
        const enlaceActivo = document.querySelector('.navegacion a[href="#' + idSeccion + '"]');

        if (scrollActual >= posicionSeccion && scrollActual < posicionSeccion + alturaSeccion) {
            enlacesNavegacion.forEach(function(enlace) {
                enlace.classList.remove('activo');
            });
            if (enlaceActivo) {
                enlaceActivo.classList.add('activo');
            }
        }
    });
});
