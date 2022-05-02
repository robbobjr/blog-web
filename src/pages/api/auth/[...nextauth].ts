import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { AxiosAPI } from '../../../services/api/axios';
import { logger } from '../../../services/logger';

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
    async jwt({ account, token }) {
      
      // TODO: this is a workaround to users with no email registered in github. 
      // TODO: add externalRef column on Database.
      if (account && !token.email) {
        token.email = account.providerAccountId;
      }

      return token
    },
    session: async (data) => {
      const axiosAPI = new AxiosAPI("NextAtuh:session");
      const userByEmail = await axiosAPI.getUserByEmail(data.token.email);
      return { user: userByEmail, expires: data.session.expires };
    },
    signIn: async (data) => {
      const axiosAPI = new AxiosAPI("NextAuth:signIn");
      let { email, name, image } = data.user;
      const searchParam = email || data.profile.email || data.account.providerAccountId;

      try {
        const user = await axiosAPI.getUserByEmail(searchParam);

        if (!user) {
          email = searchParam;
          const github = data.profile.url;
          await axiosAPI.createUser({ email, image, name, github });
        }

        return true;
      } catch (error) {
        logger.error({ error, context: "NextAuth" });
        return false;
      }
    }
  }
});