import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// With the pattern [...anything] we can intercept any route that start with api/auth
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: '562033fa6e3d09d4b9a0',
      clientSecret: 'f0e0b41c755eb4fa545869768a511bf917635639',
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