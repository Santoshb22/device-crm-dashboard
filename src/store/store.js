import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import devicesReducer from "./devicesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        devices: devicesReducer
    }
})