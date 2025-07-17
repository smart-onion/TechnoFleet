import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {ServicePreviewCard} from "@/components/ServicePreviewCard.tsx";
import {useInView} from "react-intersection-observer";
import {useState} from "react";
import {servicesDescription} from "@/data/servicesDescription.ts";
import "./Home.css"



export function Home() {
    const [isHover, setHover] = useState(false);
    const [servicesView, inServicesView] = useInView({
        triggerOnce: true,
    });
    return (<>
        <Box position={"relative"} justifyItems={"center"} colorPalette={"white"} >

            <Grid   templateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)"}}
                    gap={6}
                    marginBottom={{base: 20,md:40}}
                    position={"relative"}
                    width={{base:"fit", md:"full"}}
            >
                <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0} >
                    <Image
                        src="/bg-sea.jpg"
                        alt="Background"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        filter="blur(5px) brightness(0.7)"
                        brightness={"10%"}

                    />
                </Box>
                <GridItem colSpan={1} maxW={{base: "fit", md: "2xl"}} zIndex={1}>
                    <Box paddingX={10} paddingTop={{base:10,md:200}} backgroundColor={""} height={"full"} className={"homeText1"}>
                        <Heading size={"6xl"} color={"whiteAlpha.900"}>
                            Your Global Partner in Maritime Crewing</Heading>
                        <Text  width={{base: "xs", md: "2xl"}}
                               fontSize={"xl"}
                               marginTop={"2em"}
                        >
                            Connecting top-tier seafarers with leading
                            shipping companies across the world — efficiently,
                            compliantly, and with care.
                        </Text>
                    </Box>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Box
                            position={"relative"}
                            height={"full"} >
                            <Image src={"/ship-photos/ship-top.jpg"}
                                   rounded={{base: "",md:"md"}}
                                   width={{base: "md", md: "md", lg: "lg"}}
                                   position={{base: "center", md: "inherit"}}
                                   top={"10"}
                               left={"30%"}
                               className={"backImage"}
                               onMouseOver={() => setHover(true)}
                               onMouseLeave={() => setHover(false)}
                        />
                        <Image src={"/ship-photos/tanker.jpg"}
                               display={{base: "none", md: "block"}}
                               rounded={{base: "",md:"md"}}
                               width={"30em"}
                               position={"absolute"}
                               top={"80"}
                               className={`${isHover ? "goBack" : "goForward"} appear`}
                        />
                    </Box>
                </GridItem>
            </Grid
            >



            {/*Service grid*/}
            <Grid   ref={servicesView}
                    templateColumns={{base:"repeat(1,1fr)", md:"repeat(6,1fr)"}}
                    gap={6}
                    className={inServicesView ? "inServicesView" : "inServicesInit"}
                    marginTop={{base:0, md:60}}
            >
                <GridItem colSpan={{base: 1, md:6}}>
                    <Heading textAlign={"center"} size={{base: "2xl", md:"6xl"}} marginBottom={"2%"}>Our Services at a Glance</Heading>
                    <Text textAlign={"center"}
                          margin={"auto"}
                          width={{base: "sm", md:"6xl"}}
                            fontSize={{base: "xs", md:"2xl"}}
                    >
                        We offer a comprehensive range of maritime services designed to support vessels, crew, and
                        operations worldwide. From crewing and certification to IT and yacht management, our solutions
                        are built on trust, compliance, and efficiency.
                    </Text>
                </GridItem>
                {servicesDescription.map((service, index) => (
                    <GridItem
                        colSpan={{base: 1, md:2}}
                        key={index} marginTop={20}>

                        <ServicePreviewCard
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