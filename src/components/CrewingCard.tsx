import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useInView} from "react-intersection-observer";

type CrewingCardProps = {
    start?: number,
    end?: number,
    duration?: number,
    imgPath: string,
    heading: string,
    text: string,
    flip: boolean,
}

export function CrewingCard(
    {
        imgPath,
        heading,
        text,
        start = -50,
        end = 0,
        duration = 1,
        flip = false,
    }: CrewingCardProps
) {
    const [ref, inView] = useInView({
        triggerOnce:true
        });
    return (
        <Box ref={ref}>
            {inView && (
            <MotionBox
                initial={{ x: start, opacity:0 }}
                animate={{ x: end, opacity:1}}
                transition={{ duration:duration }}
            >
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                      px={{base:0, md:12}}
                      py={1}
                      justifyItems={"center"}
                      backgroundColor={"blue.100"}
                      border={"1px solid"}
                      borderColor={"blue.200"}
                >
                    {!flip && (
                        <GridItem>
                            <Image src={imgPath} h={"xs"}
                                   rounded={{base:0, md:"md"}}
                            />
                        </GridItem>
                    )}

                    <GridItem alignContent={"center"}
                                w={"md"}
                    >
                        <Heading>{heading}</Heading>
                        <Text>{text}</Text>
                    </GridItem>
                    {flip && (
                        <GridItem>
                            <Image src={imgPath} h={"xs"}
                                   rounded={{base:0, md:"md"}}
                            />
                        </GridItem>
                    )}
                </Grid>
            </MotionBox>
            )}
        </Box>
    )
}