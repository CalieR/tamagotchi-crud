import { useUser } from '@clerk/clerk-react';
import { Tamagotchi } from '../types/types';
import CreateTamagotchiForm from './tamagotchi/CreateTamagotchiForm';
import TamagotchiDetails from './tamagotchi/TamagotchiDetails';
import { Dispatch, SetStateAction } from 'react';

interface UserPageProps {
  tamagotchis: Tamagotchi[];
  setTamagotchis: Dispatch<SetStateAction<Tamagotchi[]>>;
}

const UserPage = ({ tamagotchis, setTamagotchis }: UserPageProps) => {
  const { user, isLoaded, isSignedIn } = useUser();
  console.log(user);

  if (!isLoaded) {
    // Handle loading state
    return null;
  }

  if (isSignedIn) {
    //TODO: used for testing / building purposes - show only 1 component later, as user can only have one tamagotchi at a time (create or see)
    const userTamagotchi = tamagotchis.findLast(
      (tama: Tamagotchi) => tama.owner === user.id
    );
    return (
      <div>
        <CreateTamagotchiForm
          userId={user.id}
          setTamagotchis={setTamagotchis}
        />
        {userTamagotchi && (
          <TamagotchiDetails
            userName={user.fullName}
            userTamagotchi={userTamagotchi}
          />
        )}
      </div>
    );
  }

  //   if (isSignedIn) {
  //     const userTamagotchi = tamagotchis.find((tama) => tama.owner === user.id);
  //     if (typeof userTamagotchi !== 'undefined') {
  //       return (
  //         <TamagotchiDetails
  //           userName={user.fullName}
  //           userTamagotchi={userTamagotchi}
  //         />
  //       );
  //     } else {
  //       return (
  //         <CreateTamagotchiForm
  //           userId={user.id}
  //           setTamagotchis={setTamagotchis}
  //         />
  //       );
  //     }
  //   }

  return <div>Not signed in</div>;
};

export default UserPage;
