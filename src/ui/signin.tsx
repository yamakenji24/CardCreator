import { signIn } from 'next-auth/client'
import { MouseEvent } from 'react';

interface Props {
  provider: string;
}

export const SignIn = ({provider}: Props): JSX.Element => {
  const signInButton = (event: MouseEvent<HTMLElement>) => {
    signIn(event.currentTarget.dataset.name)
  }

  return (
    <div>
      <button data-name={provider} onClick={signInButton}>Sign In with {provider}</button>
    </div>
  )
}
