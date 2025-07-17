import {Header} from "../components/header/Header.tsx"
import {Outlet} from "react-router";
import {Box} from "@chakra-ui/react";
import {Footer} from "@/components/footer/Footer.tsx";
import {bgColors} from "@/theme/main-colors.ts";

export function Layout(){
    return <Box bg={bgColors.main}>
        <Header/>
            <Box overflowX={{base:"hidden"}}>
                <Outlet/>
            </Box>
        <Footer/>
    </Box>
}