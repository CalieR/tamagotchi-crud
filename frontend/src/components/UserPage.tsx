import { useUser } from '@clerk/clerk-react';
import CreateTamagotchiForm from './tamagotchi/CreateTamagotchiForm';
import { TableData } from '../types/types';
import TamagotchiDetails from './tamagotchi/TamagotchiDetails';

interface UserPageProps {
  tamagotchis: TableData;
}

const UserPage = ({ tamagotchis }: UserPageProps) => {
  const { rows } = tamagotchis;

  const { user, isLoaded, isSignedIn } = useUser();
  console.log(user);

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (isSignedIn) {
    const userTamagotchi = rows.find((row) => row.owner === user.id);
    if (typeof userTamagotchi !== 'undefined') {
      return (
        <TamagotchiDetails userName={user.fullName} userTamagotchi={userTamagotchi} />
      );
    } else {
      return <CreateTamagotchiForm userId={user.id} />;
    }
  }

  return <div>Not signed in</div>;
};

export default UserPage;
