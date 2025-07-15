import {Header} from "../components/header/Header.tsx"
import {Outlet} from "react-router";
import {Box} from "@chakra-ui/react";

export function Layout(){
    return <Box overflowX="hidden">
        <Header/>
        <Outlet/>
    </Box>
}