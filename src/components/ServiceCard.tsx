import {Card, Box, Image, type BoxProps} from "@chakra-ui/react";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useInView} from "react-intersection-observer";
import type {MotionProps} from "framer-motion";
import {bgColors, textColors} from "@/theme/main-colors.ts";
import type {ResponsiveType} from "@/data/types.ts";

type ServiceCardProps = Omit<BoxProps, "animation"> & MotionProps & {
    title: string,
    description: string,
    src: string,
    alt?: string,
    reverse?: boolean,
    imageSizes?: ResponsiveType,
    titleFont?: ResponsiveType,
    descFont?: ResponsiveType,
}

export function ServiceCard({
                                title,
                                description,
                                src,
                                alt,
                                imageSizes,
                                titleFont,
                                descFont,
                                reverse = false,
                                ...props
                            }: ServiceCardProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div ref={ref}>
            {inView && (
                <MotionBox {...props}>
                    <Card.Root flexDirection={{base: "column", md: (reverse ? "row-reverse" : "row")}} overflow="hidden"
                               bg={bgColors.main}>
                        <Image
                            objectFit="cover"
                            w={imageSizes || {base: "full", md: "3xs"}}
                            src={src}
                            alt={alt}
                        />
                        <Box>
                            <Card.Body>
                                <Card.Title mb="2" color={textColors.darkBlue} fontSize={titleFont}>{title}</Card.Title>
                                <Card.Description fontSize={descFont}>{description}</Card.Description>
                            </Card.Body>
                        </Box>
                    </Card.Root>
                </MotionBox>)}
        </div>
    )
}