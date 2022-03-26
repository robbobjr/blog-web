import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { OpenAPI, UsersService } from '../../../services/openapi';

OpenAPI.BASE = process.env.NEXT_PUBLIC_APP_URL;
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

      const userByEmail = await UsersService.usersControllerFindOne(
        user.email,
      );

      return { user: userByEmail, expires: data.session.expires };
    },
    signIn: async (data) => {
      try {
        let user = await UsersService.usersControllerFindOne(data.user.email);

        if (!user) {
          const { email, name, image } = data.user;
          user = await UsersService.usersControllerCreate({ email, image, name });
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
});