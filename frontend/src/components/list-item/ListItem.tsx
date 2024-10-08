import { Tamagotchi } from '../../types/types';
import styles from './listItem.module.css';

interface ListItemProps {
  tamagotchi: Tamagotchi;
  handleDelete: (id: number) => void;
}

const ListItem = ({ tamagotchi, handleDelete }: ListItemProps) => {
  const {
    listItemCard,
    title,
    itemDetails,
    listItemCardActions,
    detailCategory,
  } = styles;
  const { name, species, hunger, health, happiness, energy, cleanliness } =
    tamagotchi;

  return (
    <div className={listItemCard}>
      <div>
        <div className={title}>
          <h2>{name}</h2>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Species:</div>
          <div>{species}</div>
        </div>
        {/* <div className={itemDetails}>}>
          <div className={detailCategory}>Date of Birth:</div>
          <div>{dateOfBirth}</div>
        </div> */}
        <div className={itemDetails}>
          <div className={detailCategory}>Hunger:</div>
          <div>{hunger}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Health:</div>
          <div>{health}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Happiness:</div>
          <div>{happiness}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Energy:</div>
          <div>{energy}</div>
        </div>
        <div className={itemDetails}>
          <div className={detailCategory}>Cleanliness:</div>
          <div>{cleanliness}</div>
        </div>
        <div className={listItemCardActions}>
          <button type="button">Edit</button>
          <button type="button" onClick={() =>handleDelete(tamagotchi.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
