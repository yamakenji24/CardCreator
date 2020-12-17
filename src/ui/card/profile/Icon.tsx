interface Props {
  name: string | null;
  icon: string;
}

export const Icon = ({name, icon}: Props) => {
  if(!name) return null;

  return (
    <div className="mr-0 ml-24 text-gray-100 flex">
      <div className="h-8 w-8 mt-1 mr-2">
        <img src={"/"+ icon +".svg"} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};
