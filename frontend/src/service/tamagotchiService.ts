import axios from 'axios';
import API from '../constants';
import { ApiResponse, TableColumn, TableData, Tamagotchi } from '../types/types';
import { formatDate } from '../utils/utils';

const getTamagotchisData = (): Promise<ApiResponse<Tamagotchi[]>> =>
  axios
    .get(`${API.BASE_URL}/tamagotchi`)
    .then((response) => {
      return {
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        data: [],
        error: 'Failed to fetch tamagotchis',
      };
    });

    const columns: TableColumn[] = [
        { header: 'Name', accessor: 'name' },
        { header: 'Species', accessor: 'species' },
        { header: 'Date of Birth', accessor: 'dateOfBirth' },
        { header: 'Hunger', accessor: 'hunger' },
        { header: 'Health', accessor: 'health' },
        { header: 'Happiness', accessor: 'happiness' },
        { header: 'Energy', accessor: 'energy' },
        { header: 'Cleanliness', accessor: 'cleanliness' },
      ];

const getTamagotchis = async (): Promise<TableData> => {
    const tamagotchis = await getTamagotchisData();
    const rows = tamagotchis.data.map((tamagotchi) => ({
        id: tamagotchi.id,
        name: tamagotchi.name,
        species: tamagotchi.species,
        dateOfBirth: formatDate(tamagotchi.dateOfBirth.toString()),
        hunger: tamagotchi.hunger,
        health: tamagotchi.health,
        happiness: tamagotchi.happiness,
        energy: tamagotchi.energy,
        cleanliness: tamagotchi.cleanliness,
    }));
   return {
    columns: columns,
    rows: rows, 
    error: tamagotchis.error
   }
}

const createTamagotchi = (
  name: FormDataEntryValue | null,
  species: FormDataEntryValue | null
): Promise<ApiResponse<Tamagotchi[]>> =>
  axios
    .post(`${API.BASE_URL}/tamagotchi`, { name, species })
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      console.log(error);
      return {
        data: [],
        error: 'Failed to create tamagotchi',
      };
    });

export { getTamagotchis, createTamagotchi };
