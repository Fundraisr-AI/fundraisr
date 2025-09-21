import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import CampaignImpl from "../logic/CampaignImpl";
import { RootState } from "@/store";
import { GetAllCampaignStatusByUserResponse } from "@/response";

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
          state.campaigns = action.payload.map((campaignResponse) => ({
            ...campaignResponse,
            loading: false, // Default value for the 'loading' property of each CampaignState item
            campaigns: [], // Default value for the 'campaigns' property of each CampaignState item
          }));
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

export const selectCampaign = (state: RootState) => state.campaign;
export default campaignSlice.reducer;
