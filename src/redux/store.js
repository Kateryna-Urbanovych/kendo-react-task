import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootUsersReducer } from "./users";

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["users"],
};

const store = configureStore({
  reducer: persistReducer(usersPersistConfig, rootUsersReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
