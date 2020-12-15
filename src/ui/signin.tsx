import { signIn, signOut } from 'next-auth/client'

export const SignIn = (): JSX.Element => {

  const github = () => {
    signIn('github')
  }
  const google = () => {
    signIn('google')
  }

  return (
    <div>
      <button onClick={github}>Sign In with Github</button>
      <button onClick={google}>Sign In with Google</button>
    </div>
  )
}
