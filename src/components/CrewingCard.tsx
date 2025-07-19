import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useInView} from "react-intersection-observer";
import type {MotionProps} from "framer-motion";

type CrewingCardProps = MotionProps & {
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
        flip = false,
        ...props
    }: CrewingCardProps
) {
    const [ref, inView] = useInView({
        triggerOnce:true
        });
    return (
        <Box ref={ref}>
            {inView && (
            <MotionBox
                {...props}
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