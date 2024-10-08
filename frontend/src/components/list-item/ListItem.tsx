import { Tamagotchi } from '../../types/types';
import styles from './listItem.module.css';

interface ListItemProps {
  tamagotchi: Tamagotchi;
}

const ListItem = ({ tamagotchi }: ListItemProps) => {
  const { listItemCard, title, itemDetails, listItemCardActions, detailCategory } = styles;
  return (
    <div className={listItemCard}>
      <div>
        <div className={title}>
          <h2>{tamagotchi.name}</h2>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Species:</div>
          <div>{tamagotchi.species}</div>
        </div>
        {/* <div className={itemDetails}>}>
          <div className={detailCategory}>Date of Birth:</div>
          <div>{tamagotchi.dateOfBirth}</div>
        </div> */}
        <div className={itemDetails}>
          <div className={detailCategory}>Hunger:</div>
          <div>{tamagotchi.hunger}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Health:</div>
          <div>{tamagotchi.health}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Happiness:</div>
          <div>{tamagotchi.happiness}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Energy:</div>
          <div>{tamagotchi.energy}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Cleanliness:</div>
          <div>{tamagotchi.cleanliness}</div>
        </div>
        <div className={listItemCardActions}>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
