var list = [], surname, cycleEnd = false;

do {
  surname = prompt("Inserisci un cognome \n\n\n(inserisci \"0\" per interrompere)");
  if ( !isNaN( parseInt( surname ) ) ) {
    if ( parseInt( surname ) == 0 ) {
      cycleEnd = confirm("Premere \"Ok\" per smettere di inserire i cognomi e procedere, oppure \"Annulla\" per continuare.");
    } else {
      alert("I numeri non sono un inserimento valido, riprova \n\n\n(inserisci \"0\" per interrompere)");
    }
  } else {
    list.push( surname );
  }
} while ( cycleEnd == false )

list.sort();

for ( var i = 0; i < list.length; i++ ) {
  console.log( ( i + 1 + " - " + list[i] ) );
}
