import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import configEnv from "@/config";
import UserDao from "@/dao/UserDao";
import UserImpl from "@/features/logic/UserImpl";

export const authConfig: NextAuthConfig = {
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
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) return null;

        const userDao = new UserDao();
        const userDB = await userDao.getUserByEmail(credentials.email);
        if (!userDB) return null;

        const user = new UserImpl();
        user.initFromDataObject(userDB);

        const hashedPassword = user.getPassword();
        if (!hashedPassword) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          hashedPassword
        );
        if (!isValid) return null;

        return user.toJson(); // Must be a plain object (id/email/etc.)
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.AUTH_SECRET,
};
