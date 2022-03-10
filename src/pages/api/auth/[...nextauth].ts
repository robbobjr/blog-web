import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// With the pattern [...anything] we can intercept any route that start with api/auth
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      /**
       * What kind of data the application will make use.
       * That can be for example: to read repos, access private projects...
       * All scope can be found inside the Github API reference.
       */
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    }),
  ],
  callbacks: {
    signIn: async (data) => {
      return true;
    }
  }
});