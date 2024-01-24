import { ThunkAction, UnknownAction, configureStore } from "@reduxjs/toolkit";
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
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // This represents the extra argument, which we don't use, so it's unknown
  UnknownAction // Represents the types of actions that can be dispatched
>;
