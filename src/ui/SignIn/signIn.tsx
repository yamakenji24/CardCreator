import { signIn } from 'next-auth/client'
import { MouseEvent } from 'react';

interface Props {
  provider: string;
}

export const SignIn = ({provider}: Props) => {
  const signInButton = (event: MouseEvent<HTMLElement>) => {
    signIn(event.currentTarget.dataset.name)
  }

  return (
    <div className="mx-3">
      <button data-name={provider} onClick={signInButton}>Sign In with {provider}</button>
    </div>
  )
}