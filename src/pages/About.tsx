import {Box, Grid, Heading, Image} from "@chakra-ui/react";
import SplitText from "@/animation/SplitText.tsx";
import {textColors} from "@/theme/main-colors.ts";
import {ServiceCard} from "@/components/ServiceCard.tsx";

const aboutData = [
    {
        src: "/ship-photos/human-ship.jpg",
        title: "Launch Your Maritime Career",
        description: "Ready to sail? We connect seafarers with top global employers, matching your skills to\n" +
            "the perfect role. From deckhands to captains, our network opens doors to exciting opportunities.\n" +
            "Join \"TechnoFleet\" today adn navigate your path to success."
    },
    {
        src: "/ship-photos/container-terminal.jpg",
        title: "Reliable Crew for Your Fleet",
        description: "Power your vessels with skilled, vetted professionals. TechnoFleet provides tailored crewing " +
            "solutions, ensuring safety, efficiency, and compliance.Partner with is to access our extensive " +
            "database of qualified seafarers and keep your operations on course."
    },
    {
        src: "/ship-photos/ship-container-2.jpg",
        title: "Seamless Recruitment Solutions",
        description: "Simplify your crewing process with TechnoFleet. we streamline recruitment for shipowners and" +
            "seafarers, offering fast, reliable matches and expert support.Discover hassle-free crewing " +
            "services designed to meet the demands of the maritime industry"
    },

]

export default function About() {
    return (
        <Box overflow={"hidden"}>
            <Box position={"relative"}

            >
                <Image
                    filter={"brightness(50%) saturate(140%)"}
                    src={"/ship-photos/ship-sunset.jpg"}
                    w={"100%"}
                    height={{base: "36", md: "sm"}}
                />
                <Heading fontSize={{base: "2xl", md: "4xl"}}
                         position={"absolute"}
                         color={"white"}
                         left={"50%"}
                         top={{base: "40%", md: "60%"}}
                         bottom={"4"}
                         transform={"translate(-50%, -50%)"}
                >
                    <SplitText text={"Set Sail with Your Dream Maritime Career"} splitType={"words"}/>
                </Heading>
            </Box>
            <Box w={"100%"}
                 justifyItems={"center"}
                 mt={14}

            >
                <Heading fontSize={{base: "xl", md: "2xl"}}
                            textAlign={"center"}
                         color={textColors.main}
                >
                    <SplitText text={"Welcome to TechnoFleet"} splitType={"words"}/>
                </Heading>
            </Box>
            <Grid
                mt={12}
                templateRows={{base: "repeat(3, 1fr)", md: "repeat(3, 1fr)"}}
                gap={6}

            >
                {aboutData.map((item, index) => {
                    const revert = index % 2 !== 0;

                    return (<ServiceCard key={index}
                                         src={item.src}
                                         title={item.title}
                                         description={item.description}
                                         reverse={revert}
                                         mx={{base: 2, md: 20}}
                                         imageSizes={{base: "", md: "xl"}}
                                         titleFont={{base: 22, md: 28}}
                                         descFont={{base: 16, md: 18}}
                                         shadow={"md"}
                                         initial={{x:(revert ? 50 : -50)}}
                                         animate={{x:0}}
                                         transition={{duration:2}}
                    />)
                })}
            </Grid>
        </Box>
    );
}