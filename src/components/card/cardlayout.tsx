import { CardNumber } from './cardNumber';
import { CardProfile } from './cardProfile';

export const CardLayout = (): JSX.Element => {
  return (
   <div className="w-crd h-80 my-40 mx-auto relative border-4 border-solid border-white p-1.5 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full h-full bg-black rounded-3xl">
        <CardProfile />
        <CardNumber />
      </div>
   </div>
  );
};