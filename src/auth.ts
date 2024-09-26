import NextAuth, { CredentialsSignin } from "next-auth";
import googleProvider from "next-auth/providers/google";
import githubProvider from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import prisma from "../lib/prismaClient";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    googleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    githubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    credentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "text",
          label: "Email",
        },
        password: {
          type: "password",
          label: "Passowrd",
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!(email && password)) {
          throw new CredentialsSignin(
            "Please provide both email and password."
          );
        }

        const user = await prisma.user.findFirst({ where: { email: email } });

        if (!user) {
          throw new CredentialsSignin("Invalid email or password!");
        }
        if (user.password !== password) {
          throw new CredentialsSignin("Invalid email or password!");
        }
        const parsedUser = { email: user?.email, id: user?.id.toString() };
        return parsedUser;
      },
    }),
  ],
});
