// Gestione Menu a tendina Mobile (Hamburger)
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Generatore automatico petali di Sakura (Ciliegio) Lenti e Delicati
function initSakuraRain() {
    const container = document.getElementById('sakuraContainer');
    if (!container) return;

    container.innerHTML = '';
    const count = 12; // Pochi petali per un effetto rarefatto e poetico

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        // Dimensioni delicate (tra 10px e 16px)
        const size = Math.random() * 6 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.3}px`;

        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.top = `${Math.random() * 100}vh`;

        // Caduta molto lenta e rilassante (tra 12 e 20 secondi)
        const fallDuration = Math.random() * 8 + 12; 
        // Oscillazione laterale dolce (tra 4 e 7 secondi)
        const swayDuration = Math.random() * 3 + 4; 

        petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
        petal.style.animationDelay = `-${Math.random() * fallDuration}s, -${Math.random() * swayDuration}s`;
        petal.style.opacity = Math.random() * 0.4 + 0.4;

        container.appendChild(petal);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSakuraRain);
} else {
    initSakuraRain();
}