import {
    Box,
    HStack,
    Separator,
    Link,
    type BoxProps, Span
} from "@chakra-ui/react";
import {InnerFooter} from "@/components/footer/InnerFooter.tsx";


export function DesktopFooter(props?: BoxProps) {
    return (
        <Box
            {...props}
            backgroundColor={"gray.100"}
            width={"full"}
            alignContent={"start"}
            pt={20}
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