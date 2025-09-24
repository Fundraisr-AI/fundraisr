import CampaignDao from "@/dao/CampaignDao";
import CampaignImpl from "@/features/logic/CampaignImpl";
import errorHandler from "@/helpers/errorHandler";
import { getCurrentUser } from "@/next-auth/utils";
import { CampaignFilters } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const user = await getCurrentUser();

    const { searchParams } = req.nextUrl;
    const statusParams = searchParams.getAll("status[]");
    const filters: CampaignFilters = {}; // Explicitly define type to avoid needing import in output
    if (statusParams && statusParams.length > 0) {
      filters.status = statusParams;
    }

    const geographyParams = searchParams.getAll("geography[]");
    if (geographyParams && geographyParams.length > 0) {
      filters.geography = geographyParams;
    }

    const limitParam = searchParams.get("limit");
    if (limitParam) {
      const limit = Number(limitParam);
      if (!isNaN(limit)) {
        filters.limit = limit;
      }
    }

    const timeRangeParam = searchParams.get("timeRange");
    if (timeRangeParam) {
      filters.timeRange = timeRangeParam;
    }

    const isMetricsParam = searchParams.get("isMetrics");
    if (isMetricsParam) {
      filters.isMetrics = isMetricsParam === "true";
    }

    const campaignDao = new CampaignDao();
    const campaigns = await campaignDao.getAllCampaignsByUserId(
      user?.user?.id || "",
      filters
    );

    const campaignObj = new CampaignImpl();
    campaignObj.initFromPrismaDB(campaigns as any);
    const responseJson = {
      success: true,
      data: campaignObj,
      status: 200,
    };
    return NextResponse.json(responseJson);
  } catch (e) {
    const error = new errorHandler();
    error.internalServerError(e);
    return error.generateError();
  }
}
