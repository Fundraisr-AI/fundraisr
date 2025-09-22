import LeadDao from "@/dao/LeadDao";
import LeadImpl from "@/features/logic/LeadImpl";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const leadDao = new LeadDao();

    const leadMetrics: any = await leadDao.getDealMetricsByUserId(
      user?.user?.id || ""
    );
    const leads: any = await leadDao.getAllLeadsByUserId(user?.user?.id || "");

    const lead = new LeadImpl();
    lead.setMetrics(leadMetrics["INTERESTED"], leadMetrics["MEETING_BOOKED"]);
    lead.setLeads(leads);

    const responseJson = {
      success: true,
      data: lead,
      status: 200,
    };
    return NextResponse.json(responseJson);
  } catch (e) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
