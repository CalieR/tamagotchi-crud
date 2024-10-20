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

interface ApiResponse<T> {
  data: T;
  error?: string;
}

interface TableData {
  columns: TableColumn[];
  rows: Record<string, number | string>[];
  error?: string;
}

interface TableColumn {
  header: string;
  accessor: string;
}

export type { Tamagotchi, ApiResponse, TableData, TableColumn };
