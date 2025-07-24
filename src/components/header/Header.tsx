import {Box} from "@chakra-ui/react";

import {MobileHeader} from "@/components/header/MobileHeader.tsx";
import {DesktopHeader} from "@/components/header/DesktopHeader.tsx";
import {services} from "@/data/services.ts";
//import {bgColors} from "@/theme/main-colors.ts";
export function Header(){



    return (
        <Box position={"sticky"}
             top={0}
             bg={"red"}
             zIndex={"1001"}>
            <MobileHeader pages={[...services, "About", "Contacts"]}/>
            <DesktopHeader services={[...services]}/>
        </Box>);
}