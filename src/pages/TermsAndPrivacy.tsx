import {
    Grid,
    GridItem, Heading,
     Tabs, Text,
} from "@chakra-ui/react";
import type {CSSProperties, ReactNode} from "react";

const segmentItems = [
    {
        value: "terms",
        label: <Text fontSize={20}>Terms of Use</Text>
    },
    {
        value: "privacy",
        label: <Text fontSize={20}>Privacy</Text>
    }
]

const textStyles: CSSProperties = {
    margin: "10px 0"
}

const linkStyles: CSSProperties = {
    color: "blue"
}

export const TermsAndPrivacy = () => {
    return (
        <Tabs.Root variant="plain" defaultValue={"terms"}>
            <Grid
                templateColumns="repeat(10, 1fr)"
                // h={"50vh"}
            >
                <GridItem colSpan={{base:10, md: 2}} justifySelf="center" >
                        {segmentItems.map((item, i) => {
                            return (
                                <Tabs.Trigger value={item.value} key={i}>{item.label}</Tabs.Trigger>
                            )
                        })}
                </GridItem>
                <GridItem colSpan={{base:9, md: 8}} justifySelf="center" >
                    <Tabs.Content value="terms" width={{base: "full", md: "75%"}} padding={{base: 2, md: 0}}>
                        <Heading size={"4xl"}>TERMS OF USE</Heading>
                        <br/>
                        <Heading size={"lg"} color={"rgb(34 34 34 / 0.8)"}>Last updated November 08, 2026</Heading>
                        <br/>
                        <br/>
                        <Heading size={"3xl"}>AGREEMENT TO OUR LEGAL TERMS</Heading>
                        <br/>
                        <Text style={textStyles}>We are TechnoFleet Limited ("<b>Company</b>," "<b>we</b>," "<b>us</b>," "<b>our</b>"), a company
                            registered in Hong Kong at WORKSHOP 60, 3/F, BLK A, EAST SUN IND
                            CTR NO. 16 SHING YIP ST KWUN TONG , Hong Kong.</Text>
                        <Text style={textStyles}>We operate the website technofleet.org (the "<b>Site</b>"), as well as any other
                            related products and services that refer or link to these legal terms (the
                            "<b>Legal Terms</b>") (collectively, the "<b>Services</b>").</Text>
                        <Text style={textStyles}>You can contact us by email at <span style={{color: "blue"}}>crewing@technofleet.org</span> or by mail to
                            WORKSHOP 60, 3/F, BLK A, EAST SUN IND CTR NO. 16 SHING YIP ST
                            KWUN TONG , Hong Kong, Hong Kong.</Text>
                        <Text style={textStyles}>These Legal Terms constitute a legally binding agreement made between
                            you, whether personally or on behalf of an entity ("<b>you</b>"), and TechnoFleet
                            Limited, concerning your access to and use of the Services. You agree that
                            by accessing the Services, you have read, understood, and agreed to be
                            bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
                            THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
                            FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
                            IMMEDIATELY.</Text>
                        <Text style={textStyles}>We will provide you with prior notice of any scheduled changes to the
                            Services you are using. The modified Legal Terms will become effective
                            upon posting or notifying you by <span style={{color: "blue"}}>info@technofleet.org</span>, as stated in the
                            email message. By continuing to use the Services after the effective date of
                            any changes, you agree to be bound by the modified terms.</Text>
                        <Text style={textStyles}>The Services are intended for users who are at least 18 years old. Persons
                            under the age of 18 are not permitted to use or register for the Services.</Text>
                        <Text style={textStyles}>We recommend that you print a copy of these Legal Terms for your
                            records.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"}>TABLE OF CONTENTS</Heading><br/>

                        <a style={linkStyles} href="#term1">1. OUR SERVICES</a><br/>
                        <a style={linkStyles} href="#term2">2. INTELLECTUAL PROPERTY RIGHTS</a><br/>
                        <a style={linkStyles} href="#term3">3. USER REPRESENTATIONS</a><br/>
                        <a style={linkStyles} href="#term4">4. PROHIBITED ACTIVITIES</a><br/>
                        <a style={linkStyles} href="#term5">5. USER GENERATED CONTRIBUTIONS</a><br/>
                        <a style={linkStyles} href="#term6">6. CONTRIBUTION LICENSE</a><br/>
                        <a style={linkStyles} href="#term7">7. THIRD-PARTY WEBSITES AND CONTENT</a><br/>
                        <a style={linkStyles} href="#term8">8. SERVICES MANAGEMENT</a><br/>
                        <a style={linkStyles} href="#term9">9. PRIVACY POLICY</a><br/>
                        <a style={linkStyles} href="#term10">10. TERM AND TERMINATION</a><br/>
                        <a style={linkStyles} href="#term11">11. MODIFICATIONS AND INTERRUPTIONS</a><br/>
                        <a style={linkStyles} href="#term12">12. GOVERNING LAW</a><br/>
                        <a style={linkStyles} href="#term13">13. DISPUTE RESOLUTION</a><br/>
                        <a style={linkStyles} href="#term14">14. CORRECTIONS</a><br/>
                        <a style={linkStyles} href="#term15">15. DISCLAIMER</a><br/>
                        <a style={linkStyles} href="#term16">16. LIMITATIONS OF LIABILITY</a><br/>
                        <a style={linkStyles} href="#term17">17. INDEMNIFICATION</a><br/>
                        <a style={linkStyles} href="#term18">18. USER DATA</a><br/>
                        <a style={linkStyles} href="#term19">19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND
                            SIGNATURES</a><br/>
                        <a style={linkStyles} href="#term20">20. MISCELLANEOUS</a><br/>
                        <a style={linkStyles} href="#term21">21. CONTACT US</a><br/><br/>

                        <Heading size={"3xl"} id={"term1"}>1. OUR SERVICES</Heading>
                        <Text style={textStyles}>The information provided when using the Services is not intended for
                            distribution to or use by any person or entity in any jurisdiction or country
                            where such distribution or use would be contrary to law or regulation or
                            which would subject us to any registration requirement within such
                            jurisdiction or country. Accordingly, those persons who choose to access
                            the Services from other locations do so on their own initiative and are
                            solely responsible for compliance with local laws, if and to the extent local
                            laws are applicable.</Text>
                        <Text style={textStyles}>The Services are not tailored to comply with industry-specific regulations
                            (Health Insurance Portability and Accountability Act (HIPAA), Federal
                            Information Security Management Act (FISMA), etc.), so if your interactions
                            would be subjected to such laws, you may not use the Services. You may
                            not use the Services in a way that would violate the Gramm-Leach-Bliley
                            Act (GLBA).</Text>
                            <br/>
                            <br/>
                        <Heading size={"3xl"} id={"term2"}>2. INTELLECTUAL PROPERTY RIGHTS</Heading>
                        <Heading size={"lg"}>Our intellectual property</Heading>
                        <Text  style={textStyles}>We are the owner or the licensee of all intellectual property rights in our
                            Services, including all source code, databases, functionality, software,
                            website designs, audio, video, text, photographs, and graphics in the
                            Services (collectively, the "Content"), as well as the trademarks, service
                            marks, and logos contained therein (the "Marks").</Text>
                        <Text style={textStyles}>Our Content and Marks are protected by copyright and trademark laws
                            (and various other intellectual property rights and unfair competition laws)
                            and treaties in the United States and around the world.</Text>
                        <Text style={textStyles}>The Content and Marks are provided in or through the Services "AS IS" for
                            your personal, non-commercial use or internal business purpose only.</Text>
                        <br/>
                        <Heading size={"lg"}>Your use of our Services</Heading>

                        <Text style={textStyles}>Subject to your compliance with these Legal Terms, including the
                            "<a href={'#term4'} style={{color: 'blue'}}>PROHIBITED ACTIVITIES</a>" section below, we grant you a non-exclusive,
                            non-transferable, revocable license to:</Text>
                        <li style={{marginLeft: 40}}>
                            <ul>access the Services; and
                                download or print a copy of any portion of the Content to which you
                                have properly gained access,
                                solely for your personal, non-commercial use or internal business purpose.</ul>
                        </li>
                        <Text style={textStyles}>Except as set out in this section or elsewhere in our Legal Terms, no part of
                            the Services and no Content or Marks may be copied, reproduced,
                            aggregated, republished, uploaded, posted, publicly displayed, encoded,
                            translated, transmitted, distributed, sold, licensed, or otherwise exploited
                            for any commercial purpose whatsoever, without our express prior written
                            permission.</Text>
                        <Text style={textStyles}>If you wish to make any use of the Services, Content, or Marks other than
                            as set out in this section or elsewhere in our Legal Terms, please address
                            your request to: <span style={{color: "blue"}}>crewing@technofleet.org</span>. If we ever grant you the
                            permission to post, reproduce, or publicly display any part of our Services
                            or Content, you must identify us as the owners or licensors of the Services,
                            Content, or Marks and ensure that any copyright or proprietary notice
                            appears or is visible on posting, reproducing, or displaying our Content.</Text>
                        <Text style={textStyles}>We reserve all rights not expressly granted to you in and to the Services,
                            Content, and Marks.</Text>
                        <Text style={textStyles}>Any breach of these Intellectual Property Rights will constitute a material
                            breach of our Legal Terms and your right to use our Services will terminate
                            immediately.</Text>
                        <Heading size={"lg"}>Your submissions</Heading>
                        <br/>
                        <Text style={textStyles}>Please review this section and the "<a href={'#term4'} style={{color: 'blue'}}>PROHIBITED ACTIVITIES</a>" section
                            carefully prior to using our Services to understand the (a) rights you give us
                            and (b) obligations you have when you post or upload any content through
                            the Services.</Text>
                        <Text style={textStyles}><b>Submissions</b>: By directly sending us any question, comment, suggestion,
                            idea, feedback, or other information about the Services ("Submissions"),
                            you agree to assign to us all intellectual property rights in such Submission.
                            You agree that we shall own this Submission and be entitled to its
                            unrestricted use and dissemination for any lawful purpose, commercial or
                            otherwise, without acknowledgment or compensation to you.</Text>
                        <Text style={textStyles}><b>You are responsible for what you post or upload</b>: By sending us
                            Submissions through any part of the Services you:</Text>
                        <ul style={{marginLeft: 40}}>
                            <ul>confirm that you have read and agree with our "<a href={'#term4'} style={{color: 'blue'}}>PROHIBITED ACTIVITIES</a>" and will not post, send, publish, upload, or transmit
                                through the Services any Submission that is illegal, harassing,
                                hateful, harmful, defamatory, obscene, bullying, abusive,
                                discriminatory, threatening to any person or group, sexually explicit,
                                false, inaccurate, deceitful, or misleading;</ul>
                            <li>to the extent permissible by applicable law, waive any and all moral
                                rights to any such Submission;</li>
                            <li>warrant that any such Submission are original to you or that you
                                have the necessary rights and licenses to submit such Submissions
                                and that you have full authority to grant us the above-mentioned
                                rights in relation to your Submissions; and
                                warrant and represent that your Submissions do not constitute
                                confidential information.</li>
                        </ul>
                        <Text style={textStyles}>You are solely responsible for your Submissions and you expressly agree
                            to reimburse us for any and all losses that we may suffer because of your
                            breach of (a) this section, (b) any third party’s intellectual property rights, or
                            (c) applicable law.</Text>
                        <br/>
                        <Heading size={"3xl"} id={"term3"}>3. USER REPRESENTATIONS</Heading>
                        <br/>
                        <Text style={textStyles}>By using the Services, you represent and warrant that: (1) you have the
                            legal capacity and you agree to comply with these Legal Terms; (2) you are
                            not a minor in the jurisdiction in which you reside; (3) you will not access
                            the Services through automated or non-human means, whether through a
                            bot, script or otherwise; (4) you will not use the Services for any illegal or
                            unauthorized purpose; and (5) your use of the Services will not violate any
                            applicable law or regulation.</Text>
                        <Text style={textStyles}>If you provide any information that is untrue, inaccurate, not current, or
                            incomplete, we have the right to suspend or terminate your account and
                            refuse any and all current or future use of the Services (or any portion
                            thereof).</Text>
                        <br/>
                        <Heading size={"3xl"} id={"term4"}>4. PROHIBITED ACTIVITIES</Heading>
                        <br/>
                        <Text style={textStyles}>You may not access or use the Services for any purpose other than that for
                            which we make the Services available. The Services may not be used in
                            connection with any commercial endeavors except those that are
                            specifically endorsed or approved by us.</Text>
                        <Text style={textStyles}>As a user of the Services, you agree not to:</Text>
                        <li style={{marginLeft: 40}}>
                            <ul></ul>
                        </li>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                        <Text style={textStyles}></Text>
                    </Tabs.Content>


                    <Tabs.Content value="privacy">Manage yasdour team members</Tabs.Content>
                </GridItem>
            </Grid>
        </Tabs.Root>

    )
}