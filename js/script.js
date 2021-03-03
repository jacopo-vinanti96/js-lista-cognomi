// Dichiarazione variabili
var list = [], surname, cycleEnd = false;

// Ciclo con conferma per essere interrotto
do {
  // L' utente inserisce il cognome
  surname = prompt("Inserisci un cognome \n\n\n(inserisci \"0\" per interrompere)");
  // Controllo se è stato inserito un numero
  if ( !isNaN( parseInt( surname ) ) ) {
    // Se è "0" allora si procede con la conferma per terminare, altrimenti inizia di nuovo
    if ( parseInt( surname ) == 0 ) {
      cycleEnd = confirm("Premere \"Ok\" per smettere di inserire i cognomi e procedere, oppure \"Annulla\" per continuare.");
    // Se è un numero diverso da "0" esce il messaggio di errore e inizia di nuovo
    } else {
      alert("I numeri non sono un inserimento valido, riprova \n\n\n(inserisci \"0\" per interrompere)");
    }
  } else {
    list.push( surname );
  }
} while ( cycleEnd == false )

// sort() ordina "list" dalla A alla Z
list.sort();

// Ciclo per stampare i cognomi sommando 1 al contatore per restituire a schermo l' ordine umano
for ( var i = 0; i < list.length; i++ ) {
  document.getElementById('screen_list').innerHTML += "<li>" + ( ( i + 1 + " - " + list[i] ) ) + "</li>";
}
