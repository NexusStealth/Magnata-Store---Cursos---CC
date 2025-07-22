// Funcionalidade de troca de tema
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Atualizar ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Menu hambúrguer
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevenir scroll do body quando menu estiver aberto
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });
    
    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });
    
    // Fechar menu ao redimensionar a tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });
    
    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Tema Claro';
    } else {
        themeToggle.textContent = 'Tema Escuro';
    }
    
    // Evento de clique para trocar tema
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            themeToggle.textContent = 'Tema Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Tema Claro';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de entrada para elementos quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animação aos elementos
    document.querySelectorAll('.course-section, .instructor-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efeito de digitação no título principal - CORRIGIDO
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        // Obtém texto do data-atributo
        const fullText = heroTitle.getAttribute('data-text'); 
        heroTitle.textContent = '';
        
        let charIndex = 0;
        
        function type() {
            if (charIndex < fullText.length) {
                heroTitle.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            }
        }
        
        setTimeout(type, 500);
    }
    
    // Efeito parallax otimizado
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Efeito de loading no botão de inscrição - CORRIGIDO
    const enrollBtn = document.getElementById('enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = this.textContent;
            this.textContent = 'Carregando...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                // Aqui você colocaria o redirecionamento real
                window.location.href = 'https://sua-pagina-de-pagamento.com';
            }, 1000);
        });
    }
    
    // Adicionar partículas flutuantes (apenas no tema escuro)
    function createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(96, 165, 250, 0.3);
                border-radius: 50%;
                animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
        
        // Adicionar CSS para animação das partículas
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        return particlesContainer;
    }
    
    let particlesContainer = null;
    
    // Controlar partículas baseado no tema
    function toggleParticles() {
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark && !particlesContainer) {
            particlesContainer = createFloatingParticles();
        } else if (!isDark && particlesContainer) {
            particlesContainer.remove();
            particlesContainer = null;
        }
    }
    
    // Inicializar partículas se tema escuro estiver ativo
    toggleParticles();
    
    // Atualizar partículas quando tema mudar
    themeToggle.addEventListener('click', function() {
        setTimeout(toggleParticles, 100);
    });
});
