import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import LoginReducer from "./features/login/loginSlice";
import dashboardReducer from "./features/dashboard/DashboardSlice"
import storage from "redux-persist/lib/storage";
const persistConfig = {
  storage,
  key: "demo-user",
  whitelist: ["userInfo"],
};

const PeristedLoginReducer = persistReducer(persistConfig, LoginReducer);

export const rootReducer = combineReducers({
  login: PeristedLoginReducer,
  dashboardGetData: dashboardReducer
});
