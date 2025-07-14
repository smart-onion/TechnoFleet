import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import type {ComponentType} from "react";
import type {IconBaseProps} from "react-icons";


export function ServicePreviewCard({MyIcon, heading, text}:{MyIcon:ComponentType<IconBaseProps>; heading:string, text:string}) {
return (
    <Stack textAlign={"center"}
           rounded={"lg"}
    >
        <Center>
            <Box rounded={"full"} backgroundColor={"gray.200"} padding={10}>
                    <MyIcon size={"10em"}></MyIcon>
            </Box>
        </Center>
        <Heading size={"4xl"}>{heading}</Heading>
        <Text>{text}</Text>
    </Stack>
)
}