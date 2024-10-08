import { Tamagotchi } from '../../types/types';
import ListItem from '../list-item/ListItem';
import styles from './list.module.css';

interface ListProps {
  tamagotchis: Tamagotchi[];
}

const List = ({ tamagotchis }: ListProps) => {
  const { listContainer } = styles;
  return (
    <div className={listContainer}>
      {tamagotchis.map((tamagotchi) => {
        return <ListItem key={tamagotchi.id} tamagotchi={tamagotchi} />;
      })}
    </div>
  );
};

export default List;
