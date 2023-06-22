import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from "../slice/ChatSlice";

export const store = configureStore({
    reducer:{
        ChatSlice
    }

})