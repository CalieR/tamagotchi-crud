import axios from 'axios';
import { ApiResponse, Tamagotchi } from '../../types/types';
import API from '../../constants';

const getAllTamagotchis = (): Promise<ApiResponse<Tamagotchi[]>> =>
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

    const createTamagotchi = (
        name: FormDataEntryValue | null,
        species: FormDataEntryValue | null,
        owner: string
      ): Promise<ApiResponse<Tamagotchi[]>> =>
        axios
          .post(`${API.BASE_URL}/tamagotchi`, { name, species, owner })
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

export { getAllTamagotchis, createTamagotchi };
