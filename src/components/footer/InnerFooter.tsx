import {Accordion, Heading, HStack, IconButton, Image, Separator, Text, VStack} from "@chakra-ui/react";
import {TechnoFleetHeader} from "@/components/TechnoFleetHeader.tsx";
import {FaInstagram, FaLinkedin, FaPhoneAlt, FaTelegramPlane} from "react-icons/fa";
import {services} from "@/data/services.ts";
import {IoMdMail} from "react-icons/io";
import {Link} from "react-router"
export function InnerFooter(){
    return(
        <>
            <VStack>
                <HStack>
                    <Link to={"/"}>
                        <Image
                            src={"/technofleet.png"}
                            height={{base:"28"}}
                        />
                    </Link>
                    <Link to={"/"}>
                        <TechnoFleetHeader/>
                    </Link>
                </HStack>
                <Text opacity={0.7}>
                    Explore more:
                </Text>
                <HStack>
                    <IconButton variant={"ghost"}>
                        <FaLinkedin/>
                    </IconButton>
                    <IconButton variant={"ghost"}>
                        <FaInstagram/>
                    </IconButton>
                    <IconButton variant={"ghost"}>
                        <FaTelegramPlane/>
                    </IconButton>
                </HStack>
            </VStack>
            <VStack pt={5}>
                <Accordion.Root collapsible defaultValue={["1"]}>
                        <Accordion.Item value={"1"}>
                            <Accordion.ItemTrigger position={"relative"}>
                                <Heading flex="1"
                                         position={{base:"absolute", md:"inherit"}}
                                         left={{base:"50%", md:"inherit"}}
                                         transform={{base: "translate(-50%, 0)", md:"none"}}
                                         px={{base:22, md:0}}
                                         textAlign={{base:"start", md:"start"}}
                                >Services</Heading>
                                <Accordion.ItemIndicator />
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <Accordion.ItemBody>
                                    <VStack align={{base:"center", md:"start"}} px={{base:2, md:0}}>
                                    {services.map((service, i) => (
                                        <Link key={i} to={service}>{service}</Link>
                                    ))}
                                    </VStack>
                                </Accordion.ItemBody>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                </Accordion.Root>
            </VStack>
            <VStack pt={5} align={{base:"center", md:"start"}} px={{base:2, md:0}}>
                <Heading>Company</Heading>
                <Separator size={"lg"}/>
                <Link to={"/about"}>About</Link>
                <Link to={"/contacts"}>Contacts</Link>
            </VStack>
            <VStack pt={5} >
                <Heading>Contact us</Heading>
                <Separator size={"lg"}/>
                <HStack>
                    <IoMdMail/>
                    <Text>info@technofleet.org</Text>
                </HStack>
                <HStack>
                    <FaPhoneAlt/>
                    <Text>+(380) 63 357 15 52</Text>
                </HStack>
            </VStack></>
    )
}