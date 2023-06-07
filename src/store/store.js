import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slice/contactSlice'

export const store = configureStore({
    reducer: {
userReducer: appReducer,
    }
})