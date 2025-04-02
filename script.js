// Función para manejar el envío del formulario de contacto
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const companySize = document.getElementById('company_size').value;
    const wasteVolume = document.getElementById('waste_volume').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `*Nueva Solicitud de Demo*%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Empresa:* ${company}%0A` +
        `*Teléfono:* ${phone}%0A` +
        `*Tamaño de la empresa:* ${companySize}%0A` +
        `*Volumen de residuos:* ${wasteVolume}%0A` +
        `*Mensaje:* ${message}`;
    
    const whatsappLink = `https://wa.me/5491150085086?text=${whatsappMessage}`;
    
    window.open(whatsappLink, '_blank');

    showPopup();
    
    document.getElementById('contactForm').reset();
}

function showPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
}

// Función debounce para limitar la ejecución de eventos frecuentes (como scroll)
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout); 
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const menu = document.querySelector('.nav-menu');
const button = document.querySelector('.menu-toggle');
const ctaButton = document.querySelector('.nav-menu .cta-button');

// Función para abrir/cerrar el menú hamburguesa
function toggleMenu() {
    menu.classList.toggle('active');
}

// Cierra el menú si se hace clic fuera de él o del botón hamburguesa
document.addEventListener('click', (e) => {
    // Verifica si el clic no está dentro del menú, del botón hamburguesa ni del CTA
    if (!menu.contains(e.target) && !button.contains(e.target) && !ctaButton.contains(e.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Cierra el menú al hacer scroll, con un debounce de 50ms para optimizar rendimiento
window.addEventListener('scroll', debounce(() => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}, 50));

// Maneja el clic en el botón "Contactar" del header
ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(ctaButton.href, '_blank');
});