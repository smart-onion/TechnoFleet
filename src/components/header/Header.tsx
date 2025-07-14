import {Box} from "@chakra-ui/react";

import {MobileHeader} from "@/components/header/MobileHeader.tsx";
import {DesktopHeader} from "@/components/header/DesktopHeader.tsx";
export function Header(){

    const services = [
        "Crewing",
        "Certificates",
        "Supply",
        "Insurance",
        "IT Service",
        "Yachts"
    ]

    return (
        <Box position={"sticky"}
             top={0}
             paddingTop={{base: 10, md: 0}} backgroundColor={"white"} zIndex={"sticky"}>
            <MobileHeader pages={[...services, "About", "Contacts"]}/>
            <DesktopHeader services={[...services]}/>
        </Box>);
}