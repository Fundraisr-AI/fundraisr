import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CampaignImpl from "../logic/CampaignImpl";
import { RootState } from "@/store";
import {
  GetAllCampaignStatusByUserResponse,
  GetCampaignInvestorTypeDistributionMetricsResponse,
} from "@/response";

export interface CampaignState {
  id: string;
  name: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
  smartLeadsId: string;
  userDetailsId: string;
  loading: boolean;
  campaigns: CampaignState[];
  totalActiveCampaigns: Number;
  totalLeads: Number;
  positiveReplied: Number;
  meetingsBooked: Number;
  replyRate: Number;
  positive: Number;
  geography: String;
  leadList: String;
  investor: String;
  copy: String;
}

const initialState: CampaignState = {
  id: "",
  name: "",
  status: "",
  createdAt: "",
  updatedAt: "",
  smartLeadsId: "",
  userDetailsId: "",
  loading: false,
  campaigns: [],
  totalActiveCampaigns: 0,
  totalLeads: 0,
  positiveReplied: 0,
  meetingsBooked: 0,
  replyRate: 0,
  positive: 0,
  geography: "",
  leadList: "",
  investor: "",
  copy: "",
};

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<CampaignState>) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampaignStatusByUserAsync.rejected, (state, action) => {
        // Handle error state if needed
      })
      .addCase(getAllCampaignStatusByUserAsync.pending, (state, action) => {
        // Handle pending state if needed
      })
      .addCase(
        getAllCampaignStatusByUserAsync.fulfilled,
        (
          state,
          action: PayloadAction<GetAllCampaignStatusByUserResponse[]>
        ) => {
          if (action.payload.length > 0) {
            state.campaigns = action.payload.map((campaignResponse) => ({
              ...campaignResponse,
              loading: false, // Default value for the 'loading' property of each CampaignState item
              campaigns: [], // Default value for the 'campaigns' property of each CampaignState item
              totalActiveCampaigns: 0,
              totalLeads: 0,
              positiveReplied: 0,
              meetingsBooked: 0,
              replyRate: 0,
              positive: 0,
            }));
          }
        }
      )
      .addCase(getCampaignMetricsByUserAsync.pending, (state) => {})
      .addCase(
        getCampaignMetricsByUserAsync.fulfilled,
        (state, action: PayloadAction<CampaignState[]>) => {
          state.loading = false;
          Object.assign(state, action.payload);
        }
      )
      .addCase(getCampaignMetricsByUserAsync.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(
        getCampaignInvestorTypeDistributionMetricsAsync.pending,
        (state) => {}
      )
      .addCase(
        getCampaignInvestorTypeDistributionMetricsAsync.fulfilled,
        (
          state,
          action: PayloadAction<GetCampaignInvestorTypeDistributionMetricsResponse>
        ) => {
          state.loading = false;
          state.totalActiveCampaigns = action.payload.totalActiveCampaigns;
          state.totalLeads = action.payload.totalLeads;
          state.positiveReplied = action.payload.positiveReplied;
          state.meetingsBooked = action.payload.meetingsBooked;
          state.replyRate = action.payload.replyRate;
          state.positive = action.payload.positive;
        }
      )
      .addCase(
        getCampaignInvestorTypeDistributionMetricsAsync.rejected,
        (state, action) => {
          state.loading = false;
        }
      );
  },
});

export const getAllCampaignStatusByUserAsync = createAsyncThunk(
  "campaign/getAllCampaignStatusByUser",
  async (_, thunkAPI) => {
    try {
      const campaign = new CampaignImpl();
      const data = await campaign.getAllCampaignStatusByUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCampaignMetricsByUserAsync = createAsyncThunk(
  "lead/getCampaignMetricsByUser",
  async (_, thunkAPI) => {
    try {
      // Assuming LeadImpl exists and has a method to fetch leads by campaign ID
      const campaign = new CampaignImpl();
      const data = await campaign.getCampaignMetricsByUser();
      if (data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("No data received for leads");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "An unknown error occurred while fetching leads"
      );
    }
  }
);

export const getCampaignInvestorTypeDistributionMetricsAsync = createAsyncThunk(
  "lead/getCampaignInvestorTypeDistributionMetrics",
  async (_, thunkAPI) => {
    try {
      // Assuming LeadImpl exists and has a method to fetch leads by campaign ID
      const campaign = new CampaignImpl();
      const data = await campaign.getCampaignInvestorTypeDistributionMetrics();
      if (data) {
        return data;
      } else {
        return thunkAPI.rejectWithValue("No data received for leads");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "An unknown error occurred while fetching leads"
      );
    }
  }
);

export const selectCampaign = (state: RootState) => state.campaign;
export default campaignSlice.reducer;
