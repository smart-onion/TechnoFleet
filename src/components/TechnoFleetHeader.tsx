import {Heading, type HeadingProps, HStack, Span} from "@chakra-ui/react";

export function TechnoFleetHeader(props:HeadingProps) {
    return (
        <HStack>
            <Heading {...props} color={"blue.700"}>Techno<Span color={"blue.300"}>Fleet</Span></Heading>
        </HStack>

    )
}