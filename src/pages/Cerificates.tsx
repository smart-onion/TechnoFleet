import {Badge, Box, Flex, Grid, GridItem, Heading, Image, Link, Text} from "@chakra-ui/react";
import {TrainingCard} from "@/components/TrainingCard.tsx";
import {bgColors, textColors} from "@/theme/main-colors.ts";
import { PiCertificateFill } from "react-icons/pi";
import { MdOutlineGasMeter } from "react-icons/md";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHandsHelping, FaTelegramPlane,FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import {WhatWeDoCard} from "@/components/WhatWeDoCard.tsx";
const trainingText = "The sea belongs to those who prepare for it. We empower everyone—from novices taking their first steps on deck to veteran sailors mastering new technologies. Our mission is to provide world-class training that builds confidence, enhances safety, and opens doors to new opportunities in the maritime industry, regardless of your current experience level";
export const Cerificates = () => {
    return (
        <Box>
            <Box position="relative">
            <Image
                src={"/training-certificates.jpg"}
                w={"full"}
                height={60}
                filter={"brightness(35%)"}
                fit={"fill"}
            />
                <Heading
                    w={"50%"}
                    position={"absolute"}
                    top={{base: 70, md: 100}}
                    left={{base: 30, md: 100}}
                    color={"white"}
                    fontSize={{base: 26, md: 32}}
                    textShadow={"lg"}

                >
                    Expert Training for Every Sailor.
                </Heading>
                <Box
                    py={{base: 6, md: 12}}
                >
                    <Heading
                        textAlign={"center"}
                        fontSize={{base: 20, md: 30}}
                        px={{base: 2}}
                    >
                        Training for everyone — from seasoned mariners to those just starting their journey.
                    </Heading>
                    <Text px={{base: 8, md: 40}}
                          textAlign={"center"}
                          lineHeight={"2.2"}
                          py={{base: 2, md: 12}}
                    >{trainingText}</Text>
                </Box>
                <Box bgColor={bgColors.navy} p={{base:2, md:5}} w={{base: "95%",md:"90%"}} m={"auto"} borderRadius={10}>

                    <Heading style={{textAlign: "center"}} py={10} fontSize={{base: 26, md:40}} color={"white"}>TRAINING BY INDUSTRY</Heading>
                <Grid templateColumns={{base: "repeat(1, 1fr)", md:"repeat(4, 1fr)"}} gap={2}>
                    <GridItem colSpan={{base: 1, md: 2}} rowSpan={{base:1, md: 2}} >
                        <TrainingCard image={"/michoff-oil-production-platform-7864345_1920.jpg"} name={"OFFSHORE"} />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <TrainingCard image={"/gtraschuetz-tanker-1242111_1920.jpg"} name={"TANKER"}/>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <TrainingCard image={"/hpgruesen-cruise-ship-4460493_1920.jpg"} name={"CRUISE"}/>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <TrainingCard image={"/joocam-sailboat-3134173_1920.jpg"} name={"YACHTING"} />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <TrainingCard image={"/dendoktoor-container-ship-6631117_1920.jpg"} name={"CARGO"} />
                    </GridItem>
                </Grid>
                </Box>

                <Grid
                    bgColor={bgColors.main}
                    border={"1px solid"}
                    borderColor={"blue.200"}
                    p={5}
                    w={{base: "95%",md:"90%"}}
                    m={"auto"}
                    borderRadius={10}
                    my={10}
                    flexDirection={"row"}
                    // align={{base: "center", md: "start"}}
                    templateColumns={{base: "repeat(1, 1fr)", md:"repeat(2, 1fr)"}}
                >
                    <GridItem colSpan={1}>
                     <Flex flexDirection={"column"} gap={5} align={{base: "center", md: "start"}} >
                        <Badge colorPalette="green" size={{base: "sm", md: "lg"}} p={2} borderRadius={20} border="1px solid green" w={"fit-content"}>
                            Why Choose Us
                        </Badge>
                        <Heading  fontSize={{base: 32, md: 34}} my={5} color={textColors.darkBlue}>What We Do: </Heading>
                        <WhatWeDoCard icon={<PiCertificateFill size={180}/>} title={"Get Certified for Less"} description={"Access a wide range of mandatory maritime courses with exclusive discounts for our crew."}/>
                        <WhatWeDoCard icon={<GiDiploma size={180}/>} title={"Maritime Diplomas & Endorsements"} description={"Expert assistance with the issuance, renewal, and validation of COC and COP diplomas."}/>
                        <WhatWeDoCard icon={<MdOutlineGasMeter size={180}/>} title={"Master Gas Tanker Ops"} description={"Advance your career with specialized LNG and LPG certifications for the energy sector."}/>
                        <WhatWeDoCard icon={<AiFillMedicineBox size={180}/>} title={"Stay Fit for Sea"} description={"Fast-track your medical clearances with our network of approved maritime health providers."}/>
                        <WhatWeDoCard icon={<FaHandsHelping size={180}/>} title={"Expert Career Advice"} description={"Navigate complex regulations and document requirements with our professional consulting."}/>
                    </Flex>
                    </GridItem>
                    <GridItem colSpan={1}  height={"100%"} >
                        <Image
                            display={{base: "none", md: "inline"}}
                            my={"auto"}
                            src={"/lucasgrey-lighthouse-42311333.svg"}
                            h={"100%"}
                            fit={"contain"}
                            w={800}

                        />
                    </GridItem>
                </Grid>

                <Flex
                    p={5}
                    w={{base: "95%",md:"50%"}}
                    m={"auto"}
                    borderRadius={10}
                    my={10}
                    bgColor={bgColors.navy}
                    justify={"space-between"}
                    px={10}
                    gap={10}
                    flexDirection={{base: "column", md: "row"}}
                >
                    <Flex flexDirection={"column"} gap={5} align={{base: "center", md: "start"}}>
                        <Heading color={textColors.lightBlue}>Get in Touch</Heading>
                        <Text color={"white"} textAlign={{base:"center", md: "start"}} w={"80%"}>Have questions about your certifications? Our team is here to help you get sea-ready.</Text>
                    </Flex>
                    <Flex flexDirection={"column"} gap={5} align={{base: "center", md: "start"}}>
                        <Flex align={"center"} gap={2}>
                            <FaTelegramPlane color={"white"} size={20}/>
                            <Link href={"https://t.me/oksana_certs"} color={"white"}>@oksana_certs</Link>
                        </Flex>
                        <Flex align={"center"} gap={2}>
                            <FaPhoneAlt color={"white"} size={20}/>
                            <Text color={"white"}>+40 734 174 773</Text>
                        </Flex>
                        <Flex align={"center"} gap={2}>
                            <IoMail color={"white"} size={20}/>
                            <Text color={"white"}>support@technofleet.org</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}