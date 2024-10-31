import { useUser } from '@clerk/clerk-react';
import { Tamagotchi } from '../types/types';
import CreateTamagotchiForm from './tamagotchi/CreateTamagotchiForm';
import TamagotchiDetails from './tamagotchi/TamagotchiDetails';

interface UserPageProps {
  tamagotchis: Tamagotchi[];
}

const UserPage = ({ tamagotchis }: UserPageProps) => {
  const { user, isLoaded, isSignedIn } = useUser();
  console.log(user);

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (isSignedIn) {
    const userTamagotchi = tamagotchis.find((tama) => tama.owner === user.id);
    if (typeof userTamagotchi !== 'undefined') {
      return (
        <TamagotchiDetails
          userName={user.fullName}
          userTamagotchi={userTamagotchi}
        />
      );
    } else {
      return <CreateTamagotchiForm userId={user.id} />;
    }
  }

  return <div>Not signed in</div>;
};

export default UserPage;
