import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import errorHandler from "@/helpers/errorHandler";

export async function PUT(req: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      const error = new errorHandler();
      error.unAuthorizedAccess();
      return error.generateError();
    }

    const { fundraisingTarget, capitalCommitted } = await req.json();

    if (fundraisingTarget === undefined || capitalCommitted === undefined) {
      const error = new errorHandler();
      error.missingItem("fundraisingTarget and capitalCommitted are required");
      return error.generateError();
    }

    // Update or create UserDetails record
    const userDetails = await prisma.userDetails.upsert({
      where: {
        userId: session.user.id,
      },
      update: {
        fundraisingTarget: parseInt(fundraisingTarget),
        capitalCommitted: parseInt(capitalCommitted),
        updatedAt: new Date(),
      },
      create: {
        userId: session.user.id,
        fundraisingTarget: parseInt(fundraisingTarget),
        capitalCommitted: parseInt(capitalCommitted),
      },
    });

    return NextResponse.json({
      status: 200,
      message: "User details updated successfully",
      success: true,
      data: userDetails,
    });
  } catch (e: any) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
