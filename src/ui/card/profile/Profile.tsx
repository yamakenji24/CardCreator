import { Icon } from "./Icon";
import { ProfileType } from '../../../utils/getProfile';
import Image from 'next/image';

export const Profile = ({
  name, picture, twitter, provider, email, blog
}: ProfileType): JSX.Element => {
  return (
    <div className="py-2 pl-12">
      <div className="flex flex-row">
        <Image　src={picture}　alt={name}　className="rounded-full"　width="120" height="120"/>
        <div className="flex flex-col">
          <p className="text-3xl ml-24 mb-3 -mt-4 font-bold text-white">{name}</p>
          <Icon name={name} icon={provider}/>
          <Icon name={twitter} icon="twitter" />
          <Icon name={email} icon="mail"/>
          <Icon name={blog} icon="archive" />
        </div>
      </div>
    </div>
  );
};
