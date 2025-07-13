import {Button, HStack, Menu, Heading, Separator, Link as ChakraLink} from "@chakra-ui/react";
import {Image} from "@chakra-ui/react";
import {Link, NavLink} from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import {useState} from "react";
export function Header(){
    const [service, setService] = useState("Services");

    const services = [
        "Crewing",
        "Certificates",
        "Supply",
        "Insurance",
        "IT Service",
        "Yachts"
    ]

    return (<>
        <HStack width={"80%"} margin={"auto"} backgroundColor={""} align={"center"}>
            <NavLink to={"/"}>
                <HStack>
                    <Image src="/technofleet.png" width={40} />
                    <ChakraLink><Heading size={"2xl"} color={"blue.300"}>TechnoFleet</Heading></ChakraLink>
                </HStack>
            </NavLink>

            <HStack width={"full"} justify={"start"} paddingX={200}>
                <Menu.Root>
                    <Menu.Trigger>
                        <Button variant={"ghost"}>
                            {service}
                            <IoIosArrowDown/>
                        </Button>
                        {(service !== "Services") && <Separator size={"lg"}/>}
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
    </>);
}