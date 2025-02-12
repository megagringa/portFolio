class ThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.init();
    }
    init() {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.loadTheme();
    }
    toggleTheme() {
        if (this.body.classList.contains('dark-theme')) {
            this.setTheme('light', 'Oscuro');
        } else {
            this.setTheme('dark', 'Claro');
        }
    }
    setTheme(theme, buttonText) {
        this.body.classList.toggle('dark-theme', theme === 'dark');
        this.themeToggle.textContent = buttonText;
        document.cookie = `theme=${theme}; path=/`;
    }
    loadTheme() {
        const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
        if (themeCookie) {
            const theme = themeCookie.split('=')[1];
            this.setTheme(theme, theme === 'dark' ? 'Claro' : 'Oscuro');
        }
    }
}
new ThemeToggle();