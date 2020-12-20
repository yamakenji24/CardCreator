import { Profile } from './profile/Profile';
import { useGetSession } from '../../utils/useGetSession';
import { OuterColorType } from '../../utils/useChangeColor';
import { EmptyCardLayout } from './emptyCardProfile';
import { Grass } from './grass';
import { isNullOrUndefined } from 'util';

interface Props {
  innerColor: string;
  outerColor: OuterColorType;
}

export const CardLayout = ({
  innerColor, outerColor
}: Props ): JSX.Element => {
  const {profileData} = useGetSession();
  if(isNullOrUndefined(profileData)) return <EmptyCardLayout innerColor={innerColor} outerColor={outerColor}/>
  return (
   <div id="cardScreen" className={"w-crd h-80 my-10 mx-auto relative border-4 border-solid border-white p-1.5 rounded-3xl bg-gradient-to-r from-"+outerColor.from+" via-"+outerColor.via+" to-"+outerColor.to}>
      <div className={"w-full h-full rounded-3xl bg-" + innerColor}>
        <div className="flex">
          <img src={"/_next/image?url=%2Flogo.svg&w=384&q=75"} className="rounded-full" width='100' height='100' />
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