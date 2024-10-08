import { Tamagotchi } from '../../types/types';
import ListItem from '../list-item/ListItem';
import styles from './list.module.css';

interface ListProps {
  tamagotchis: Tamagotchi[];
  handleDelete: (id: number) => void;
}

const List = ({ tamagotchis, handleDelete }: ListProps) => {
  const { listContainer } = styles;
  return (
    <div className={listContainer}>
      {tamagotchis.map((tamagotchi) => {
        return <ListItem key={tamagotchi.id} tamagotchi={tamagotchi} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default List;
