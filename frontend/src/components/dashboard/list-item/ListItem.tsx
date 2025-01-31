import { Tamagotchi } from '../../types/types';
import styles from './listItem.module.css';
import axios from 'axios';
import API from '../../constants';
import { formatDate } from '../../utils/utils';

interface ListItemProps {
  tamagotchi: Tamagotchi;
  setTamagotchis: (tamagotchis: Tamagotchi[]) => void;
}

const ListItem = ({ tamagotchi, setTamagotchis }: ListItemProps) => {
  const {
    listItemCard,
    title,
    itemDetails,
    listItemCardActions,
    detailCategory,
  } = styles;
  const {
    name,
    species,
    dateOfBirth,
    hunger,
    health,
    happiness,
    energy,
    cleanliness,
  } = tamagotchi;

  const handleDelete = (id: number) => {
    axios
      .delete(`${API.BASE_URL}/tamagotchi/${id}`)
      .then((response) => {
        setTamagotchis(response.data);
        alert(`Tamagotchi ${id} deleted!`);
      })
      .catch((error) => console.log(error));
  };

  const handleFeed = (id: number) => {
    console.log('Feeding tamagotchi ' + id);
  };

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
        <div className={itemDetails}>
          <div className={detailCategory}>Date of Birth:</div>
          <div>{formatDate(dateOfBirth.toString())}</div>
        </div>
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
          <button type="button" onClick={() => handleFeed(tamagotchi.id)}>
            Feed Me!
          </button>
          <button type="button" onClick={() => handleDelete(tamagotchi.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
