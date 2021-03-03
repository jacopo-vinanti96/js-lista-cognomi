// Dichiarazione variabili
var list = [], surname, cycleEnd, containsNumbers, j, i;

// Ciclo con conferma per essere interrotto
do {
  // L' utente inserisce il cognome
  surname = prompt("Inserisci un cognome \n\n(Premi \"Annulla\" per interrompere)");
  containsNumbers = false;
  cycleEnd = false;
  // Controllo se è stato inserito un numero per ogni carattere
  if ( surname !=null ) {
    j = 0;
    while ( j < surname.length && containsNumbers == false ) {
      if ( !isNaN( parseInt( surname[j] ) ) ) {
        containsNumbers = true;
      }
      j++;
    }
    if ( containsNumbers == true ) {
      alert("I numeri non sono un inserimento valido, riprova");
    // Controllo se l' input è vuoto o contiene soltanto spazi
    } else if (surname.length === 0 || !surname.trim()) {
      alert("Non hai inserito nulla, riprova");
    } else {
        // Funzione per rendere tutte le lettere minuscole e poi la prima maiuscola
        surname = surname.toLowerCase();
        surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        list.push( surname );
    }
    // Controllo se è stato premuto "Annulla"
  } else {
    cycleEnd = confirm("Premere \"Ok\" per smettere di inserire i cognomi e procedere, oppure \"Annulla\" per continuare.");
  }
} while ( cycleEnd == false )

// sort() ordina "list" dalla A alla Z
list.sort();

// Ciclo per stampare i cognomi sommando 1 al contatore per restituire a schermo l' ordine umano
for ( i = 0; i < list.length; i++ ) {
  document.getElementById('screen_list').innerHTML += "<li>" + ( ( i + 1 + " - " + list[i] ) ) + "</li>";
}
