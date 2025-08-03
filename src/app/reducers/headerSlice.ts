import {bgColors} from "@/theme/main-colors.ts";
import type {RootState} from "@/app/store.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {SystemProperties} from "./chakra-ui/react/dist/types/styled-system/generated/system.gen";

interface HeaderState  {
    props?: SystemProperties;
}

const initialState: HeaderState = {
    props: {h:"fit", bg: bgColors.main},
}

export const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        changeHeader: (state, action) => {
            state.props = {...state.props, ...action.payload};
            console.log({...state.props, ...action.payload});
        },
    }
})

export const {changeHeader} = headerSlice.actions;

export const selectHeader = (state: RootState) => state.header.bg;