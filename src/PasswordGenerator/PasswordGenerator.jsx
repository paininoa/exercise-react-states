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
  const [charCount, setCharCount] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleClick = (event) => {
    if (charCount < 4 || charCount > 16) {
      setPwd("");
      setError("You need to define a legth between 4 and 16 characters");
      return;
    }

    const alphabet =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    let newPwd = "";

    for (let i = 0; i < charCount; i++) {
      const randomIndex = Math.floor(Math.random() * alphabetArray.length);
      newPwd += alphabetArray[randomIndex];
    }
    setPwd(newPwd);
    setCharCount("");
    setError("");
  };

  return (
    <div className="wrapperPassword">
      <h1>3. Password Generator</h1>
      <h4>How many characters? 4 to 16</h4>
      <input
        type="number"
        value={charCount}
        onChange={(e) => setCharCount(e.target.valueAsNumber)}
      />

      <button onClick={handleClick}>Generate</button>
      <div>Passwor generated: {pwd}</div>
      <div>{error}</div>
    </div>
  );
}
