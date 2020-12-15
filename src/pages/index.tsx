import { CardLayout } from '../ui/card/cardlayout';
import { FooterLayout } from '../ui/footer';
import { NavBar } from '../ui/navBar';
import { SignIn } from '../ui/signin';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center	justify-items-center">
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <h2 className="m-0 leading-tight text-6xl text-center">
          Create your own card!!
        </h2>
        <SignIn />
        <CardLayout />
      </div>
      <FooterLayout />
    </div>
  )
}