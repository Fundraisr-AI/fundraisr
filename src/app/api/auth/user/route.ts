import UserDao from "@/dao/UserDao";
import VerificationTokenImpl from "@/features/logic/VerificationTokenImpl";
import errorHandler from "@/helpers/errorHandler";
import resendInstance from "@/lib/resend";
import { EmailTemplateType } from "@/utils/emailTemplates";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import configEnv from "@/config";
import UserImpl from "@/features/logic/UserImpl";

export async function POST(req: NextRequest) {
  try {
    const userData = await req.json();

    const hashedPassword = await bcrypt.hash(userData.password || "", 12);
    userData.password = hashedPassword;
    const userForm = new UserImpl();
    userForm.initFromDataObject(userData);

    // checking wheather user exist
    const userDao = new UserDao();
    const isEmailExists = await userDao.isEmailexists(userForm.email);

    if (!isEmailExists) {
      // TODO: add functionality for lastname
      await userDao.create(
        userForm.getName(),
        userForm.getPassword() || "",
        userForm.getEmail()
      );

      const verificationTokenForm = new VerificationTokenImpl();
      await verificationTokenForm.generateVerificationToken(
        userForm.getEmail()
      );

      const customData = {
        redirectLink: `${
          configEnv.app.url
        }/auth/new-verification?token=${verificationTokenForm.getToken()}`,
      };
      const resendHandler = new resendInstance();
      const result: any = await resendHandler.sendMail(
        userForm.getEmail(),
        EmailTemplateType.VerificationToken,
        userForm.name || "User",
        customData
      );
    } else {
      const error = new errorHandler();
      error.conflict("Email Already Exists");
      return error.generateError();
    }

    // TODO: Send Verification token email
    const returnJson: any = {
      status: 200,
      message: "User Created",
      success: true,
    };
    return NextResponse.json(returnJson);
  } catch (e: any) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
