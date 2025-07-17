import {Box, Grid, Heading, Image} from "@chakra-ui/react";
import SplitText from "@/animation/SplitText.tsx";
import {CrewingCard} from "@/components/CrewingCard.tsx";

export default function About() {
    return (
        <Box overflow={"hidden"} backgroundColor={"blue.50"}>
            <Box position={"relative"}

            >
                <Image
                    filter={"brightness(50%) saturate(140%)"}
                    src={"/ship-photos/ship-sunset.jpg"}
                    w={"100%"}
                    height={{base: "36", md: "sm"}}
                />
                <Heading fontSize={{base:"2xl", md:"4xl"}}
                      position={"absolute"}
                      color={"white"}
                      left={"50%"}
                      top={{base:"40%", md:"60%"}}
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
                <Heading fontSize={{base:"xl", md:"2xl"}}
                         position={"absolute"}
                         color={""}
                >
                    <SplitText text={"Welcome to TechnoFleet"} splitType={"words"}/>
                </Heading>
            </Box>
            <Grid
                mt={120}
                templateRows={{ base: "repeat(3, 1fr)", md: "repeat(3, 1fr)" }}

            >
                <CrewingCard imgPath={"/ship-photos/human-ship.jpg"}
                             heading={"Launch Your Maritime Career"}
                             flip={false}
                    text={"Ready to sail? We connect seafarers with top global employers, matching your skills to\n" +
                "the perfect role. From deckhands to captains, our network opens doors to exciting opportunities.\n" +
                "Join \"TechnoFleet\" today adn navigate your path to success."}
                />
                <Box display={{base:"none", md:"block"}}>
                <CrewingCard
                    imgPath={"/ship-photos/container-terminal.jpg"}
                             flip={true}
                             heading={"Reliable Crew for Your Fleet"}
                    text={"Power your vessels with skilled, vetted professionals. TechnoFleet provides tailored crewing " +
                        "solutions, ensuring safety, efficiency, and compliance.Partner with is to access our extensive " +
                        "database of qualified seafarers and keep your operations on course."}
                /></Box>
                <Box display={{base:"block", md:"none"}}>
                <CrewingCard
                    imgPath={"/ship-photos/container-terminal.jpg"}
                             flip={false}
                             heading={"Reliable Crew for Your Fleet"}
                    text={"Power your vessels with skilled, vetted professionals. TechnoFleet provides tailored crewing " +
                        "solutions, ensuring safety, efficiency, and compliance.Partner with is to access our extensive " +
                        "database of qualified seafarers and keep your operations on course."}
                /></Box>
                <CrewingCard imgPath={"/ship-photos/ship-container-2.jpg"}
                             flip={false}
                             heading={"Seamless Recruitment Solutions"}
                    text={"Simplify your crewing process with TechnoFleet. we streamline recruitment for shipowners and" +
                        "seafarers, offering fast, reliable matches and expert support.Discover hassle-free crewing " +
                        "services designed to meet the demands of the maritime industry"}
                />

            </Grid>
        </Box>
    );
}