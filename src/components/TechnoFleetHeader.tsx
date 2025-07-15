import {Heading, type HeadingProps, HStack} from "@chakra-ui/react";

export function TechnoFleetHeader(props:HeadingProps) {
    return (
        <HStack>
            <Heading {...props} color={"blue.700"}>Techno</Heading>
            <Heading {...props}  color={"blue.400"}>Fleet</Heading>
        </HStack>

    )
}