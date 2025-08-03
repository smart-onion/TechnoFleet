import {Box} from "@chakra-ui/react";
import {MobileHeader} from "@/components/header/MobileHeader.tsx";
import {DesktopHeader} from "@/components/header/DesktopHeader.tsx";
import {services} from "@/data/services.ts";
import {useAppSelector, useAppDispatch} from "@/app/hooks.ts";
import {changeHeader} from "@/app/reducers/headerSlice.ts";
import {bgColors} from "@/theme/main-colors.ts";

export function Header(){
    const headerBg = useAppSelector(state => state.header.props)
    const dispatch = useAppDispatch();

    return (
        <Box position={"sticky"}
             h={0}
             bg={"red"}
             top={0}
             {...headerBg}
             zIndex={"1001"}
        onLoad={() => dispatch(changeHeader({bg:bgColors.main, h: "0"}))}
        >
            <MobileHeader pages={[...services, "About", "Contacts"]}/>
            <DesktopHeader services={[...services]}/>
        </Box>);
}