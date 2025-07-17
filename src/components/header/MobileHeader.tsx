import {
    Box,
    Button,
    Center,
    Drawer,
    HStack,
    IconButton,
    Image,
    Separator,
    Stack,
} from "@chakra-ui/react";
import { IoMenu,IoClose  } from "react-icons/io5";
import {Link} from "react-router";
import {TechnoFleetHeader} from "@/components/TechnoFleetHeader.tsx";
import {bgColors} from "@/theme/main-colors.ts";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";

export function MobileHeader({pages}: {pages: string[]}) {
    return (
        <Box display={{base: "block" , md:"none"}}>
            <HStack align={"center"} justify={"space-between"}>
                <Drawer.Root placement={"top"} >
                    <Drawer.Backdrop />
                    <Drawer.Trigger asChild>
                        <IconButton variant="outline">
                            <IoMenu/>
                        </IconButton>
                    </Drawer.Trigger>
                    <Drawer.Positioner p={4}>
                        <Drawer.Content rounded={"md"} bg={bgColors.main}>
                            <Drawer.CloseTrigger asChild>
                                <IconButton variant="outline">
                                    <IoClose/>
                                </IconButton>
                            </Drawer.CloseTrigger>
                            <Center>
                            <Drawer.Header>
                                    <Drawer.Title>Navigation</Drawer.Title>
                            </Drawer.Header>
                            </Center>
                            <Drawer.Context>
                                {(store) =>(
                                    <Drawer.Body>
                                        {pages.map((page, index) => (
                                            <Stack key={index} bg={bgColors.main}>
                                                    <Button variant={"ghost"} onClick={() => store.setOpen(false)}>
                                                        <Link to={page}>{page}</Link>
                                                    </Button>
                                                <Separator size={"md"} />
                                            </Stack>
                                        ))}
                                    </Drawer.Body>
                                )}
                            </Drawer.Context>
                            <Drawer.Footer />
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Drawer.Root>
                <ColorModeButton ml={-28}/>
                <HStack align={"center"}>
                        <Link to={"/"}>
                            <TechnoFleetHeader size={"xl"}/>
                        </Link>
                    <Image src={"/technofleet.png"} height={"20"}/>
                </HStack>
            </HStack>
            <Separator size={"sm"}/>
        </Box>
    )
}