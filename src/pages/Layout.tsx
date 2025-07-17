import {Header} from "../components/header/Header.tsx"
import {Outlet} from "react-router";
import {Box} from "@chakra-ui/react";
import {Footer} from "@/components/footer/Footer.tsx";

export function Layout(){
    return <Box >
        <Header/>
        <Box overflowX={{base:"hidden"}}>
        <Outlet/>
        </Box>
        <Footer/>
    </Box>
}