"use server";

import * as z from "zod";
import AuthError from "next-auth";

import { signIn } from "@/auth";
import { loginFormSchema } from "@/schemas/index";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import userController from "@/dao/UserDao";
import VerificationTokenImpl from "@/features/logic/VerificationTokenImpl";
import resendInstance from "@/lib/resend";
import stringUtils from "@/utils/stringUtils";
import { EmailTemplateType } from "@/utils/emailTemplates";
import configEnv from "@/config";

export const login = async (values: z.infer<typeof loginFormSchema>) => {
  const validatedFields = loginFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const userControllerHandler = new userController();
  const existingUser: any = await userControllerHandler.getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email Does not exist" };
  }

  if (!existingUser.emailVerified) {
    const verificationTokenForm = new VerificationTokenImpl();
    await verificationTokenForm.generateVerificationToken(existingUser.email);
    const resendHandler = new resendInstance();
    const customData = {
      redirectLink: `${
        configEnv.app.url
      }/auth/new-verification?token=${verificationTokenForm.getToken()}`,
    };
    const result: any = await resendHandler.sendMail(
      email,
      EmailTemplateType.VerificationToken,
      existingUser?.name || "User",
      customData
    );
    if (!stringUtils.isUndefinedEmptyorNull(result?.data)) {
      return { success: "Confirmation Email Send" };
    } else {
      return { error: "Error sending mail", result: result };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
