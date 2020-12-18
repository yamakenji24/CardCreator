import { SignIn } from './signIn';

export const SignInLayout = (): JSX.Element => {
  
  return (
    <div className="flex">
      <SignIn provider="github"/>
      <SignIn provider="google" />
    </div>
  )
}