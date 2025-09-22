import axiosInstance from "@/lib/axios";
import { LeadState, LeadStatus } from "../slices/LeadSlice"; // Import Lead interface and LeadStatus enum
import AllAPIRouteMapping from "@/utils/AllAPIRouteMapping";

export default class LeadImpl implements LeadState {
  id: string = "";
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  status: LeadStatus = LeadStatus.NO_COMMENTS; // Default status
  leads: LeadState[] = [];
  is_replied: boolean = false;
  is_unsubscribed: boolean = false;
  is_bounced: boolean = false;
  smartLeadsId: string = "";
  createdAt: string = "";
  updatedAt: string = "";
  campaignId: string = "";
  interested: number = 0;
  meeting_scheduled: number = 0;

  setLeads(leads: LeadState[]) {
    this.leads = leads;
  }

  setMetrics(interested: number, meeting_scheduled: number) {
    this.interested = interested;
    this.meeting_scheduled = meeting_scheduled;
  }

  async getAllLeadsByUserId() {
    const axiosInstanceHandler = new axiosInstance();
    const response = await axiosInstanceHandler.makeCall(
      `${AllAPIRouteMapping.leads.getAll.apiPath}`,
      AllAPIRouteMapping.leads.getAll.method
    );
    if (response.success) {
      return response.data;
    }
  }

  async getLeadMetricsByUserId() {
    const axiosInstanceHandler = new axiosInstance();
    const response = await axiosInstanceHandler.makeCall(
      `${AllAPIRouteMapping.leads.getMetrics.apiPath}`,
      AllAPIRouteMapping.leads.getMetrics.method
    );
    if (response.success) {
      return response.data;
    }
  }
}
