// 1) APPLICATION STATE
// 2) STATE ACCESSORS/MUTATORS
// 3) DOM NODE REFERENCES
// 4) DOM NODE CREATION FUNCTIONS
// 5) RENDER FUNCTIONS
// 6) EVENT HANDLERS
// 7) INIT BINDINGS
// 8) INITIAL RENDERING

// 1. Wir "holen" uns die Elemente aus dem HTML
const searchInput = document.getElementById('dinoSearch');
const allDinosaurs = document.querySelectorAll('.dinosaur');

// 2. Wir fügen einen "Event Listener" hinzu
// Dieser reagiert jedes Mal, wenn du eine Taste im Suchfeld drückst (input-Event)
searchInput.addEventListener('input', function() {
    
    // Was hat der Nutzer getippt? Wir machen es klein (toLowerCase), 
    // damit "T-Rex" auch "t-rex" findet.
    const query = searchInput.value.toLowerCase();

    // 3. Wir gehen jeden Dinosaurier einzeln durch
    allDinosaurs.forEach(dino => {
        // Wir suchen den Namen im h2-Tag innerhalb der Sektion
        const name = dino.querySelector('h2').textContent.toLowerCase();

        // Überprüfung: Ist der getippte Text im Namen enthalten?
        if (name.includes(query)) {
            dino.style.display = "block";  // Anzeigen
        } else {
            dino.style.display = "none";   // Verstecken
        }
    });
});

