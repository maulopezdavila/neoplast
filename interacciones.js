// Hacer que las tarjetas sean interactivas al pasar el mouse
const todasLasTarjetas = document.querySelectorAll('.tarjeta-impacto, .tarjeta-habilidad, .tarjeta-equipo');

todasLasTarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-10px)';
    });

    tarjeta.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Efecto de ripple en los botones
const todosLosBotones = document.querySelectorAll('.boton, .boton-contacto');

todosLosBotones.forEach(function(boton) {
    boton.addEventListener('click', function(evento) {
        const x = evento.clientX - boton.offsetLeft;
        const y = evento.clientY - boton.offsetTop;

        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(function() {
            ripple.remove();
        }, 600);
    });
});

// Scroll suave mejorado para los enlaces
const enlacesConScroll = document.querySelectorAll('a[href^="#"]');

enlacesConScroll.forEach(function(enlace) {
    enlace.addEventListener('click', function(evento) {
        evento.preventDefault();
        const destino = this.getAttribute('href');

        if (destino === '#') return;

        const elementoDestino = document.querySelector(destino);

        if (elementoDestino) {
            const posicion = elementoDestino.offsetTop - 80;

            window.scrollTo({
                top: posicion,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de escritura en el título principal
const tituloPrincipal = document.querySelector('.titulo-principal');
if (tituloPrincipal) {
    const textoOriginal = tituloPrincipal.textContent;
    tituloPrincipal.textContent = '';
    let indice = 0;

    function escribir() {
        if (indice < textoOriginal.length) {
            tituloPrincipal.textContent += textoOriginal.charAt(indice);
            indice++;
            setTimeout(escribir, 30);
        }
    }

    setTimeout(escribir, 500);
}

// Cambiar el color de fondo de las tarjetas al hacer clic
const tarjetasImpacto = document.querySelectorAll('.tarjeta-impacto');

tarjetasImpacto.forEach(function(tarjeta) {
    let seleccionada = false;

    tarjeta.addEventListener('click', function() {
        if (!seleccionada) {
            this.style.backgroundColor = '#f0f9ff';
            this.style.borderColor = '#98befa';
            seleccionada = true;
        } else {
            this.style.backgroundColor = 'white';
            this.style.borderColor = '#e5e7eb';
            seleccionada = false;
        }
    });
});

// Detectar cuando el usuario está cerca del final de la página
window.addEventListener('scroll', function() {
    const alturaDocumento = document.documentElement.scrollHeight;
    const alturaVentana = window.innerHeight;
    const scrollActual = window.scrollY;

    if (scrollActual + alturaVentana >= alturaDocumento - 100) {
        console.log('¡Usuario llegó al final de la página!');
    }
});

// Agregar efecto de hover a los iconos de Material Symbols
const iconos = document.querySelectorAll('.material-symbols-outlined');

iconos.forEach(function(icono) {
    icono.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(360deg) scale(1.2)';
        this.style.transition = 'transform 0.5s ease';
    });

    icono.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });
});
