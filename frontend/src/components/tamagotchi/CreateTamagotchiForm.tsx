import { Dispatch, SetStateAction, useState } from 'react';
import { createTamagotchi } from '../../service/tamagotchi/tamagotchi.api';
import { Tamagotchi } from '../../types/types';

interface CreateTamagotchiFormProps {
  userId: string;
  setTamagotchis: Dispatch<SetStateAction<Tamagotchi[]>>;
}

const CreateTamagotchiForm = ({ userId, setTamagotchis }: CreateTamagotchiFormProps) => {
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
    if (name && species) {
      const response = await createTamagotchi(name, species, owner);
      console.log(response);
      setTamagotchis(response.data);
      alert(`Tamagotchi ${name} added!`);
      setTamagotchiName('');
      setTamagotchiSpecies('');
    } else {
      alert('Please fill in name and species');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <p className="mb-4">
          Enter a name and a species for your new tamagotchi:
        </p>
        <form onSubmit={handleFormSubmit}>
          <label className="input input-bordered flex items-center mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Name"
              name="tamagotchiName"
              id="name"
              value={tamagotchiName}
              onChange={(e) => setTamagotchiName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center mb-4">
            <input
              type="text"
              className="grow"
              placeholder="Species"
              name="tamagotchiSpecies"
              id="species"
              value={tamagotchiSpecies}
              onChange={(e) => setTamagotchiSpecies(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-primary btn-md rounded-sm">
            Create Tamagotchi
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTamagotchiForm;
