/*
  ESERCIZIO RIASSUNTIVO 10 (Sfida) - Analisi numerica

  Dato un numero n passato come parametro:
  - verifica se è positivo (> 0)
  - verifica se è pari
  - calcola il valore assoluto
  - calcola la radice quadrata (se negativo arrotonda a 2 decimali)

  Restituisci: { positivo: true, pari: false, assoluto: 25, radice: 5 }
  Per n = -25: { positivo: false, pari: false, assoluto: 25, radice: NaN }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es24(n) {
  // TODO: scrivi qui la tua soluzione
  var positivo = 0;
  var pari = 0;
  var assoluto =0 ;
  var radice=0;
  if (n>0) {
    var positivo = true;
  }
  else {
    var positivo =false;
    if (n%2==0) {
      var pari = true;
    }
    else {
      var pari = false;
    }
    if (positivo==false){
     var radice= NaN 
    }
    } 
  
  
  if (n%2==0) {
    var pari = true;
  }
  else {
    var pari = false
  }
  var assoluto =Math.abs(n)
  if (positivo==true) {
    var radice = Math.sqrt(n)
  } 
return{positivo,pari,assoluto,radice}
}

// --- NON MODIFICARE SOTTO ---
export { es24 };
