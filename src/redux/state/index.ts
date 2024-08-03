import { createSlice } from "@reduxjs/toolkit";
import { globalAgent } from "http";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        value: 0,
    },
    reducers: {
        
    }
})

export const {} = globalSlice.actions
export default globalSlice.reducer