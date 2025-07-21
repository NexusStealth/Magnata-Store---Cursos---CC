// Sistema de tradução
const translations = {
    'pt-br': {
        // Navegação
        'nav-course': 'Curso',
        'nav-instructor': 'Instrutor',
        'nav-contact': 'Contato',
        'theme-light': 'Tema Claro',
        'theme-dark': 'Tema Escuro',
        
        // Hero Section
        'hero-title': 'Torne-se um Web Developer de Sucesso!',
        'hero-subtitle': 'Aprenda as tecnologias mais recentes e construa aplicações web incríveis com Ytallo Gabriel.',
        'btn-enroll': 'Inscrever-se Agora',
        'btn-loading': 'Carregando...',
        
        // Seção do Curso
        'course-title': 'Sobre o Curso',
        'course-description': 'Este curso abrangente de Web Developer com Ytallo Gabriel foi cuidadosamente projetado para transformar iniciantes em profissionais qualificados, prontos para o mercado de trabalho. Abordaremos desde os fundamentos do HTML, CSS e JavaScript até tópicos avançados como frameworks modernos, bancos de dados e implantação de aplicações. Com uma abordagem prática e projetos reais, você construirá um portfólio sólido e desenvolverá as habilidades necessárias para se destacar na área de desenvolvimento web.',
        'course-item-1': 'HTML5 e CSS3: Fundamentos e técnicas avançadas de estilização.',
        'course-item-2': 'JavaScript Moderno: Lógica de programação, manipulação do DOM e APIs.',
        'course-item-3': 'Frameworks e Bibliotecas: React, Angular ou Vue.js (a ser definido).',
        'course-item-4': 'Backend com Node.js e Express: Construção de APIs RESTful.',
        'course-item-5': 'Bancos de Dados: SQL e NoSQL (MongoDB, PostgreSQL).',
        'course-item-6': 'Controle de Versão: Git e GitHub.',
        'course-item-7': 'Implantação e Hospedagem: Coloque seus projetos online.',
        
        // Seção do Instrutor
        'instructor-title': 'Sobre o Instrutor: Ytallo Gabriel',
        'instructor-description': 'Ytallo Gabriel é um desenvolvedor web experiente com anos de atuação no mercado, especialista em tecnologias front-end e back-end. Com paixão por ensinar, Ytallo já ajudou centenas de alunos a iniciar suas carreiras na programação, compartilhando seu conhecimento de forma clara e didática. Sua metodologia foca na prática e na resolução de problemas reais, garantindo que você não apenas aprenda a teoria, mas também saiba aplicá-la.',
        
        // Footer
        'footer-copyright': '© 2025 Web Developer com Ytallo Gabriel. Todos os direitos reservados.',
        'footer-protection': 'Este site é protegido por direitos autorais e leis de propriedade intelectual.',
        'footer-payment': 'Aceitamos:',
        'footer-terms': 'Termos de Serviço | Política de Privacidade'
    },
    
    'en': {
        // Navigation
        'nav-course': 'Course',
        'nav-instructor': 'Instructor',
        'nav-contact': 'Contact',
        'theme-light': 'Light Theme',
        'theme-dark': 'Dark Theme',
        
        // Hero Section
        'hero-title': 'Become a Successful Web Developer!',
        'hero-subtitle': 'Learn the latest technologies and build amazing web applications with Ytallo Gabriel.',
        'btn-enroll': 'Enroll Now',
        'btn-loading': 'Loading...',
        
        // Course Section
        'course-title': 'About the Course',
        'course-description': 'This comprehensive Web Developer course with Ytallo Gabriel has been carefully designed to transform beginners into qualified professionals, ready for the job market. We will cover everything from HTML, CSS and JavaScript fundamentals to advanced topics like modern frameworks, databases and application deployment. With a practical approach and real projects, you will build a solid portfolio and develop the skills needed to excel in web development.',
        'course-item-1': 'HTML5 and CSS3: Fundamentals and advanced styling techniques.',
        'course-item-2': 'Modern JavaScript: Programming logic, DOM manipulation and APIs.',
        'course-item-3': 'Frameworks and Libraries: React, Angular or Vue.js (to be defined).',
        'course-item-4': 'Backend with Node.js and Express: Building RESTful APIs.',
        'course-item-5': 'Databases: SQL and NoSQL (MongoDB, PostgreSQL).',
        'course-item-6': 'Version Control: Git and GitHub.',
        'course-item-7': 'Deployment and Hosting: Put your projects online.',
        
        // Instructor Section
        'instructor-title': 'About the Instructor: Ytallo Gabriel',
        'instructor-description': 'Ytallo Gabriel is an experienced web developer with years of market experience, specialist in front-end and back-end technologies. With a passion for teaching, Ytallo has already helped hundreds of students start their programming careers, sharing his knowledge in a clear and didactic way. His methodology focuses on practice and solving real problems, ensuring that you not only learn the theory, but also know how to apply it.',
        
        // Footer
        'footer-copyright': '© 2025 Web Developer with Ytallo Gabriel. All rights reserved.',
        'footer-protection': 'This site is protected by copyright and intellectual property laws.',
        'footer-payment': 'We accept:',
        'footer-terms': 'Terms of Service | Privacy Policy'
    }
};

