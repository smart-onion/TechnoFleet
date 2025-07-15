import {Heading, HStack, IconButton, Image, Link, Separator, Text, VStack} from "@chakra-ui/react";
import {TechnoFleetHeader} from "@/components/TechnoFleetHeader.tsx";
import {FaInstagram, FaLinkedin, FaPhoneAlt, FaTelegramPlane} from "react-icons/fa";
import {services} from "@/components/data/services.ts";
import {IoMdMail} from "react-icons/io";

export function InnerFooter(){
    return(
        <>
            <VStack>
                <HStack>
                    <Link href={"/"}>
                        <Image
                            src={"/technofleet.png"}
                            height={{base:"28"}}
                        />
                    </Link>
                    <Link href={"/"}>
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
                <Heading>Services</Heading>
                <Separator size={"lg"}/>
                {services.map((service, i) => (
                    <Link key={i} href={service}>{service}</Link>
                ))}
            </VStack>
            <VStack pt={5}>
                <Heading>Company</Heading>
                <Separator size={"lg"}/>
                <Link href={"/about"}>About</Link>
                <Link href={"/contacts"}>Contacts</Link>
            </VStack>
            <VStack pt={5}>
                <Heading>Contact us</Heading>
                <Separator size={"lg"}/>
                <HStack>
                    <IoMdMail/>
                    <Link>info@technofleet.org</Link>
                </HStack>
                <HStack>
                    <FaPhoneAlt/>
                    <Text>+(380) 63 357 15 52</Text>
                </HStack>
            </VStack></>
    )
}