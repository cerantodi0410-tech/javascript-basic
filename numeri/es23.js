/*
  ESERCIZIO RIASSUNTIVO 9 - Calcolatrice base

  Dati due numeri a e b e un operatore ("+", "-", "*", "/"):
  - esegui l'operazione corrispondente
  - restituisci il risultato

  Esempio: es23(10, 5, "+") → 15
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es23(a, b, operatore) {
  
  // TODO: scrivi qui la tua soluzione
  var risultato =0
  if (operatore =="+") {
    risultato = a + b;
  }
  if (operatore =="-") {
    var risultato = a - b
    }
  if (operatore =="*") {
    var risultato = a * b
    }
  if (operatore =="/") {
    var risultato = a / b
    }
return risultato
}

// --- NON MODIFICARE SOTTO ---
export { es23 };
