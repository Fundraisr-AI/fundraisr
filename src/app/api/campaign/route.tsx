import CampaignDao from "@/dao/CampaignDao";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const campaignDao = new CampaignDao();
    const campaigns = await campaignDao.getAllCampaignsByUserId(
      user?.user?.id || ""
    );
    const responseJson = {
      success: true,
      data: campaigns,
      status: 200,
    };
    return NextResponse.json(responseJson);
  } catch (e) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
