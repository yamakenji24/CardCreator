import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ], 
  session: {
    jwt: true,
  },

  callbacks: { 
    session: async (session, user) => { 
      return Promise.resolve(user) 
    },
    jwt: async (token, user, account, profile) => {
      if(account) {token.provider = account.provider}
      if(profile) {token.profile = profile}
      return Promise.resolve(token) 
    }, 
  },
}

export default (req, res) => NextAuth(req, res, options);