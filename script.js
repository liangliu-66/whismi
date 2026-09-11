// Gestione interazione Player Audio
const trackItems = document.querySelectorAll('.track-item');

trackItems.forEach(item => {
    item.addEventListener('click', () => {
        // Rimuove la classe active da tutti i brani
        trackItems.forEach(t => t.classList.remove('active'));
        
        // Aggiunge la classe active al brano cliccato
        item.classList.add('active');
        
        // Estrae il nome o il tipo di traccia
        const trackName = item.querySelector('h4').innerText;
        alert(`Collegamento stabilito: Riproduzione in corso di "${trackName}"`);
    });
});

// Gestione tasti Ticket dei Live
const ticketButtons = document.querySelectorAll('.ticket-btn');

ticketButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Richiesta d’accesso al Neo-Tokyo stage registrata!');
    });
});

// Gestione invio form di Booking
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Trasmissione cifrata inviata con successo ai WhisMi Sound! Ti ricontatteranno presto.');
        bookingForm.reset();
    });
}