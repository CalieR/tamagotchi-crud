import { useState } from 'react';
import styles from './create-tamagotchi-form.module.css';
import { Tamagotchi } from '../../../types/types';
import { createTamagotchi } from '../../../service/tamagotchiService';

interface CreateTamagotchiFormProps {
  setTamagotchis: (tamagotchis: Tamagotchi[]) => void;
}

const CreateTamagotchiForm = ({
  setTamagotchis,
}: CreateTamagotchiFormProps) => {
  const { createTamagotchiFormContainer, formGroup } = styles;

  const [tamagotchiName, setTamagotchiName] = useState('');
  const [tamagotchiSpecies, setTamagotchiSpecies] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', tamagotchiName);
    formData.append('species', tamagotchiSpecies);
    const name = formData.get('name');
    const species = formData.get('species');
    const response = await createTamagotchi(name, species);
    setTamagotchis(response.data);
    alert(`Tamagotchi ${name} added!`);
    setTamagotchiName('');
    setTamagotchiSpecies('');
  };

  return (
    <div className={createTamagotchiFormContainer}>
      <form onSubmit={handleFormSubmit}>
        <div className={formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="tamagotchiName"
            value={tamagotchiName}
            onChange={(e) => setTamagotchiName(e.target.value)}
          />
        </div>
        <div className={formGroup}>
          <label htmlFor="species">Species:</label>
          <input
            type="text"
            id="species"
            name="tamagotchiSpecies"
            value={tamagotchiSpecies}
            onChange={(e) => setTamagotchiSpecies(e.target.value)}
          />
        </div>
        <div className={formGroup}>
          <button type="submit">Create Tamagotchi</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTamagotchiForm;
