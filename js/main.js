// Función para mostrar notificaciones
function showNotification(message) {
    // Eliminar notificaciones existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Eliminar notificación después de 3 segundos
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Agregar event listeners a todos los elementos con clase nav-item (menú de navegación)
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function (e) {
        const itemName = this.getAttribute('data-nav') || this.textContent.trim();
        showNotification(`"${itemName}" - Botón inactivo, la funcionalidad se agregará próximamente`);
    });
});

// Agregar event listeners a todos los elementos con clase action-button
const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation();
        const buttonName = this.getAttribute('data-btn') || this.textContent.trim();
        showNotification(`"${buttonName}" - Botón inactivo, la funcionalidad se agregará próximamente`);
    });
});

// Efecto de scroll para la barra de navegación (opcional)
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.backgroundColor = 'rgba(22, 19, 17, 0.9)';
    } else {
        nav.style.backdropFilter = 'blur(8px)';
        nav.style.backgroundColor = 'rgba(22, 19, 17, 0.7)';
    }

    lastScroll = currentScroll;
});

// Validación básica para el formulario de reservas
const reserveButton = document.querySelector('[data-btn="Reservar Ahora"]');
if (reserveButton) {
    reserveButton.addEventListener('click', function () {
        const fechaInput = document.querySelector('input[placeholder="Fecha y Hora"]');
        const comensalesInput = document.querySelector('input[placeholder="Comensales"]');

        if (fechaInput && fechaInput.value.trim() === '') {
            showNotification('Por favor, ingresa una fecha y hora para tu reserva');
            return;
        }

        if (comensalesInput && (comensalesInput.value.trim() === '' || parseInt(comensalesInput.value) <= 0)) {
            showNotification('Por favor, ingresa un número válido de comensales');
            return;
        }

        // Si los campos están llenos, mostrar mensaje de inactividad
        showNotification('Sistema de reservas en desarrollo - Próximamente disponible');
    });
}

// Agregar efecto de hover en las tarjetas de platos (opcional)
const dishCards = document.querySelectorAll('.group');
dishCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        const imageDiv = this.querySelector('[class*="bg-cover-center"]');
        if (imageDiv) {
            imageDiv.style.transform = 'scale(1.05)';
            imageDiv.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', function () {
        const imageDiv = this.querySelector('[class*="bg-cover-center"]');
        if (imageDiv) {
            imageDiv.style.transform = 'scale(1)';
        }
    });
});