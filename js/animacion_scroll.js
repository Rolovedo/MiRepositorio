// Implementación de animaciones de scroll similar a PrimeNG
class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Crear el Intersection Observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateEntry(entry.target);
                } else {
                    this.animateLeave(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observar todos los elementos con animación
        this.observeElements();
    }

    observeElements() {
        const animatedElements = document.querySelectorAll('[data-animate-on-scroll]');
        animatedElements.forEach(element => {
            this.observer.observe(element);
            // Aplicar estado inicial
            element.classList.add('animate-initial');
        });
    }

    animateEntry(element) {
        const enterClass = element.getAttribute('data-enter-class');
        const leaveClass = element.getAttribute('data-leave-class');
        
        if (enterClass) {
            element.classList.remove('animate-initial');
            if (leaveClass) {
                element.classList.remove(...leaveClass.split(' '));
            }
            element.classList.add(...enterClass.split(' '));
        }
    }

    animateLeave(element) {
        const enterClass = element.getAttribute('data-enter-class');
        const leaveClass = element.getAttribute('data-leave-class');
        
        if (leaveClass) {
            if (enterClass) {
                element.classList.remove(...enterClass.split(' '));
            }
            element.classList.add(...leaveClass.split(' '));
        }
    }
}

// Inicializar las animaciones cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});