import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import UserDao from "@/dao/UserDao";
import prisma from "@/lib/prisma";
import { authConfig } from "@/auth.config";
import UserImpl from "@/features/logic/UserImpl";
import resendInstance from "@/lib/resend";
import { EmailTemplateType } from "@/utils/emailTemplates";
import UserRoleEnum from "@/enums/UserRoleEnum";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user, account }) {
      const userDao = new UserDao();
      const userFromDB: any = await userDao.getUserByEmail(user.email || "");

      // Checking if the created account is in 10 min range from the current time
      if (
        userFromDB.createdAt &&
        new Date().getTime() - new Date(userFromDB.createdAt).getTime() <=
          10 * 60 * 1000
      ) {
        const resendHandler = new resendInstance();
        const result: any = await resendHandler.sendMail(
          user?.email || "",
          EmailTemplateType.Welcome,
          user.name || "User"
        );
      }
      await userDao.setEmailVerifiedById(user.id || "");
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verifications
      if (account?.provider !== "credentials") return true;
      // if(account && account?.provider === 'google-forms') {
      //   console.log("account ---------  ", account);
      //   return true;
      // }

      const userDao = new UserDao();
      const existingUser: any = await userDao.getUserById(user.id as string);

      // Prevent sign in without email verification

      if (!existingUser?.emailVerified) return false;

      // TODO: Add 2FA check

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRoleEnum;
      }
      return session;
    },
    async jwt({ token, account, trigger, session }) {
      if (!token.sub) return token;

      if (trigger == "update") {
        return { ...token, ...session.user };
      }

      const userDao = new UserDao();
      const existingUser = await userDao.getUserById(token.sub);

      if (!existingUser) return token;

      const userForm = new UserImpl();
      userForm.initFromDataObject(existingUser);

      token.role = userForm.getRole();
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
