import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetailsState {
  id: string;
  companyName?: string;
  smartLeadsId?: string;
  createdAt: string;
  updatedAt: string;
  loading: boolean;
  fundraisingTarget: number;
  capitalCommitted: number;
}

export const initialState: UserDetailsState = {
  id: "",
  companyName: "",
  smartLeadsId: "",
  createdAt: "",
  updatedAt: "",
  loading: false,
  fundraisingTarget: 0,
  capitalCommitted: 0,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<UserDetailsState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserDetails } = userDetailsSlice.actions;
export function getInitialUserDetailsState() {
  return initialState;
}

export default userDetailsSlice.reducer;
