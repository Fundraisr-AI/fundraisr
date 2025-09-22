import CampaignDao from "@/dao/CampaignDao";
import CampaignImpl from "@/features/logic/CampaignImpl";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const campaignDao = new CampaignDao();
    const stats = await campaignDao.getInvestorTypeDistributionMetrics(
      user?.user?.id || ""
    );

    const result: any = await stats.map((investor) => {
      const totalCampaigns = investor._count.campaigns;

      let totalContacts = 0;
      let positiveReplies = 0;
      let meetingsScheduled = 0;
      let liveCampaigns = 0;

      investor.campaigns.forEach((c) => {
        totalContacts += c._count.leads;
        if (c.status?.toLowerCase() === "active") liveCampaigns++;

        c.leads.forEach((l) => {
          if (
            [
              "INTERESTED",
              "MEETING_BOOKED",
              "VC_MANUAL_APPLICATION",
              "MEETING_REQUESTED",
              "INFORMATION_REQUEST",
            ].includes(l.status)
          )
            positiveReplies++;
          if (l.status === "MEETING_BOOKED") meetingsScheduled++;
        });
      });

      const campaigns_mini = investor.campaigns.map((campaign) => {
        return {
          id: campaign.id,
          status: campaign.status,
          investor: campaign.investor,
        };
      });

      return {
        id: investor.id,
        companyName: investor.companyName,
        totalCampaigns,
        totalContacts,
        positiveReplies,
        meetingsScheduled,
        liveCampaigns,
        campaigns_mini,
      };
    });
    const campaigns = new CampaignImpl();
    campaigns.setId(result[0].id);
    campaigns.setName(result[0].name);
    campaigns.setCampaigns(result[0].campaigns_mini);
    campaigns.setMetrics(
      result[0].liveCampaigns,
      result[0].totalContacts,
      result[0].positiveReplies,
      result[0].meetingsScheduled
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
