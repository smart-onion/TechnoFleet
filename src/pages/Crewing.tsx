import {Box, Grid, GridItem, Heading, Image} from "@chakra-ui/react";
import {ServiceCard} from "@/components/ServiceCard.tsx";

const crewingServices = [
    {
        src: "laptop-3196481_1920.jpg",
        title: "Certification",
        alt: "Certification",
        description: "Certification description",
    },
    {
        src: "startup-593341_1920.jpg",
        title: "Training",
        alt: "Training",
        description: "Training description",
    },
    {
        src: "computer-2170392_1920.jpg",
        title: "Monitoring",
        alt: "Monitoring",
        description: "Monitoring description",
    },
    {
        src: "stethoscope-6497490_1920.jpg",
        title: "Medical Examination",
        alt: "Medical Examination",
        description: "Medical Examination description",
    }
]

export default function Crewing() {
    return (
        <Box>
            <Box position={"relative"}>
                <Image
                    src={"/marine-4019745_1920.jpg"}
                    filter={"brightness(50%)"}
                    w={"full"}
                    height={56}
                />
                <Heading
                    position={"absolute"}
                    top={{base:"40%", md:"15%"}}
                    left={{base:"50%", md:"20%"}}
                    transform={"translate(-50%, 50%)"}
                    color={"whiteAlpha.900"}
                >Some text here</Heading>
            </Box>
            <Grid templateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)"}}
                  w={"80%"}
                      margin={"auto"}
                      >
                {crewingServices.map((service, index) => (
                    <GridItem key={index} py={1}>
                        <ServiceCard src={service.src}
                                     title={service.title}
                                     description={service.description}
                                     w={{base:"full",md:"md"}}
                                     alt={service.alt}
                                     initial={{opacity:0,   y:50}}
                                     animate={{opacity:1,   y:0}}
                                     transition={{
                                         duration:1,
                                         delay:(index/10 * 3),

                                    }}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}