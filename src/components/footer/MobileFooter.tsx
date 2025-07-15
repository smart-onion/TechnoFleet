import {Link, Separator, type StackProps, VStack} from "@chakra-ui/react";
import {InnerFooter} from "@/components/footer/InnerFooter.tsx";

export function MobileFooter(props?: StackProps) {
    return (
        <VStack {...props} pt={32}>
            <InnerFooter/>
            <Separator size={"lg"}/>
            <VStack>
                <Link href={"/Privacy"}>© 2025-TechnoFleet Privacy</Link>
            </VStack>
        </VStack>
    )
}