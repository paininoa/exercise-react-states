/* 
// ESERCIZIO EXTRA 04/12 -----------------------------------------

A partire da uno state person, che rappresenta le caratteristiche di una persona:
{
   name: 'Tizio',
   age: 40,
   occupation: 'Student'
}
Create un applicazione react che vi permette di cambiare le proprietà della persona.
Un elemento select, vi permette di selezionare le chiavi.
Vari input, vi permettono di selezionare i nuovi valori name, age e occupation.
*/

import "./Person.css";
import { useState } from "react";

export default function () {
  const [person, setPerson] = useState({
    name: "Tizio",
    age: 40,
    occupation: "Student",
  });

  const [selectedKey, setSelectedKey] = useState("name");
  const [newValue, setNewValue] = useState("");

  return (
    <div className="wrapperPerson">
      <h1>4. Change Person details (04/12)</h1>
      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Occupation: {person.occupation}</li>
      </ul>
      <select
        value={selectedKey}
        onChange={(e) => setSelectedKey(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="occupation">Occupation</option>
      </select>

      <input
        type={typeof person[selectedKey] === "string" ? "text" : "number"}
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />

      <button
        onClick={() => {
          setPerson((p) => ({
            ...p,
            [selectedKey]: newValue,
          }));
          setNewValue("");
        }}
      >
        Change selected value
      </button>
    </div>
  );
}
