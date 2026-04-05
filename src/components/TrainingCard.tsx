import {Box, Heading, Image} from "@chakra-ui/react";

export const TrainingCard = ({image, name}:
                             {image:string, name:string}) => {
    return (
        <Box position="relative" height={"100%"}>
            <Image src={image}
                   fit="cover"
                   filter={"brightness(85%)"}
                    borderRadius={10}
                   height={"100%"}
            />
            <Heading
                position="absolute"
                top={{base: "80%", md: "80%"}}
                left={{base: "10%", md: "10%"}}
                fontSize={{base:24,md:26}}
                color="white"
                textShadow={"lg"}


            >{name}</Heading>
        </Box>

    )
}