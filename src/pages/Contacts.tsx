import {ContactForm} from "@/forms/ContactForm.tsx";
import {Box, Grid, GridItem, Heading, Stack, Text} from "@chakra-ui/react";
import {ContactCard} from "@/components/ContactCard.tsx";

const contactData = [
    {
        title: "For Seafarers",
        email: "crewing@technofleet.org",
        phone: "+(380) 63 357 15 52"
    },
    {
        title: "For Shipowners/Clients",
        email: "chaika@technofleet.org",
        phone: "+(380) 63 357 15 52"
    },
    {
        title: "Need help?",
        email: "support@technofleet.org",
        phone: "+(380) 63 357 15 52"
    }
]

export function Contacts() {
    return (
        <Box my={6}>
            <Grid templateColumns={{base: "repeat(1,1fr)", md: "repeat(2,1fr)"}} px={{base: 0, md: 12}}>
                <GridItem colSpan={{base: 1, md: 2}}>
                    <Heading textAlign={{base: "center", md: "start"}} fontSize={{base: 32, md: 42}}>Get in
                        touch</Heading>
                </GridItem>
                <GridItem>
                    <Stack w={{base: "full", md: "lg"}} py={8} px={{base: 6, md: 0}}>
                        <Text fontSize={{base: 14, md: 16}} textAlign={{base: "center", md: "start"}}>Whether you're a
                            seafarer looking for your next opportunity
                            or a shipping company in need
                            of reliable crew management, we're here to help. Our team is committed to providing
                            personalized support and quick responses to all inquiries.</Text>
                        {contactData.map((contact, index) => (
                            <ContactCard key={index} email={contact.email} title={contact.title} phone={contact.phone}
                                         py={6}/>
                        ))}

                    </Stack>
                </GridItem>
                <GridItem w={"full"} borderLeft={"1px solid"} borderColor={"gray.500"} h={"full"}>
                    <Box my={"auto"} h={"full"} p={12}>
                        <Heading my={{base:1,md:12}}>Send us a message</Heading>
                        <ContactForm/>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}