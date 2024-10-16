import axios from 'axios';
import API from '../constants';
import { ApiResponse, Tamagotchi } from '../types/types';

const getTamagotchis = (): Promise<ApiResponse<Tamagotchi[]>> => axios
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

export default getTamagotchis;
