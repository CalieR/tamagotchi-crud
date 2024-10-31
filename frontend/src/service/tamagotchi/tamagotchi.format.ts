import { TableColumn, TableData, Tamagotchi } from '../../types/types';
import { formatDate } from '../../utils/utils';

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

const convertTamagotchisToTableData = (
  tamagotchis: Tamagotchi[]
): TableData => {
  const rows = tamagotchis.map((tamagotchi) => ({
    id: tamagotchi.id,
    name: tamagotchi.name,
    species: tamagotchi.species,
    owner: tamagotchi.owner,
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
  };
};

export { convertTamagotchisToTableData };
