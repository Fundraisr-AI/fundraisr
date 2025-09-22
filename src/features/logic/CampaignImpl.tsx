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
  totalActiveCampaigns: Number = 0;
  totalLeads: Number = 0;
  positiveReplied: Number = 0;
  meetingsBooked: Number = 0;
  replyRate: Number = 0;
  positive: Number = 0;

  setMetrics(
    totalActiveCampaigns: Number,
    totalLeads: Number,
    positiveReplied: Number,
    meetingsBooked: Number
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
}
