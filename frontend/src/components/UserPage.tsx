import { useUser } from '@clerk/clerk-react';
import { getTamagotchiByUserId } from '../service/tamagotchi/tamagotchi.api';
import TamagotchiDetails from './tamagotchi/TamagotchiDetails';
import { useState } from 'react';
import { Tamagotchi } from '../types/types';
import CreateTamagotchi from './tamagotchi/CreateTamagotchi';

const UserPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  const [userTamagotchi, setUserTamagotchi] = useState<
    Tamagotchi | undefined
  >();

  const fetchUserTamagotchi = async () => {
    const response = await getTamagotchiByUserId(user.id);
    setUserTamagotchi(response.data);
  };

  if (!isLoaded) {
    // Handle loading state
    return null;
  }

  if (isSignedIn) {
    fetchUserTamagotchi();
    if (userTamagotchi) {
      return (
        <TamagotchiDetails userTamagotchi={userTamagotchi} userName={null} />
      );
    } else {
      return <CreateTamagotchi userId={user.id} />;
    }
  }

  return <div>Not signed in</div>;
};

export default UserPage;
