function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const phone = document.getElementById('phone').value;
    const companySize = document.getElementById('company_size').value;
    const wasteVolume = document.getElementById('waste_volume').value;
    const message = document.getElementById('message').value;

    // Crear mensaje para WhatsApp
    const whatsappMessage = `*Nueva Solicitud de Demo*%0A%0A` +
        `*Nombre:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Empresa:* ${company}%0A` +
        `*Teléfono:* ${phone}%0A` +
        `*Tamaño de la empresa:* ${companySize}%0A` +
        `*Volumen de residuos:* ${wasteVolume}%0A` +
        `*Mensaje:* ${message}`;
    
    // Crear enlace de WhatsApp
    const whatsappLink = `https://wa.me/5491150085086?text=${whatsappMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappLink, '_blank');

    // Mostrar popup
    showPopup();
    
    // Limpiar el formulario
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