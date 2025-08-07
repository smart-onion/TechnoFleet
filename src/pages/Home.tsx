import {Box, Grid, GridItem, Heading, HStack, Separator, Show, Text} from "@chakra-ui/react";
import {ServicePreviewCard} from "@/components/ServicePreviewCard.tsx";
import {useInView} from "react-intersection-observer";
import {servicesDescription} from "@/data/servicesDescription.ts";
import {Partners} from "@/components/Partners.tsx";
import {MotionBox} from "@/components/MotionBox";
import {textColors} from "@/theme/main-colors.ts";
import ShinyText from "@/animation/ShinyText.tsx";

export function Home() {
    const [servicesView, inServicesView] = useInView({
        triggerOnce: true,
    });


    return (<>
        <Box position={"relative"} top={0} justifyItems={"center"} colorPalette={"white"}>

            <Grid templateColumns={{base: "repeat(1,1fr)", md: "repeat(2,1fr)"}}
                  gap={6}
                  marginBottom={{base: 0, md: 0}}
                  position={"relative"}
                  width={{base: "fit", md: "full"}}
                  h={{base: "60vh", md: "95vh"}}
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: -500,
                        zIndex: 0,
                        objectFit: "fill",
                        filter: "brightness(100%)",
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <source src="/videos/sidney-port.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <GridItem colSpan={1} maxW={{base: "fit", md: "fit"}} zIndex={1}>
                    <Box paddingX={{base: 12, md: 36}} paddingTop={{base: 24, md: 200}} height={"full"}
                         className={"homeText1"}>
                        <Heading size={{base: "4xl", md: "7xl"}} color={textColors.reverseMain} textShadow={"2xl"}>
                            Your Global Partner in Maritime Crewing</Heading>
                        <Text width={{base: "xs", md: "2xl"}}
                              fontSize={{base: "xl", md: "2xl"}}
                              marginTop={"2em"}
                              color={textColors.reverseMain}
                              textShadow={"xl"}
                        >
                            Connecting top-tier seafarers with leading
                            shipping companies across the world — efficiently,
                            compliantly, and with care.
                        </Text>
                    </Box>
                </GridItem>

            </Grid
            >

            {/*Service grid*/}
            <Grid ref={servicesView}
                  templateColumns={{base: "repeat(1,1fr)", md: "repeat(6,1fr)"}}
                  gap={6}
                  marginTop={{base: 0, md: 24}}
            >
                <GridItem colSpan={{base: 1, md: 6}}>
                    <Show when={inServicesView}>
                        <MotionBox
                            initial={{opacity: 0, y: 100}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                        >
                            <HStack w={{base:"xs", md: "lg"}} m={"auto"} my={12} >
                            <Separator flex={1} size={"lg"}/>
                                <ShinyText size={{base:"lg",md:"2xl"}} text={"OUR SERVICES"} />
                                    <Separator flex={1} size={"lg"}/>
                            </HStack>

                            <Heading textAlign={"center"} size={{base: "2xl", md: "6xl"}} marginBottom={"2%"}>Our
                                Services
                                at a
                                Glance</Heading>
                            <Text textAlign={"center"}
                                  margin={"auto"}
                                  width={{base: "sm", md: "6xl"}}
                                  fontSize={{base: "xs", md: "2xl"}}
                            >
                                We offer a comprehensive range of maritime services designed to support vessels, crew,
                                and
                                operations worldwide. From crewing and certification to IT and yacht management, our
                                solutions
                                are built on trust, compliance, and efficiency.
                            </Text>
                        </MotionBox>
                    </Show>
                </GridItem>
                {servicesDescription.map((service, index) => (
                    <GridItem
                        colSpan={{base: 1, md: 2}}
                        key={index} marginTop={20}>

                        <ServicePreviewCard
                            MyIcon={service.Icon}
                            heading={service.heading}
                            text={service.text}
                        />
                    </GridItem>
                ))}
                <GridItem colSpan={{base: 1, md: 6}}>
                    <Partners mt={{base: 12, md: 24}}/>
                </GridItem>
            </Grid>

        </Box>
    </>)
}