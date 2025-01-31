import { useState } from 'react';
import CreateTamagotchiForm from './CreateTamagotchiForm';

const CreateTamagotchi = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const toggleButtonState = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="card bg-base-100 w-96 shadow-xl p-6">
          <div>
            <p>Hi!</p>
            <p>It looks like you don't have a tamagotchi yet....</p>
            <p>Let's create one!</p>
            <button
              className="btn btn-primary btn-md rounded-sm"
              onClick={toggleButtonState}
            >
              Start
            </button>
          </div>
        </div>
      </div>
      {buttonClicked && <CreateTamagotchiForm userId={''} />}
    </>
  );
};

export default CreateTamagotchi;
