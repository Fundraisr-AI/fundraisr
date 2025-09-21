import UserDao from "@/dao/UserDao";
import VerficationTokenDao from "@/dao/VerficationTokenDao";
import UserImpl from "@/features/logic/UserImpl";
import VerificationTokenImpl from "@/features/logic/VerificationTokenImpl";
import errorHandler from "@/helpers/errorHandler";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const verficationTokenDao = new VerficationTokenDao();
    const existingToken = await verficationTokenDao.getVerificationTokenByToken(
      token
    );

    if (!existingToken) {
      const error = new errorHandler();
      error.internalServerError("Token does not exist");
      return error.generateError();
    }

    const verificationTokenForm = new VerificationTokenImpl();
    verificationTokenForm.initFromDataObject(existingToken);

    if (verificationTokenForm.isTokenExpired()) {
      const error = new errorHandler();
      error.internalServerError("Token has expired");
      return error.generateError();
    }

    const userDao = new UserDao();
    const existingUser = await userDao.getUserByEmail(
      verificationTokenForm.getEmail()
    );

    if (!existingUser) {
      const error = new errorHandler();
      error.missingItem("User Not found");
      return error.generateError();
    }

    const userForm = new UserImpl();
    userForm.initFromDataObject(existingUser);
    await userDao.updateData(userForm.getId(), userForm.getEmail());

    await verficationTokenDao.deleteVerificationTokenById(
      verificationTokenForm.getId()
    );
    const returnJson: any = {
      status: 200,
      message: "User Verified",
      success: true,
    };
    return NextResponse.json(returnJson);
  } catch (e: any) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
