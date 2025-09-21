import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import configEnv from "@/config";
import UserDao from "@/dao/UserDao"; // adjust path
import UserImpl from "@/features/logic/UserImpl"; // adjust path

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: configEnv.google.clientId,
      clientSecret: configEnv.google.clientSecret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const userControllerHandler = new UserDao();
        const userDB = await userControllerHandler.getUserByEmail(
          credentials.email
        );
        if (!userDB) return null;

        const user = new UserImpl();
        user.initFromDataObject(userDB);

        const hashedPassword = user.getPassword();
        if (!hashedPassword) return null;

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          hashedPassword
        );

        if (!isPasswordValid) return null;

        return user.toJson();
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin", // optional: custom sign-in page
  },
  secret: process.env.AUTH_SECRET,
};
