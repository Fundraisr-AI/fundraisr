import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import LeadImpl from "../logic/LeadImpl"; // Assuming a LeadImpl class exists for API calls
import { RootState } from "@/store";

// Define LeadStatus enum based on prisma/schema.prisma context
export enum LeadStatus {
  NO_COMMENTS = "NO_COMMENTS",
  INTERESTED = "INTERESTED",
  MEETING_REQUESTED = "MEETING_REQUESTED",
  NOT_INTERESTED = "NOT_INTERESTED",
  DO_NOT_CONTACT = "DO_NOT_CONTACT",
  INFORMATION_REQUEST = "INFORMATION_REQUEST",
  OUT_OF_OFFICE = "OUT_OF_OFFICE",
  WRONG_PERSON = "WRONG_PERSON",
  VC_MANUAL_APPLICATION = "VC_MANUAL_APPLICATION",
  MEETING_BOOKED = "MEETING_BOOKED",
}

// Interface for a single Lead item
export interface LeadState {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  status: LeadStatus;
  leads: LeadState[];
  is_replied: boolean;
  is_unsubscribed: boolean;
  is_bounced: boolean;
  smartLeadsId: string;
  createdAt: string; // Using string for simplicity, can be Date
  updatedAt: string; // Using string for simplicity, can be Date
  campaignId: string;
  interested: number;
  meeting_scheduled: number;
}

const initialState = {
  leads: [] as LeadState[],
  loading: false,
  error: "",
  currentCampaignId: "",
  interested: 0,
  meeting_scheduled: 0,
};

const leadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLeadsByUserIdAsync.pending, (state) => {})
      .addCase(
        getAllLeadsByUserIdAsync.fulfilled,
        (state, action: PayloadAction<LeadState[]>) => {
          state.loading = false;
          state.leads = action.payload;
        }
      )
      .addCase(getAllLeadsByUserIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch leads";
        state.leads = []; // Clear leads on error
      })
      .addCase(getLeadMetricsByUserIdAsync.pending, (state) => {})
      .addCase(
        getLeadMetricsByUserIdAsync.fulfilled,
        (state, action: PayloadAction<LeadState[]>) => {
          state.loading = false;
          Object.assign(state, action.payload);
        }
      )
      .addCase(getLeadMetricsByUserIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch leads";
        state.leads = []; // Clear leads on error
      });
  },
});

export const getAllLeadsByUserIdAsync = createAsyncThunk(
  "lead/getAllLeadsByUserId",
  async (_, thunkAPI) => {
    try {
      // Assuming LeadImpl exists and has a method to fetch leads by campaign ID
      const leadImpl = new LeadImpl();
      const data = await leadImpl.getAllLeadsByUserId();
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

export const getLeadMetricsByUserIdAsync = createAsyncThunk(
  "lead/getLeadMetricsByUserId",
  async (_, thunkAPI) => {
    try {
      // Assuming LeadImpl exists and has a method to fetch leads by campaign ID
      const leadImpl = new LeadImpl();
      const data = await leadImpl.getLeadMetricsByUserId();
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

export const selectLead = (state: RootState) => state.lead;
export default leadSlice.reducer;
