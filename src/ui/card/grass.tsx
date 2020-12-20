
interface Props {
  provider: string;
  name: string;
}

export const Grass = ({provider, name}: Props): JSX.Element => {
  if(provider !== 'github') return null;

  return (
    <div className="ml-28">
      <img
        src={"/_next/image?url=https%3A%2F%2Fgrass-graph.moshimo.works%2Fimages%2F"+name+".png%3Fbackground%3Dnone&w=1200&q=75"}
        width={380} height={70}
      />
    </div>
  )
}