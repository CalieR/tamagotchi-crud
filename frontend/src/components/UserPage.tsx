import { useUser } from '@clerk/clerk-react';
import CreateTamagotchiForm from './tamagotchi/create-tamagotchi-form/CreateTamagotchiForm';
import { TableData } from '../types/types';

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
        <>
          <p>Hello {user.fullName}!</p>
          <p>Your tamagotchi is named {userTamagotchi.name}.</p>
          <p>
            {userTamagotchi.name} is a {userTamagotchi.species}.
          </p>
          <p>{userTamagotchi.name} was born on {userTamagotchi.dateOfBirth}.</p>
        </>
      );
    } else {
      return (
        <>
          <p>Hello {user.fullName}!</p>
          <p>Enter a name and a species for your new tamagotchi:</p>
          <CreateTamagotchiForm userId={user.id}  />
        </>
      );
    }
  }

  return <div>Not signed in</div>;
};

export default UserPage;
