import { createSlice } from "@reduxjs/toolkit";
import { devices } from "../staticData/data";

localStorage.setItem("devices", JSON.stringify(devices));
const initialState = {
    devicesList: JSON.parse(localStorage.getItem("devices")) || []
}

const devicesSlice = createSlice({
    name: "devices",
    initialState,
    reducers: {
        addDevice: (state, action) => {
            state.devicesList.push(action.payload);
            localStorage.setItem("devices", JSON.stringify(state.devicesList));
        },

        updateDevice: (state, action) => {
            const idx = state.devicesList.find(device => device.id === action.payload.id);
            if(idx !== -1) {
                state.devicesList[idx] = action.payload;
                localStorage.setItem("devices", JSON.stringify(state.devicesList));
            }
        },

        deleteDevice: (state, action) => {
            state.devicesList.filter(device => device.id !== action.payload);
            localStorage.setItem("devices", JSON.stringify(state.devicesList));
        }
    }
})

export const { addDevice, updateDevice, deleteDevice } = devicesSlice.actions;
export default devicesSlice.reducer;