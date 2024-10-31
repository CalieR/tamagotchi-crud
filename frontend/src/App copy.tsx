import { useEffect, useState } from 'react';

import './App.css';
import { Tamagotchi } from './types/types';
import TamagotchiList from './components/list/List';
import { getTamagotchis } from './service/tamagotchi/tamagotchiService';

function App2() {
  const [tamagotchis, setTamagotchis] = useState<Tamagotchi[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

  const fetchTamagotchis = async () => {
    const response = await getTamagotchis();
   // setTamagotchis(response);
    setError(response.error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchTamagotchis();
  }, []);

  return (
    <>
      <div>
        <div className="header">
          <h1>Tamagotchi Simulator</h1>
        </div>
     
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && tamagotchis && (
          <TamagotchiList
            tamagotchis={tamagotchis}
            setTamagotchis={setTamagotchis}
          />
        )}
      </div>
    </>
  );
}

export default App2;
