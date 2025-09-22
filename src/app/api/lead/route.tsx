import CampaignDao from "@/dao/CampaignDao";
import LeadDao from "@/dao/LeadDao";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { LeadFilters } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();
    const { searchParams } = req.nextUrl;
    const statusParams = searchParams.getAll("status[]");
    const filters: LeadFilters = {}; // Explicitly define type to avoid needing import in output
    if (statusParams && statusParams.length > 0) {
      filters.status = statusParams;
    }

    const limitParam = searchParams.get("limit");
    if (limitParam) {
      const limit = Number(limitParam);
      if (!isNaN(limit)) {
        filters.limit = limit;
      }
    }

    const leadDao = new LeadDao();

    const leads = await leadDao.getAllLeadsByUserId(
      user?.user?.id || "",
      filters
    );
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
