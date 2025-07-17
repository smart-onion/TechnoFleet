import { Spinner, Text, VStack } from "@chakra-ui/react"

export function Loading(){
    return (
        <VStack colorPalette="teal"
                alignItems={"center"}
                justify={"center"}
                pt={"30%"}
        >
            <Spinner color="blue.700" borderWidth="4px"  />
            <Text color="colorPalette.600">Loading...</Text>
        </VStack>
    )
}
