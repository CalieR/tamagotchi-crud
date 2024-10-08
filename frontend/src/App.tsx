import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Tamagotchi } from './types/types';
import TamagotchiList from './components/list/List';

function App() {
  const [tamagotchis, setTamagotchis] = useState<Tamagotchi[]>([]);

  const [tamagotchiName, setTamagotchiName] = useState('');
  const [tamagotchiSpecies, setTamagotchiSpecies] = useState('');

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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', tamagotchiName);
    formData.append('species', tamagotchiSpecies);
    const name = formData.get('name');
    const species = formData.get('species');
    axios
      .post('http://localhost:3000/tamagotchi', { name, species })
      .then((response) => {
        setTamagotchis(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <div className="header">
          <h1>Tamagotchi Simulator</h1>
        </div>
        <div className="create-tamagotchi-form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="tamagotchiName"
                onChange={(e) => setTamagotchiName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="species">Species:</label>
              <input
                type="text"
                id="species"
                name="tamagotchiSpecies"
                onChange={(e) => setTamagotchiSpecies(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit">Create Tamagotchi</button>
            </div>
          </form>
        </div>
        {!tamagotchis && <p>Loading...</p>}
        {tamagotchis && <TamagotchiList tamagotchis={tamagotchis} />}
      </div>
    </>
  );
}

export default App;
