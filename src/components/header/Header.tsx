import {MobileHeader} from "@/components/header/MobileHeader.tsx";
import {DesktopHeader} from "@/components/header/DesktopHeader.tsx";
import {services} from "@/data/services.ts";
import {useAppSelector} from "@/app/hooks.ts";
import {MotionBox} from "@/components/MotionBox.tsx";

export function Header() {
    const headerBg = useAppSelector(state => state.header.props)
    return (
        <MotionBox position={"sticky"}
                   h={0}
                   bg={"red"}
                   top={0}
                   {...headerBg}
                   zIndex={"1001"}
                   transition={{duration: 0.2}}
        >
            <MobileHeader pages={[...services, "About", "Contacts"]}/>
            <DesktopHeader services={[...services]}/>
        </MotionBox>);
}