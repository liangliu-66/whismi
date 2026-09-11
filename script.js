// Gestione form Booking & Collab -> Reindirizzamento ai DM di Instagram
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Recupera i valori inseriti dall'utente
        const name = document.getElementById('bookerName').value;
        const contact = document.getElementById('contactInfo').value;
        const message = document.getElementById('bookerMessage').value;
        
        // Mostra un avviso chiaro prima di aprire la pagina Instagram
        alert(`Grazie ${name}! La tua richiesta è pronta. Verrai reindirizzato al profilo Instagram di WhisMi Sound per inviarla via DM.`);
        
        // Apre la pagina Instagram ufficiale della band in una nuova scheda
        window.open('https://www.instagram.com/whismi_sound/', '_blank');
        
        // Pulisce il form
        bookingForm.reset();
    });
}