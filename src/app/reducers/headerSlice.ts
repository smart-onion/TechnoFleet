import type {RootState} from "@/app/store.ts";
import {createSlice} from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type {SystemProperties} from "@chakra-ui/react/dist/types/styled-system/generated/system.gen";

interface HeaderState  {
    props?: SystemProperties;
}

const initialState: HeaderState = {
    props: null
}

export const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        changeHeader: (state, action) => {
            state.props = {...action.payload};
        },
    }
})

export const {changeHeader} = headerSlice.actions;

export const selectHeader = (state: RootState) => state.header.props;