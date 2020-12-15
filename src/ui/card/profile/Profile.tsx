import { Icon } from "./Icon";

interface Props {
  name: string;
  picture: string;
  twitter: string;
  icon: string;
  email: string;
  blog: string | null;
}

export const Profile = ({
  name, picture, twitter, icon, email, blog
}: Props): JSX.Element => {
  return (
    <div className="py-2 pl-12">
      <div className="flex flex-row">
        <img　src={picture}　alt={name}　className="w-28 h-28 rounded-full"　/>
        <div className="flex flex-col">
          <p className="text-3xl ml-24 mb-3 -mt-4 font-bold text-white">{name}</p>
          <Icon name={name} icon={icon}/>
          <Icon name={twitter} icon="twitter" />
          <Icon name={email} icon="mail"/>
          <Icon name={blog} icon="archive" />
        </div>
      </div>
    </div>
  );
};
