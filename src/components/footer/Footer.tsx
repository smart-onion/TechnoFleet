import {Box, Button, Text, Group, Heading, Image, Input, VStack} from "@chakra-ui/react";
import {DesktopFooter} from "@/components/footer/DesktopFooter.tsx";
import {MobileFooter} from "@/components/footer/MobileFooter.tsx";

export function Footer(){
    return(
        <Box marginTop={{base: 60, md: 60}} position={"relative"} >
            {/*  email subscribe box  */}
            <Box
                marginX="auto"
                backgroundColor={"green.200"}
                width={{base:"full",md:"4xl"}}
                h={{base:"2xs",md:"3xs"}}
                position={"absolute"}
                p={{base:5, md:10}}
                rounded={{base:"", md:"xl"}}
                left="50%"
                transform="translate(-50%, -10em)"

            >
                <Image
                    display={{base:"block", md:"none"}}
                    src={"/anchor.png"}
                    height={"32"}
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -5em)"

                />
                <Image
                    display={{base:"none", md:"block"}}
                    position="absolute"
                    top={-16}
                    src="seaman-navy.png"
                    height={"2xs"}
                />
                <Heading
                    color={"gray.600"}
                    textAlign={{base:"center", md:"end"}}
                    w={"100%"}
                    fontSize={{base:"xl", md:"2xl"}}
                    paddingTop={{base:14, md:5}}

                >
                    Subscribe to our newsletter to get updated to our latest offers
                </Heading>
                <VStack
                    right={0}
                    w={"100%"}
                    pt={4}
                    rounded={"2xl"}
                    justifyContent={{base:"center",md:"end"}}
                >
                <Group attached
                       right={0}
                       w={"100%"}
                       pt={4}
                       rounded={"2xl"}
                       justifyContent={{base:"center",md:"end"}}
                >
                    <Input
                        placeholder={"Enter your email"}
                        w={{base: "", md:"xs"}}
                        borderColor={"gray.500"}

                    />
                    <Button colorPalette={"white"}
                            variant="surface"
                            borderColor={"gray.500"}

                    >
                        Subscribe
                    </Button>
                </Group>
                    <Text
                        color={"gray.600"}
                        fontSize={"2xs"}
                        pt={5}
                    >
                        You will be able to unsubscribe at any time.
                    </Text>
                </VStack>
            </Box>
        {/*  main footer  */}
            <DesktopFooter display={{base:"none", md:"block"}}/>
            <MobileFooter display={{base:"block", md:"none"}}/>
        </Box>
    );
}