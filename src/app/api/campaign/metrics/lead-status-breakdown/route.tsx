import CampaignDao from "@/dao/CampaignDao";
import CampaignImpl from "@/features/logic/CampaignImpl";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const campaignDao = new CampaignDao();
    const campaigns = await campaignDao.getCampaignLeadStatusBreakdown(
      user?.user?.id || ""
    );
    const status = {
      MEETING_REQUESTED: 0,
      NO_COMMENTS: 0,
      DO_NOT_CONTACT: 0,
      WRONG_PERSON: 0,
      INFORMATION_REQUEST: 0,
      NOT_INTERESTED: 0,
      VC_MANUAL_APPLICATION: 0,
      MEETING_BOOKED: 0,
    };
    for (const campaign of campaigns) {
      const leadsByStatus = campaign.leadsByStatus || {};
      for (const key in status) {
        if (leadsByStatus[key]) {
          status[key as keyof typeof status] += leadsByStatus[key];
        }
      }
    }

    const campaignHandler = new CampaignImpl();
    campaignHandler.setPositiveReplyMetrics(status);

    const responseJson = {
      success: true,
      data: campaignHandler,
      status: 200,
    };
    return NextResponse.json(responseJson);
  } catch (e) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
