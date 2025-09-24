import axiosInstance from "@/lib/axios";
import { CampaignState } from "../slices/CampaignSlice";
import AllAPIRouteMapping from "@/utils/AllAPIRouteMapping";
import { Campaign, UserResponse } from "@/dbtype";
import { UserDetailsState } from "../slices/UserDetailsSlice";
import UserDetailsImpl from "./UserDetailsImpl";
import UserImpl from "./UserImpl";
import { CampaignFilters } from "@/types";

export default class CampaignImpl implements CampaignState {
  id: string = "";
  name: string = "";
  status?: string | undefined;
  createdAt: string = "";
  updatedAt: string = "";
  smartLeadsId: string = "";
  userDetailsId: string = "";
  loading: boolean = false;
  campaigns: CampaignState[] = [];
  totalActiveCampaigns: number = 0;
  totalLeads: number = 0;
  positiveReplied: number = 0;
  meetingsBooked: number = 0;
  replyRate: number = 0;
  positive: number = 0;
  geography: string = "";
  leadList: string = "";
  investor: string = "";
  copy: string = "";
  user?: UserResponse;
  geographyDistribution?: {
    [key: string]: number;
  };
  positiveReplyMetrics?: {
    [key: string]: number;
  };

  setPositiveReplyMetrics(positiveReplyMetrics: { [key: string]: number }) {
    this.positiveReplyMetrics = positiveReplyMetrics;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setMetrics(
    totalActiveCampaigns: number,
    totalLeads: number,
    positiveReplied: number,
    meetingsBooked: number
  ) {
    this.totalActiveCampaigns = totalActiveCampaigns;
    this.totalLeads = totalLeads;
    this.positiveReplied = positiveReplied;
    this.meetingsBooked = meetingsBooked;
  }

  setCampaigns(campaigns: CampaignState[]) {
    this.campaigns = campaigns;
  }

  initFromPrismaDB(data: UserResponse) {
    if (data) {
      const user = new UserImpl();
      user.initFromDB(data);
      this.user = user;
    }

    if (data?.details?.campaigns) {
      this.campaigns = data.details.campaigns.map(
        (c: Campaign): CampaignState => ({
          id: c.id,
          name: c.name,
          status: c.status ?? "",
          createdAt: c.createdAt,
          updatedAt: c.updatedAt,
          smartLeadsId: c.smartLeadsId,
          userDetailsId: c.userDetailsId,
          copy: c.copy ?? "",
          geography: c.geography ?? "",
          leadList: c.leadList ?? "",
          investor: c.investor ?? "",

          // Fields that aren’t present in the DB response
          loading: false,
          campaigns: [], // nested campaigns if you need them later
          totalActiveCampaigns: 0,
          totalLeads: c.totalLeads ?? 0,
          positiveReplied: 0,
          meetingsBooked: 0,
          replyRate: 0,
          positive: 0,
          positiveReplyMetrics: c.positiveReplyMetrics ?? {},
        })
      );
    }
  }

  async getAllCampaignStatusByUser(filters: CampaignFilters) {
    const axiosInstanceHandler = new axiosInstance();
    axiosInstanceHandler.setParams(filters);
    const response = await axiosInstanceHandler.makeCall(
      `${AllAPIRouteMapping.campaigns.getAll.apiPath}`,
      AllAPIRouteMapping.campaigns.getAll.method
    );
    if (response.success) {
      return response.data;
    }
  }

  async getCampaignMetricsByUser() {
    const axiosInstanceHandler = new axiosInstance();
    const response = await axiosInstanceHandler.makeCall(
      `${AllAPIRouteMapping.campaigns.getMetrics.apiPath}`,
      AllAPIRouteMapping.campaigns.getMetrics.method
    );
    if (response.success) {
      return response.data;
    }
  }

  async getCampaignInvestorTypeDistributionMetrics() {
    const axiosInstanceHandler = new axiosInstance();
    const response = await axiosInstanceHandler.makeCall(
      `${AllAPIRouteMapping.campaigns.getMetricsInvestorTypeDistribution.apiPath}`,
      AllAPIRouteMapping.campaigns.getMetricsInvestorTypeDistribution.method
    );
    if (response.success) {
      return response.data;
    }
  }
}
function campaign(
  value: Campaign,
  index: number,
  array: Campaign[]
): CampaignState {
  throw new Error("Function not implemented.");
}
