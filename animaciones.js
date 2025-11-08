// Observador para animar elementos cuando aparecen en pantalla
const observador = new IntersectionObserver(function(elementos) {
    elementos.forEach(function(elemento) {
        if (elemento.isIntersecting) {
            elemento.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Animar las tarjetas de características
const tarjetasCaracteristica = document.querySelectorAll('.tarjeta-caracteristica');
tarjetasCaracteristica.forEach(function(tarjeta) {
    observador.observe(tarjeta);
});

// Animar las tarjetas de impacto
const tarjetasImpacto = document.querySelectorAll('.tarjeta-impacto');
tarjetasImpacto.forEach(function(tarjeta, indice) {
    tarjeta.style.transitionDelay = indice * 0.1 + 's';
    observador.observe(tarjeta);
});

// Animar las tarjetas de habilidad
const tarjetasHabilidad = document.querySelectorAll('.tarjeta-habilidad');
tarjetasHabilidad.forEach(function(tarjeta, indice) {
    tarjeta.style.transitionDelay = indice * 0.1 + 's';
    observador.observe(tarjeta);
});

// Animar las tarjetas de equipo
const tarjetasEquipo = document.querySelectorAll('.tarjeta-equipo');
tarjetasEquipo.forEach(function(tarjeta, indice) {
    tarjeta.style.transitionDelay = indice * 0.2 + 's';
    observador.observe(tarjeta);
});

// Animación de contador para números (si quisieras agregar estadísticas)
function animarNumero(elemento, numeroFinal, duracion) {
    const inicio = 0;
    const incremento = numeroFinal / (duracion / 16);
    let numeroActual = inicio;

    const temporizador = setInterval(function() {
        numeroActual += incremento;
        if (numeroActual >= numeroFinal) {
            elemento.textContent = numeroFinal;
            clearInterval(temporizador);
        } else {
            elemento.textContent = Math.floor(numeroActual);
        }
    }, 16);
}

// Efecto parallax suave en el hero
window.addEventListener('scroll', function() {
    const scrollActual = window.scrollY;
    const circulosAnimados = document.querySelectorAll('.circulo-animado');

    circulosAnimados.forEach(function(circulo, indice) {
        const velocidad = (indice + 1) * 0.5;
        circulo.style.transform = 'translateY(' + scrollActual * velocidad + 'px)';
    });
});
