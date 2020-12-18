interface Props {
  changeInnerColor: () => void;
  changeOuterColor: () => void;
}

export const ColorButtonLayout = ({
  changeInnerColor, changeOuterColor
}: Props ): JSX.Element => {
  return (
    <div>
      <button onClick={changeInnerColor}>change inner color</button>
      <button onClick={changeOuterColor}>change outer color</button>
    </div>
  )
}