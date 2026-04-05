import {bgColors, textColors} from "@/theme/main-colors.ts";
import {Flex, Heading, Icon, Text} from "@chakra-ui/react";
import type {ReactNode} from "react";

export const WhatWeDoCard = ({icon, title, description}: {icon: ReactNode, title?:string, description?:string}) => {
    return (
        <Flex gap={10} my={5} flexDirection={{base: "column", md: "row"}} align={"center"}>
            <Icon color={bgColors.navy} asChild borderRadius={100}
                  p={5} border={"1px solid"} borderColor={bgColors.navy} bgColor={bgColors.secondary}
            >
                {icon}
            </Icon>
            <Flex direction="column" gap={5} align={{base: "center", md: "start"}}>
                <Heading textAlign={{base:"center", md: "start"}} fontSize={30} color={textColors.darkBlue}>{title}</Heading>
                <Text textAlign={{base:"center", md: "start"}} w={{base: "100%", md: "70%"}} color={textColors.main}>{description}</Text>
            </Flex>
        </Flex>
    )
}