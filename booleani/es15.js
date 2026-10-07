/*
  ESERCIZIO RIASSUNTIVO 5 - Verifica password

  Una password è valida se:
  - ha almeno 8 caratteri (.length)
  - NON è vuota
  - contiene almeno un numero

  Restituisci true se la password è valida.
  Suggerimento: usa includes() per cercare un numero.
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es15(password) {
  // TODO: scrivi qui la tua soluzione
  return (password.length>=8 && password!=="" && password.includes(1,2,3,4,5,6,7,8,9,0))
}

// --- NON MODIFICARE SOTTO ---
export { es15 };
