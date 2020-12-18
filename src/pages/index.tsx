import { CardLayout } from '../ui/card/cardlayout';
import { FooterLayout } from '../ui/FooterLayout';
import { NavBar } from '../ui/navBar';
import { Title } from '../ui/Title';
import { SignInLayout } from '../ui/SignIn/SignInLayout';
import { ColorButtonLayout } from '../ui/ColorButtonLayout';
import { useChangeColor } from '../utils/useChangeColor';

export default function Home() {
  const [changeInnerColor, changeOuterColor, {innerColor, outerColor}] = useChangeColor(); 
  console.log("in: ", innerColor,  "out: ", outerColor)

  return (
    <div className="min-h-screen flex flex-col justify-items-center">
      <NavBar />
      <div className="flex flex-col mb-10 items-center">
        <Title text="Create your own card!!" />
        <SignInLayout />
        
        <ColorButtonLayout 
          changeInnerColor={changeInnerColor}
          changeOuterColor={changeOuterColor}
        />
       
        <CardLayout innerColor={innerColor} outerColor={outerColor}/>
      </div>
      <FooterLayout />
    </div>
  )
}