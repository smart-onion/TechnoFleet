import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {ServiceCard} from "@/components/ServiceCard.tsx";

const crewingServices = [
    {
        src: "laptop-3196481_1920.jpg",
        title: "Certification",
        alt: "Certification",
        description: "We manage all necessary maritime certifications, ensuring your crew meets international standards and is always ready to sail.",
    },
    {
        src: "startup-593341_1920.jpg",
        title: "Training",
        alt: "Training",
        description: "Continuous learning is key. We provide access to essential training programs that enhance skills, safety, and career progression.",
    },
    {
        src: "computer-2170392_1920.jpg",
        title: "Monitoring",
        alt: "Monitoring",
        description: "We track crew performance, compliance, and wellbeing to maintain high standards and support long-term success.",
    },
    {
        src: "stethoscope-6497490_1920.jpg",
        title: "Medical Examination",
        alt: "Medical Examination",
        description: "Health and safety come first. We coordinate thorough medical checks to ensure every crew member is fit and ready for duty.",
    }
]

const crewingText = "At the heart of our crewing philosophy is a deep commitment to people. We believe that every seafarer deserves personal attention, professional growth, and a safe working environment. Our crewing solutions go beyond logistics — we build lasting relationships, support career development, and ensure every crew member feels valued and cared for.";
export default function Crewing() {
    return (
        <Box>
            <Box position={"relative"}>
                <Image
                    src={"/marine-4019745_1920.jpg"}
                    filter={"brightness(40%)"}
                    w={"full"}
                    height={56}
                />
                <Heading
                    position={"absolute"}
                    top={{base: "0%", md: "25%"}}
                    left={{base: "40%", md: "25%"}}
                    transform={"translate(-50%, 50%)"}
                    color={"white"}
                    fontSize={{base: 22, md: 32}}
                >Innovative Crew Management with a Human Touch</Heading>
            </Box>

            <Box
                py={{base: 6, md: 12}}
            >
                <Heading
                    textAlign={"center"}
                    fontSize={{base: 18, md: 30}}
                >We Put People First — Personalized Crewing You Can Trust</Heading>
                <Text px={{base: 8, md: 40}}
                      textAlign={"center"}
                      lineHeight={"2.2"}
                      py={{base: 2, md: 12}}
                >{crewingText}</Text>
            </Box>

            <Grid templateColumns={{base: "repeat(1,1fr)", md: "repeat(2,1fr)"}}
                  w={"80%"}
                  margin={"auto"}
                  gap={2}
            >
                {crewingServices.map((service, index) => (
                    <GridItem key={index} py={1}>
                        <ServiceCard src={service.src}
                                     title={service.title}
                                     description={service.description}
                                     w={"full"}
                                     alt={service.alt}
                                     initial={{opacity: 0, y: 50}}
                                     animate={{opacity: 1, y: 0}}
                                     transition={{
                                         duration: 1,
                                         delay: (index / 10 * 3),
                                     }}
                                     imageSizes={{base:"", md:"xs"}}
                                     titleFont={{base:22,md:28}}
                                     descFont={{base:16,md:18}}
                                     shadow={"xs"}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}