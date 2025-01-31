import { Tamagotchi } from '../../types/types';
import ListItem from '../list-item/ListItem';
import styles from './list.module.css';

interface ListProps {
  tamagotchis: Tamagotchi[];
  setTamagotchis: (tamagotchis: Tamagotchi[]) => void;
}

const List = ({ tamagotchis, setTamagotchis }: ListProps) => {
  const { listContainer } = styles;
  return (
    <div className={listContainer}>
      {tamagotchis.map((tamagotchi) => {
        return <ListItem key={tamagotchi.id} tamagotchi={tamagotchi} setTamagotchis={setTamagotchis} />;
      })}
    </div>
  );
};

export default List;