// Função para aplicar tradução
function applyTranslation(language) {
    const translation = translations[language];
    
    if (!translation) return;
    
    // Atualizar elementos com data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Atualizar elementos específicos
    const elementsToUpdate = {
        '.nav-links a[href="#course"]': 'nav-course',
        '.nav-links a[href="#instructor"]': 'nav-instructor',
        '.nav-links a[href="#contact"]': 'nav-contact',
        '.hero-content h2': 'hero-title',
        '.hero-content p': 'hero-subtitle',
        '.btn-enroll': 'btn-enroll',
        '.course-section h3': 'course-title',
        '.course-section p': 'course-description',
        '.instructor-section h3': 'instructor-title',
        '.instructor-section p': 'instructor-description',
        '.footer-content p:first-child': 'footer-copyright',
        '.footer-content p:nth-child(2)': 'footer-protection',
        '.payment-methods h4': 'footer-payment',
        '.footer-content p:last-child': 'footer-terms'
    };
    
    Object.entries(elementsToUpdate).forEach(([selector, key]) => {
        const element = document.querySelector(selector);
        if (element && translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Atualizar itens da lista do curso
    const courseItems = document.querySelectorAll('.course-section li');
    courseItems.forEach((item, index) => {
        const key = `course-item-${index + 1}`;
        if (translation[key]) {
            item.textContent = translation[key];
        }
    });
    
    // Atualizar botão de tema
    const themeButton = document.getElementById('theme-toggle');
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (themeButton) {
        themeButton.textContent = isDark ? translation['theme-light'] : translation['theme-dark'];
    }
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = language;
    
    // Salvar idioma no localStorage
    localStorage.setItem('language', language);
}

// Inicializar sistema de idiomas
document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.getElementById('language-switcher');
    
    // Carregar idioma salvo ou usar padrão
    const savedLanguage = localStorage.getItem('language') || 'pt-br';
    languageSwitcher.value = savedLanguage;
    applyTranslation(savedLanguage);
    
    // Evento de mudança de idioma
    languageSwitcher.addEventListener('change', function() {
        const selectedLanguage = this.value;
        applyTranslation(selectedLanguage);
        
        // Recriar efeito de digitação no título
        const heroTitle = document.querySelector('.hero-content h2');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            setTimeout(typeWriter, 100);
        }
    });
    
    // Atualizar texto do botão de tema quando o tema mudar
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTimeout(() => {
                const currentLanguage = languageSwitcher.value;
                const translation = translations[currentLanguage];
                const isDark = document.body.getAttribute('data-theme') === 'dark';
                
                if (translation) {
                    this.textContent = isDark ? translation['theme-light'] : translation['theme-dark'];
                }
            }, 100);
        });
    }
});

