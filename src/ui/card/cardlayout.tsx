import { Profile } from './profile/Profile';
import { useGetSession } from '../../utils/useGetSession';
import { EmptyCardLayout } from './emptyCardProfile';
import { Grass } from './grass';
import { isNullOrUndefined } from 'util';

const color = 'bg-black';

export const CardLayout = (): JSX.Element => {
  const {profileData} = useGetSession();
  if(isNullOrUndefined(profileData)) return <EmptyCardLayout color={color}/>
  
  return (
   <div className="w-crd h-80 my-20 mx-auto relative border-4 border-solid border-white p-1.5 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className={"w-full h-full rounded-3xl " + color}>
        <div className="flex">
          <img src="/logo.png" className="w-24 h-24 rounded-full" />
          <Grass provider={profileData.provider} name={profileData.name} />
        </div>
        <Profile 
          name={profileData.name}
          picture={profileData.picture}
          provider={profileData.provider} 
          twitter={profileData.twitter}
          email={profileData.email}
          blog={profileData.blog}
        />
      </div>
   </div>
  );
};