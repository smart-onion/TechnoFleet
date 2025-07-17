import {
    Box,
    HStack,
    Separator,
    Link,
    type BoxProps, Span
} from "@chakra-ui/react";
import {InnerFooter} from "@/components/footer/InnerFooter.tsx";
import {bgColors} from "@/theme/main-colors.ts";


export function DesktopFooter(props?: BoxProps) {
    return (
        <Box
            {...props}
            bg={bgColors.main}
            width={"full"}
            alignContent={"start"}
            pt={20}
            borderTop={"1px solid white"}
        >
            <HStack justify={"space-evenly"}
            align={"start"}
            >
            <InnerFooter/>
            </HStack>
            <Separator size={"lg"}/>
            <HStack px={"60"} justify={"space-between"}>
                <Link href={"/Privacy"}>© 2025-TechnoFleet <Span color={"blue"}>Privacy</Span></Link>
            </HStack>
        </Box>
    )
}