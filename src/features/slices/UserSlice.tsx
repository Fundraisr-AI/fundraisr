import { RootState } from "@/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  name: string;
  email: string;
  loading: boolean;
  emailVerified: boolean;
  password?: string;
  role?: string;
  image?: string;
  plan: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  loading: false,
  emailVerified: false,
  password: "",
  role: "",
  image: "",
  plan: "",
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      state = initialState;
    },
  },
  extraReducers: (builder) => {},
});

export function getInitialUserState() {
  return initialState;
}

export const { setUser, clearUser } = userSlice.actions;

//selectors
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
