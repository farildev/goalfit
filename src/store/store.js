import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  // [authSlice.reducerPath] : authSlice.reducer
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage : AsyncStorage,
    whitelist: [],
  },
  reducers
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };