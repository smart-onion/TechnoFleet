import {Box} from "@chakra-ui/react";

import {MobileHeader} from "@/components/header/MobileHeader.tsx";
import {DesktopHeader} from "@/components/header/DesktopHeader.tsx";
import {services} from "@/components/data/services.ts";
export function Header(){



    return (
        <Box position={"sticky"}
             top={0}
             // paddingTop={{base: 0, md: 0}}
             backgroundColor={"white"}
             zIndex={"1001"}>
            <MobileHeader pages={[...services, "About", "Contacts"]}/>
            <DesktopHeader services={[...services]}/>
        </Box>);
}