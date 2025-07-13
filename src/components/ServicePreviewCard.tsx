import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import type {ReactElement} from "react";

export function ServicePreviewCard({MyIcon, heading, text}:{MyIcon:ReactElement, heading:string, text:string}) {
return (
    <Stack textAlign={"center"}
           rounded={"lg"}
    >
        <Center>
            <Box rounded={"full"} backgroundColor={"gray.200"} padding={10}>
                <MyIcon size={"10em"} />
            </Box>
        </Center>
        <Heading size={"4xl"}>{heading}</Heading>
        <Text>{text}</Text>
    </Stack>
)
}