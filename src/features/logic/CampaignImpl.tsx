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
}
