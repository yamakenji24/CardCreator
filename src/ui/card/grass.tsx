interface Props {
  provider: string;
  name: string;
}

export const Grass = ({provider, name}: Props): JSX.Element => {
  if(provider !== 'github') return null;

  return (
    <img 
      src={"https://grass-graph.moshimo.works/images/"+name+".png?background=none"} 
      className="ml-28 w-96"
    />
  )
}