import {Text, type BoxProps, Heading, HStack} from "@chakra-ui/react";
import type {MotionProps} from "framer-motion";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useInView} from "react-intersection-observer";
import SpotlightCard from "@/animation/SpotlightCard.tsx";
import {bgColors, textColors} from "@/theme/main-colors.ts";
import {IoMdMail} from "react-icons/io";
import {FaPhone} from "react-icons/fa6";

type ContactCardProps = BoxProps & MotionProps & {
    title: string;
    email: string;
    phone: string;
}

export function ContactCard({title, email, phone, ...props}: ContactCardProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            <MotionBox ref={ref} {...props}>
                {inView && (
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(38, 103, 191, 0.2)"
                                   bg={bgColors.main}
                                   w={{base:"full",md:"xs"}}
                                   rounded={"xl"}
                                   p={4}
                    >
                        <Heading>{title}</Heading>
                        <HStack>
                            <IoMdMail/>
                            <Text color={textColors.darkBlue}>{email}</Text>
                        </HStack>
                        <HStack>
                            <FaPhone/>
                            <Text>{phone}</Text>
                        </HStack>
                    </SpotlightCard>
                )}
            </MotionBox>
        </>
    )
}