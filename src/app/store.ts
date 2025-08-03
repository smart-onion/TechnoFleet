import {configureStore} from "@reduxjs/toolkit";
import {headerSlice} from "@/app/reducers/headerSlice.ts";

export const store = configureStore({
    reducer: {
        header: headerSlice.reducer,
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]