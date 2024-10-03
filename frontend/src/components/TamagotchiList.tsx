import { Tamagotchi } from '../types/types';
import TamagotchiListItem from './TamagotchiListItem';

interface TamagotchiListProps {
  tamagotchis: Tamagotchi[];
}

const TamagotchiList = ({ tamagotchis }: TamagotchiListProps) => {
  return (
    <div>
      {tamagotchis.map((tamagotchi) => {
        return <TamagotchiListItem tamagotchi={tamagotchi} />;
      })}
    </div>
  );
};

export default TamagotchiList;
