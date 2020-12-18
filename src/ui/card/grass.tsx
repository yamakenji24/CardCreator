import Image from 'next/image';

interface Props {
  provider: string;
  name: string;
}

export const Grass = ({provider, name}: Props): JSX.Element => {
  if(provider !== 'github') return null;

  return (
    <div className="ml-28">
      <Image 
        src={"https://grass-graph.moshimo.works/images/"+name+".png?background=none"} 
        width="380" height="70"
      />
    </div>
  )
}