import {Box, type BoxProps, Heading, Image, Show, VStack} from "@chakra-ui/react";
import {MotionBox} from "@/components/MotionBox.tsx";
import type {MotionProps} from "framer-motion";
import {useInView} from "react-intersection-observer";

export function Partners({...props}: MotionProps & BoxProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <Box ref={ref}>
            <Show when={inView} fallback={<Box h={12} w={44}/>}>
                <MotionBox {...props}
                           initial={{opacity: 0, y:100}}
                           animate={{opacity: 1,y:0}}
                           transition={{duration: 0.5}}
                >
                    <VStack>
                        <Heading size={"6xl"}>Our Partners</Heading>
                        <Image src={"/partners/cg.png"}/>
                    </VStack>
                </MotionBox>
            </Show>
        </Box>
    )
}