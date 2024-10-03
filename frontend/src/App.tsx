import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Tamagotchi } from './types/types';
import TamagotchiList from './components/TamagotchiList';

function App() {
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
        <div className='title'>
          <h1>Tamagotchi Simulator</h1>
        </div>
        {!tamagotchis && <p>Loading...</p>}
        {tamagotchis && <TamagotchiList tamagotchis={tamagotchis} />}
      </div>
    </>
  );
}

export default App;
