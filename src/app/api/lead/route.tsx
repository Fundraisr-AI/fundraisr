import CampaignDao from "@/dao/CampaignDao";
import LeadDao from "@/dao/LeadDao";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const leadDao = new LeadDao();

    const leads = await leadDao.getAllLeadsByUserId(user?.user?.id || "");
    const responseJson = {
      success: true,
      data: leads,
      status: 200,
    };
    return NextResponse.json(responseJson);
  } catch (e) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
