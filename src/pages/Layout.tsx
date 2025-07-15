import {Header} from "../components/header/Header.tsx"
import {Outlet} from "react-router";
import {Box} from "@chakra-ui/react";
import {Footer} from "@/components/footer/Footer.tsx";

export function Layout(){
    return <Box overflowX={{base:"hidden"}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </Box>
}