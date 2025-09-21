import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "@/features/slices/UserSlice";
import CampaignReducer from "@/features/slices/CampaignSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    campaign: CampaignReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
