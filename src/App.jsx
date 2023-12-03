/*
1. Modalità Giorno-Notte: Sviluppare un'applicazione React che 
permetta all'utente di passare da una modalità giorno (light mode) 
a una modalità notte (night mode) utilizzando useState e onClick 
su di un bottone. L'idea è di creare un rendering condizionale della 
classe che gestisce i colori di sfondo. Crea un progetto con almeno 
due Componenti principali.

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

import { useState } from "react";
import "./App.css";
import DayNight from "./DayNight/DayNight";
import Volume from "./Volume/Volume";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <>
      <DayNight />
      <Volume />
      <PasswordGenerator />
    </>
  );
}

export default App;
