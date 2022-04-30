import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { axiosAPI } from '../../../services/axios-api';
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
    session: async (data) => {
      const { session: { user } } = data;

      const { data: userByEmail } = await axiosAPI.get('/users/' + user.email);

      return { user: userByEmail, expires: data.session.expires };
    },
    signIn: async (data) => {
      try {
        let { data: user } = await axiosAPI.get('/users/' + data.user.email);

        logger.info({ msg: 'Logging user with Github', payload: data, context: "NextAuth" });

        if (!user) {
          let { email, name, image } = data.user;
          email = email || data.profile.email || data.profile.url as string;
          const github = data.profile.url;
          const { data: newUser } = await axiosAPI.post('/users', { email, image, name, github });
          user = newUser;
        }

        return true;
      } catch (error) {
        logger.error({ error, context: "NextAuth" });
        return false;
      }
    }
  }
});