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

// Gestione form Booking & Collab -> Reindirizzamento ai DM di Instagram
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('bookerName').value;
        const contact = document.getElementById('contactInfo').value;
        const message = document.getElementById('bookerMessage').value;
        
        alert(`Grazie ${name}! La tua richiesta è pronta. Verrai reindirizzato al profilo Instagram di WhisMi Sound per inviarla via DM.`);
        window.open('https://www.instagram.com/whismi_sound/', '_blank');
        bookingForm.reset();
    });
}

// Generatore petali di Sakura (Ciliegio) rarefatti, lenti e naturali
function initSakuraRain() {
    const container = document.getElementById('sakuraContainer');
    if (!container) return;

    container.innerHTML = '';
    const count = 10;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        const size = Math.random() * 6 + 9;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.3}px`;

        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.top = `${Math.random() * 100}vh`;

        const fallDuration = Math.random() * 8 + 14; 
        const swayDuration = Math.random() * 4 + 4; 

        petal.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
        petal.style.animationDelay = `-${Math.random() * fallDuration}s, -${Math.random() * swayDuration}s`;
        petal.style.opacity = Math.random() * 0.3 + 0.3;

        container.appendChild(petal);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSakuraRain);
} else {
    initSakuraRain();
}

// Gestione Musica di Sottofondo & Soundwave Button
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

if (bgMusic && musicToggle) {
    bgMusic.volume = 0.20; // Volume basso preimpostato

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicToggle.classList.add('playing');
            }).catch(e => {
                console.log("Riproduzione audio bloccata o errore file:", e);
                alert("Impossibile riprodurre l'audio. Assicurati che il file 'staywithme.mp3' sia caricato correttamente nella cartella 'gallery'.");
            });
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
}
