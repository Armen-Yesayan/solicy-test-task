import { configureStore } from "@reduxjs/toolkit";

import { accountsApi } from "./rtk-query/accounts.api";
import { ownerApi } from "./rtk-query/owner.api";

const store = configureStore({
  reducer: {
    [accountsApi.reducerPath]: accountsApi.reducer,
    [ownerApi.reducerPath]: ownerApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(accountsApi.middleware, ownerApi.middleware)
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
