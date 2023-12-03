/*
3.Generatore di password casuale: Sviluppare un'applicazione che generi 
una password casuale e permetta all'utente di specificare la lunghezza 
della password. Nel componente, utilizza useState per creare due variabili 
di stato: passwordLength per la lunghezza della password e password per la 
password generata. Crea un input di tipo number che permetta all'utente di 
specificare la lunghezza della password desiderata (onChange). Aggiungi un 
pulsante "Genera" che, quando cliccato (onClick), genera una nuova password 
casuale della lunghezza specificata e aggiorna lo stato password. Visualizza 
la password generata in un elemento <div> o <input>.
*/

import "./PasswordGenerator.css";
import { useState } from "react";

export default function () {
  const [number, setNumber] = useState(4);
  const [passwordLength, password] = useState(setNumber);

  const handleClick = (event) => {};

  return (
    <div className="wrapperPassword">
      <h1>3. Password Generator</h1>
      <h4>How many characters?</h4>
      <input
        type="number"
        value={passwordLength}
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />

      <button onClick={handleClick}>Generate</button>
      <div>Passwor generated: {password}</div>
    </div>
  );
}
