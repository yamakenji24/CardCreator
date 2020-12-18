import Image from 'next/image';
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
        <Image src="/logo.png" width="120" height="120" className="rounded-full" />
      </div>
   </div>
  )
}