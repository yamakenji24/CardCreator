
export const Grass = ({boolProvider, name}): JSX.Element => {
  if(!boolProvider) return null;

  return (
    <img 
      src={"https://grass-graph.moshimo.works/images/"+name+".png?background=none"} 
      className="ml-28 w-96"
    />
  )
}