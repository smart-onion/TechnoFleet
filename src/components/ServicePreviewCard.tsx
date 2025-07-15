import {Box, Center, Heading, Stack, Text} from "@chakra-ui/react";
import type {ComponentType} from "react";
import type {IconBaseProps} from "react-icons";


export function ServicePreviewCard({MyIcon, heading, text}:{MyIcon:ComponentType<IconBaseProps>; heading:string, text:string}) {
    
return (
    <Stack textAlign={"center"}
           rounded={"lg"}
    >
        <Center>
            <Box rounded={"full"} backgroundColor={"green.200"} padding={10}>
                    <MyIcon size={"8em"}></MyIcon>
            </Box>
        </Center>
        <Heading size={"4xl"}>{heading}</Heading>
        <Center>
        <Text   fontSize={"xl"}
                w={"sm"}
        >{text}</Text>
            </Center>
    </Stack>
)
}