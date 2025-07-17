import {Heading, type HeadingProps, HStack, Span} from "@chakra-ui/react";
import {textColors} from "../theme/main-colors.ts";

export function TechnoFleetHeader(props:HeadingProps) {
    return (
        <HStack>
            <Heading {...props} color={textColors.darkBlue}>Techno<Span color={textColors.lightBlue}>Fleet</Span></Heading>
        </HStack>

    )
}