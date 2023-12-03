/*
1. Modalità Giorno-Notte: Sviluppare un'applicazione React che 
permetta all'utente di passare da una modalità giorno (light mode) 
a una modalità notte (night mode) utilizzando useState e onClick 
su di un bottone. L'idea è di creare un rendering condizionale della 
classe che gestisce i colori di sfondo. Crea un progetto con almeno 
due Componenti principali.
*/

/*
import { useState } from "react";
import "./DayNight.css";

const DayNight = () => {
  const [className, setClass] = useState("day");

  const handleClick = () => {
    setClass("night");
  };

  return (
    <div className={"day"}>
      <h1>DayNight</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        mollitia?
      </p>
      <button onClick={handleClick}>Switch</button>
    </div>
  );
};

export default DayNight;
*/

// SOLUTION FOUND ON GOOGLE ------------------------

import { useState } from "react";
import "./DayNight.css";

export default function () {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <div className={isActive ? "night" : "day"}>
      <h1>DayNight</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        mollitia?
      </p>
      <button onClick={handleClick}>Switch</button>
    </div>
  );
}
