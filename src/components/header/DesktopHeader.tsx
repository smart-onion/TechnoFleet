import {Box, Button, Heading, HStack, Image, Menu, Separator} from "@chakra-ui/react";
import {Link, NavLink} from "react-router";
import {IoIosArrowDown} from "react-icons/io";
import {useState} from "react";

export function DesktopHeader({services}: {services: string[]}) {
    const [service, setService] = useState("Services");

    return(
    <Box display={{base:"none", md: "block"}}>
        <HStack margin={"auto"} align={"center"} px={40}>
            <NavLink to={"/"}>
                <HStack>
                    <Image src="/technofleet.png" width={20} />
                    <Heading size={"2xl"} color={"blue.300"}>TechnoFleet</Heading>
                </HStack>
            </NavLink>

            <HStack width={"full"} justify={"start"} paddingX={200}>
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Box>
                        <Button variant={"ghost"}>
                            {service}
                            <IoIosArrowDown/>
                        </Button>
                        {(service !== "Services") && <Separator size={"lg"}/>}
                        </Box>
                    </Menu.Trigger>
                    <Menu.Positioner>
                        <Menu.Content alignItems={"center"}>
                            {services.map((item, index) => (
                                <Menu.Item key={index} value={item} onClick={() =>setService(item)}>
                                    <Link to={item}>{item}</Link>
                                </Menu.Item>
                            ))}
                        </Menu.Content>
                    </Menu.Positioner>
                </Menu.Root>
                <NavLink to="about">
                    {({ isActive }) => (
                        <>
                            <Button variant="ghost" onClick={() => setService("Services")}>
                                About
                            </Button>
                            {isActive &&
                                <>
                                    <Separator size={"lg"}/>
                                </>}

                        </>
                    )}
                </NavLink>

                <NavLink to="contacts">
                    {({ isActive }) => (
                        <>
                            <Button variant="ghost" onClick={() => setService("Services")}>
                                Contacts
                            </Button>
                            {isActive &&
                                <>
                                    <Separator size={"lg"}/>
                                </>}

                        </>
                    )}
                </NavLink>
            </HStack>
        </HStack>
        <Separator size={"lg"}/>
    </Box>
)
}