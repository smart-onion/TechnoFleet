import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {ServicePreviewCard} from "@/components/ServicePreviewCard.tsx";
import {useInView} from "react-intersection-observer";
import {useState} from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import "./Home.css"

const servicesDescription= [
    {
        Icon: FaPeopleRoof,
        heading: "Crewing",
        text: "Professional crew recruitment and management for safe and efficient operations."
    },
    {
        Icon: PiCertificateBold,
        heading: "Certificates",
        text: "Handling maritime documentation and compliance with international standards.",
    }
]

export function Home() {
    const [isHover, setHover] = useState(false);
    const [servicesView, inServicesView] = useInView();
    return (<>
        <Box position={"relative"} justifyItems={"center"}>
            <Grid   templateColumns={"repeat(2,1fr)"}
                    gap={6}
                    marginBottom={40}
            >
                <GridItem colSpan={1}>
                    <Box paddingTop={200} backgroundColor={""} height={"full"} className={"homeText1"}>
                    <Heading size={"4xl"}>Your Global Partner in Maritime Crewing</Heading>
                    <Text width={"80%"} marginTop={"2em"}>Connecting top-tier seafarers with leading
                        shipping companies across the world — efficiently,
                        compliantly, and with care.
                    </Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} backgroundColor={""} height={"full"}>
                    <Box position={"relative"} height={"full"} >
                        <Image src={"/ship-photos/ship-top.jpg"}
                               rounded="md"
                               width={"30em"}
                               position={"inherit"}
                               top={"10"}
                               left={"40%"}
                               className={"backImage"}
                               onMouseOver={() => setHover(true)}
                               onMouseLeave={() => setHover(false)}
                        />
                        <Image src={"/ship-photos/tanker.jpg"}
                               rounded="md"
                               width={"30em"}
                               position={"absolute"}
                               top={"80"}
                               className={isHover ? "goBack" : "goForward"}
                        />
                    </Box>
                </GridItem>
            </Grid
            >
            <Grid   ref={servicesView}
                    templateColumns={"repeat(7,1fr)"}
                    gap={6}
                    className={inServicesView ? "inServicesView" : ""}
            >
                <GridItem colSpan={6}>
                    <Heading textAlign={"center"} size={"6xl"} marginBottom={"2%"}>Our Services at a Glance</Heading>
                    <Text textAlign={"center"}  width={"80%"} margin={"auto"}>
                        We offer a comprehensive range of maritime services designed to support vessels, crew, and
                        operations worldwide. From crewing and certification to IT and yacht management, our solutions
                        are built on trust, compliance, and efficiency.
                    </Text>
                </GridItem>
                {servicesDescription.map((service, index) => (
                    <GridItem colSpan={2}>
                        <ServicePreviewCard MyIcon={service.Icon}
                                            heading={service.heading}
                                            text={service.text}
                        />
                    </GridItem>
                ))}

                <GridItem colSpan={2} backgroundColor={"red"}>asdasdasdasdasda</GridItem>
                <GridItem colSpan={2} backgroundColor={"red"}>a</GridItem>
                <GridItem colSpan={2} backgroundColor={"red"}>a</GridItem>
                <GridItem colSpan={2} backgroundColor={"red"}>a</GridItem>
                <GridItem colSpan={2} backgroundColor={"red"}>a</GridItem>
            </Grid>
        </Box>
    </>)
}