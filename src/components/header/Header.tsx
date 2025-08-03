import {MobileHeader} from "@/components/header/MobileHeader.tsx";
import {DesktopHeader} from "@/components/header/DesktopHeader.tsx";
import {services} from "@/data/services.ts";
import {bgColors} from "@/theme/main-colors.ts";
import {Box} from "@chakra-ui/react";

export function Header() {
    return (
        <Box position={"sticky"}
             top={0}
             h={"fit"}
             zIndex={"1001"}
             bg={bgColors.header}
             backdropFilter={"blur(15px)"}


        >
            <MobileHeader pages={[...services, "About", "Contacts"]}/>
            <DesktopHeader services={[...services]}/>
        </Box>);
}