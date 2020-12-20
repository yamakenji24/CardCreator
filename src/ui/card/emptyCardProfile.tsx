import { OuterColorType } from '../../utils/useChangeColor';

export const EmptyCardLayout = (
  {innerColor, outerColor}: {
    innerColor: string,
    outerColor: OuterColorType
  }
  ): JSX.Element => {
  return (
    <div className={"w-crd h-80 my-10 mx-auto relative border-4 border-solid border-white p-1.5 rounded-3xl bg-gradient-to-r from-"+outerColor.from+" via-"+outerColor.via+" to-"+outerColor.to}>
      <div className={"w-full h-full rounded-3xl bg-" + innerColor}>
        <img src={"/_next/image?url=%2Flogo.svg&w=384&q=75"} className="rounded-full" width='100' height='100' />
      </div>
   </div>
  )
}