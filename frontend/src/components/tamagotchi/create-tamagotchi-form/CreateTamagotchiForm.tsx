import { useState } from 'react';
import { createTamagotchi } from '../../../service/tamagotchiService';

interface CreateTamagotchiFormProps {
  userId: string;
}

const CreateTamagotchiForm = ({ userId }: CreateTamagotchiFormProps) => {
  const [tamagotchiName, setTamagotchiName] = useState('');
  const [tamagotchiSpecies, setTamagotchiSpecies] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', tamagotchiName);
    formData.append('species', tamagotchiSpecies);
    const name = formData.get('name');
    const species = formData.get('species');
    const owner = userId;
    const response = await createTamagotchi(name, species, owner);
    console.log(response);
    //setTamagotchis(response.data);
    alert(`Tamagotchi ${name} added!`);
    setTamagotchiName('');
    setTamagotchiSpecies('');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-row gap-4 mb-4">
          <label htmlFor="name" className="label w-full">
            Name:
          </label>
          <input
            className="input input-bordered rounded-sm w-full"
            type="text"
            id="name"
            name="tamagotchiName"
            value={tamagotchiName}
            onChange={(e) => setTamagotchiName(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <label htmlFor="species" className="label w-full">
            Species:
          </label>
          <input
            className="input input-bordered rounded-sm w-full"
            type="text"
            id="species"
            name="tamagotchiSpecies"
            value={tamagotchiSpecies}
            onChange={(e) => setTamagotchiSpecies(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <button type="submit" className="btn btn-primary rounded-sm">
            Create Tamagotchi
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTamagotchiForm;
