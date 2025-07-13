import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {ServicePreviewCard} from "@/components/ServicePreviewCard.tsx";
import {useInView} from "react-intersection-observer";
import {useState} from "react";
import {servicesDescription} from "@/components/data/servicesDescription.ts";
import "./Home.css"


export function Home() {
    const [isHover, setHover] = useState(false);
    const [servicesView, inServicesView] = useInView();
    return (<>
        <Box position={"relative"} justifyItems={"center"} colorPalette={"white"}>

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
                               className={`${isHover ? "goBack" : "goForward"} appear`}
                        />
                    </Box>
                </GridItem>
            </Grid
            >
            <Grid   ref={servicesView}
                    templateColumns={"repeat(6,1fr)"}
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

                        <ServicePreviewCard key={index}
                            MyIcon={service.Icon}
                                            heading={service.heading}
                                            text={service.text}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    </>)
}