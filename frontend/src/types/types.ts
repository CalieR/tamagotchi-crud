 type Tamagotchi = {
  id: number;
  name: string;
  species: string;
  dateOfBirth: Date;
  hunger: number;
  health: number;
  happiness: number;
  energy: number;
  cleanliness: number;
};

interface ApiResponse<T>  {
  data: T,
  error?: string
}

export type { Tamagotchi, ApiResponse}

