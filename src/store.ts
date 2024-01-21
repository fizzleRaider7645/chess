import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import boardStateReducer from "./features/board/boardSlice";

export const store = configureStore({
  reducer: {
    boardState: boardStateReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // <-- This was 'unknown', now it aligns with ThunkDispatch
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
