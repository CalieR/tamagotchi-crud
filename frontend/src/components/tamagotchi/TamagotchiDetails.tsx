interface TamagotchiDetailsProps {
  userName: string | null;
  userTamagotchi: Record<string, number | string>;
}

const TamagotchiDetails = (props: TamagotchiDetailsProps) => {
  const { userName, userTamagotchi } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Hello {userName}!</h2>
          <p>Your tamagotchi is named {userTamagotchi.name}.</p>
          <p>
            {userTamagotchi.name} is a {userTamagotchi.species}.
          </p>
          <p>
            {userTamagotchi.name} was born on {userTamagotchi.dateOfBirth}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamagotchiDetails;
