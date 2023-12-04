/*
2. Controllo del Volume: Creare un componente slider che permetta 
all'utente di controllare il livello del volume. Nel componente, 
utilizza useState per creare una variabile di stato volume che terrà 
traccia del livello del volume (da 0 a 100). Crea uno slider utilizzando 
un input di tipo range che aggiorna il valore di volume ogni volta che 
l'utente lo sposta (onChange).
Visualizza il valore corrente del volume in un elemento <span> o <div> 
accanto allo slider.
BONUS: Aggiungi un pulsante "Mute" che, quando cliccato (onClick), 
imposta il volume a 0 e aggiorna lo slider di conseguenza.
*/

import "./Volume.css";
import { useState } from "react";

export default function () {
  const [value, setValue] = useState("70");

  return (
    <div className="wrapperVolume">
      <h1>2. Volume slider</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => {
          setValue(event.target.valueAsNumber);
        }}
      />
      <span>{value}</span>
    </div>
  );
}
