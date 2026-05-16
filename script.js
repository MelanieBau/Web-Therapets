// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las cards
document.querySelectorAll('.feature-card, .credencial-card, .captura, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar con efecto al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '8px 0';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.padding = '0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});

// FORMULARIO DE CONTACTO
const form = document.getElementById('formContacto');
const successMsg = document.getElementById('formSuccess');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Recoger datos del formulario
        const datos = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
            mensaje: document.getElementById('mensaje').value
        };

        // De momento, mostramos un mensaje de éxito
        // En el futuro aquí conectarías con un backend o servicio como Formspree
        console.log('Mensaje enviado:', datos);

        // Mostrar mensaje de éxito
        successMsg.classList.add('visible');

        // Limpiar el formulario
        form.reset();

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            successMsg.classList.remove('visible');
        }, 5000);
    });
}