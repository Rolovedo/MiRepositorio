// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Cargar tema guardado al iniciar
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const lightRadio = document.getElementById('theme-light');
    const darkRadio = document.getElementById('theme-dark');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkRadio.checked = true;
    } else {
        document.body.removeAttribute('data-theme');
        lightRadio.checked = true;
    }
});
