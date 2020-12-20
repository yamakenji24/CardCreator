interface Props {
  name: string | null;
  icon: string;
}

export const Icon = ({name, icon}: Props) => {
  if(!name) return null;

  return (
    <div className="mr-0 ml-24 text-gray-100 flex">
      <div className="h-8 w-8 mt-1 mr-2">
        <img
          src={"/_next/image?url=%2F"+icon+".svg&w=64&q=75"} 
          alt={name} 
          width="25" height="25"
        />
      </div>
      <p>{name}</p>
    </div>
  );
};
