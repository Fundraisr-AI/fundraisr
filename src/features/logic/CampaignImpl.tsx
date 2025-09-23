import axiosInstance from "@/lib/axios";
import { CampaignState } from "../slices/CampaignSlice";
import AllAPIRouteMapping from "@/utils/AllAPIRouteMapping";

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

  async getAllCampaignStatusByUser() {
    const axiosInstanceHandler = new axiosInstance();
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
