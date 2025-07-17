import {Card, Box, Image, type BoxProps} from "@chakra-ui/react";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useInView} from "react-intersection-observer";
import type {MotionProps} from "framer-motion";
import {bgColors, textColors} from "@/theme/main-colors.ts";

type ServiceCardProps = Omit<BoxProps, "animation">& MotionProps &{
    title: string,
    description: string,
    src: string,
    alt?: string,
}

export function ServiceCard({title, description, src, alt, ...props} : ServiceCardProps)  {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div  ref={ref}>
            {inView && (
            <MotionBox {...props}>
                <Card.Root flexDirection={{base:"column", md:"row"}} overflow="hidden" bg={bgColors}>
                    <Image
                        objectFit="cover"
                        w={{base:"full",md:"3xs"}}
                        src={src}
                        alt={alt}
                    />
                    <Box>
                        <Card.Body>
                            <Card.Title mb="2" color={textColors.darkBlue}>{title}</Card.Title>
                            <Card.Description>{description}</Card.Description>
                        </Card.Body>
                    </Box>
                </Card.Root>
            </MotionBox>)}
        </div>
    )
}