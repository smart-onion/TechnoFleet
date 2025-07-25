import {Box, Text, Heading, Image, VStack} from "@chakra-ui/react";
import {DesktopFooter} from "@/components/footer/DesktopFooter.tsx";
import {MobileFooter} from "@/components/footer/MobileFooter.tsx";
import {FaAnchor} from "react-icons/fa6";
import {bgColors, textColors} from "@/theme/main-colors.ts";
import {SubscribeForm} from "@/forms/SubscribeForm.tsx";

export function Footer() {

    return (
        <Box marginTop={{base: 60, md: 60}} position={"relative"}>
            {/*  email subscribe box  */}
            <Box
                marginX="auto"
                backgroundColor={bgColors.green}
                width={{base: "full", md: "4xl"}}
                h={{base: "fir", md: "3xs"}}
                position={"absolute"}
                p={{base: 5, md: 10}}
                rounded={{base: "", md: "xl"}}
                left="50%"
                transform="translate(-50%, -10em)"

            >
                <Box
                    display={{base: "block", md: "none"}}
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -6em)"
                >
                    <FaAnchor size={"8em"}/>
                </Box>

                <Image
                    display={{base: "none", md: "block"}}
                    position="absolute"
                    top={-16}
                    src="seaman-navy.png"
                    height={"2xs"}
                    _dark={{filter:"invert(100%)"}}
                />
                <Heading
                    color={textColors.main}
                    textAlign={{base: "center", md: "end"}}
                    w={"100%"}
                    fontSize={{base: "xl", md: "2xl"}}
                    paddingTop={{base: 14, md: 5}}

                >
                    Subscribe to our newsletter to get updated to our latest offers
                </Heading>
                <VStack
                    right={0}
                    w={"100%"}
                    pt={4}
                    rounded={"2xl"}
                    justifyContent={{base: "center", md: "end"}}
                >
                   <SubscribeForm

                   />
                    <Text
                        color={textColors.main}
                        fontSize={"2xs"}
                        pt={5}
                    >
                        You will be able to unsubscribe at any time.
                    </Text>
                </VStack>
            </Box>
            {/*  main footer  */}
            <Box w={"full"} m={"auto"} >
                <DesktopFooter display={{base: "none", md: "block"}}/>
                <MobileFooter display={{base: "block", md: "none"}}/>
            </Box>
        </Box>
    );
}