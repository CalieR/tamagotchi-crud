import axios from 'axios';
import API from '../constants';
import { ApiResponse, Tamagotchi } from '../types/types';

const getTamagotchis = (): Promise<ApiResponse<Tamagotchi[]>> =>
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
        }
    })

export { getTamagotchis, createTamagotchi };
