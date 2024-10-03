import { Tamagotchi } from "../types/types";

interface TamagotchiListItemProps {
  tamagotchi: Tamagotchi;
}

const TamagotchiListItem = ({tamagotchi}: TamagotchiListItemProps) => {
  return (
    <div>
      <h2>Tamagotchi List Item</h2>
      <div key={tamagotchi.id}>
          <h2>{tamagotchi.name}</h2>
          <p>Species: {tamagotchi.species}</p>
          {/* <p>Date of Birth: {tamagotchi.dateOfBirth}</p> */}
          <p>Hunger: {tamagotchi.hunger}</p>
          <p>Health: {tamagotchi.health}</p>
          <p>Happiness: {tamagotchi.happiness}</p>
          <p>Energy: {tamagotchi.energy}</p>
          <p>Cleanliness: {tamagotchi.cleanliness}</p>
        </div>
    </div>
  );
};

export default TamagotchiListItem;