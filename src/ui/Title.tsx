interface Props {
  text: string;
}

export const Title = ({text}: Props): JSX.Element => {
  return (
    <h2 className="leading-tight text-6xl text-center">
      {text}
    </h2>
  )
}