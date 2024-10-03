import { Tamagotchi } from '../types/types';

interface TamagotchiListItemProps {
  tamagotchi: Tamagotchi;
}

const TamagotchiListItem = ({ tamagotchi }: TamagotchiListItemProps) => {
  return (
    <div className="list-item-card">
      <div key={tamagotchi.id}>
        <div className='title'>
          <h2>{tamagotchi.name}</h2>
        </div>
        <div className="item-details">
          <div className="detail-category">Species:</div>
          <div>{tamagotchi.species}</div>
        </div>
        {/* <div className="item-details">
          <div className="detail-category">Date of Birth:</div>
          <div>{tamagotchi.dateOfBirth}</div>
        </div> */}
        <div className="item-details">
          <div className="detail-category">Hunger:</div>
          <div>{tamagotchi.hunger}</div>
        </div>
        <div className="item-details">
          <div className="detail-category">Health:</div>
          <div>{tamagotchi.health}</div>
        </div>
        <div className="item-details">
          <div className="detail-category">Happiness:</div>
          <div>{tamagotchi.happiness}</div>
        </div>
        <div className="item-details">
          <div className="detail-category">Energy:</div>
          <div>{tamagotchi.energy}</div>
        </div>
        <div className="item-details">
          <div className="detail-category">Cleanliness:</div>
          <div>{tamagotchi.cleanliness}</div>
        </div>
      </div>
    </div>
  );
};

export default TamagotchiListItem;
