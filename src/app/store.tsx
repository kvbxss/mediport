import { configureStore } from "@reduxjs/toolkit";

import { tagsApi } from "../service/tagsApi";

const store = configureStore({
  reducer: {
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tagsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
