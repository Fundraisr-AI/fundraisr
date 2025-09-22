import CampaignDao from "@/dao/CampaignDao";
import CampaignImpl from "@/features/logic/CampaignImpl";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const campaignDao = new CampaignDao();
    const CampaignMetrics = await campaignDao.getAllMetrics(
      user?.user?.id || ""
    );

    const campaigns = new CampaignImpl();
    campaigns.setMetrics(
      CampaignMetrics.activeCampaigns,
      CampaignMetrics.totalLeads,
      CampaignMetrics.positiveReplied,
      CampaignMetrics.meetingsBooked
    );

    campaigns.setCampaigns(CampaignMetrics.campaigns as any[]);

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
