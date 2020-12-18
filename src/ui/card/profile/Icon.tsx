import Image from 'next/image';

interface Props {
  name: string | null;
  icon: string;
}

export const Icon = ({name, icon}: Props) => {
  if(!name) return null;

  return (
    <div className="mr-0 ml-24 text-gray-100 flex">
      <div className="h-8 w-8 mt-1 mr-2">
        <Image src={"/"+ icon +".svg"} alt={name} width="20" height="20"/>
      </div>
      <p>{name}</p>
    </div>
  );
};
