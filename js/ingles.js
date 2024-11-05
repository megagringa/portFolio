document.addEventListener('DOMContentLoaded', function() {
    let isEnglish = false; // Estado inicial (español)

    // Traducciones
    const translations = {
        "Sobre Mí": "About Me",
        "Hola, soy Juan Pablo López, un apasionado desarrollador web con experiencia en tecnologías Full Stack.": "Hello, I'm Juan Pablo López, a passionate web developer with experience in Full Stack technologies.",
        "Estoy trabajando en proyectos, desde aplicaciones web hasta sitios interactivos.": "I'm working on projects, from web applications to interactive sites.",
        "Busco oportunidades para aprender y mejorar mis habilidades en el mundo del desarrollo.": "I'm looking for opportunities to learn and improve my skills in the world of development.",
        "Ahora mismo estoy en busca de mi primer trabajo IT.": "Right now, I'm seeking my first job in IT.",
    };

    // Cambiar el idioma
    document.getElementById('language-toggle').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const elements = document.querySelectorAll('.translatable'); // Selecciona todos los elementos relevantes
        elements.forEach((element) => {
            const originalText = element.innerText; // Obtiene el texto original del elemento
            if (!isEnglish) {
                // Cambia a inglés
                if (translations[originalText]) {
                    element.innerText = translations[originalText]; // Traduce al inglés
                }
            } else {
                // Cambia a español
                const spanishTranslation = Object.keys(translations).find(key => translations[key] === originalText);
                if (spanishTranslation) {
                    element.innerText = spanishTranslation; // Traduce al español
                }
            }
        });

        // Cambia el estado y el texto del enlace
        isEnglish = !isEnglish; // Cambia el estado
        document.getElementById('language-toggle').innerText = isEnglish ? "ESPAÑOL" : "INGLES"; // Actualiza el texto del enlace
    });
});