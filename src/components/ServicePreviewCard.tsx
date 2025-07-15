import {Center, Heading, Stack, Text} from "@chakra-ui/react";
import type {ComponentType} from "react";
import type {IconBaseProps} from "react-icons";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useInView} from "react-intersection-observer";

export function ServicePreviewCard({MyIcon, heading, text}:{MyIcon:ComponentType<IconBaseProps>; heading:string, text:string}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
return (
    <Stack
        ref={ref}
        textAlign={"center"}
        rounded={"lg"}
    >
        {inView &&(
            <>
                <Center>
                    <MotionBox
                        rounded={"full"}
                        backgroundColor={"green.200"}
                        padding={10}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1}}
                        transition={{ delay:0.3 }}
                        boxShadow="2xl"
                    >
                            <MyIcon size={"8em"}></MyIcon>
                    </MotionBox>
                </Center>
                <Heading size={"4xl"}>{heading}</Heading>
                <Center>
                    <Text   fontSize={"xl"}
                            w={"sm"}
                    >{text}</Text>
                </Center>
        </>
        )}
    </Stack>
)
}