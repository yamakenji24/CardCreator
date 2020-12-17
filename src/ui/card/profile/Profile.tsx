import { Icon } from "./Icon";
import { ProfileType } from '../../../utils/getProfile';

export const Profile = ({
  name, picture, twitter, provider, email, blog
}: ProfileType): JSX.Element => {
  return (
    <div className="py-2 pl-12">
      <div className="flex flex-row">
        <img　src={picture}　alt={name}　className="w-28 h-28 rounded-full"　/>
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
