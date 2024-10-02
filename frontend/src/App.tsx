import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  type Tamagotchi = {
    id: number;
    name: string;
    species: string;
    dateOfBirth: Date;
    hunger: number;
    health: number;
    happiness: number;
    energy: number;
    cleanliness: number;
  };

  const [tamagotchis, setTamagotchis] = useState<Tamagotchi[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/tamagotchi')
      .then((response) => {
        const data = response.data;
        setTamagotchis(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div>
        <h1>Tamagotchi Simulator</h1>
        {!tamagotchis && <p>Loading...</p>}
        {tamagotchis &&
          tamagotchis.map((tamagotchi) => (
            <div key={tamagotchi.id}>
              <h2>{tamagotchi.name}</h2>
              <p>Species: {tamagotchi.species}</p>
              {/* <p>Date of Birth: {tamagotchi.dateOfBirth}</p> */}
              <p>Hunger: {tamagotchi.hunger}</p>
              <p>Health: {tamagotchi.health}</p>
              <p>Happiness: {tamagotchi.happiness}</p>
              <p>Energy: {tamagotchi.energy}</p>
              <p>Cleanliness: {tamagotchi.cleanliness}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
