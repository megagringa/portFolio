class ThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.init();
    }

    init() {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        if (this.body.classList.contains('dark-theme')) {
            this.body.classList.remove('dark-theme');
            this.themeToggle.textContent = 'Oscuro';
        } else {
            this.body.classList.add('dark-theme');
            this.themeToggle.textContent = 'Claro';
        }
    }
}

new ThemeToggle();