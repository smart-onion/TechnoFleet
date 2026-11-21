import {
    Grid,
    GridItem, Heading,
     Tabs, Text, List, Box,useBreakpointValue
} from "@chakra-ui/react";
import type {CSSProperties} from "react";
import { useSearchParams } from "react-router";
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
    color: "blue",
    scrollBehavior: "smooth"
}

export const TermsAndPrivacy = () => {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab") === "privacy" ? "privacy" : "terms"
    const orientation = useBreakpointValue<"horizontal" | "vertical">({
        base: "horizontal",
        md: "vertical",
    })
    const lastUpdated = "Last updated November 08, 2026"
    return (
        <Tabs.Root  defaultValue={tab} orientation={orientation} scrollBehavior={"smooth"}>
            <Grid
                templateColumns="repeat(10, 1fr)"
                // h={"50vh"}
            >
                <GridItem colSpan={{base:10, md: 2}} justifySelf="center" >
                    <Box position={{base: "none", md: "fixed"}} left={5}>
                        <Tabs.List>
                            {/*<Tabs.Indicator/>*/}
                        {segmentItems.map((item, i) => {
                            return (
                                <Tabs.Trigger value={item.value} key={i}>{item.label}</Tabs.Trigger>
                            )
                        })}
                        </Tabs.List>
                    </Box>
                </GridItem>
                <GridItem colSpan={{base:9, md: 8}} justifySelf="center" >
                    <Tabs.Content value="terms" width={{base: "full", md: "75%"}} padding={{base: 2, md: 0}}>
                        <Heading size={"4xl"}>TERMS OF USE</Heading>
                        <br/>
                        <Heading size={"lg"} color={"rgb(34 34 34 / 0.8)"}>{lastUpdated}</Heading>
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
                        <List.Root style={{marginLeft: 40}}>
                            <li>confirm that you have read and agree with our "<a href={'#term4'} style={{color: 'blue'}}>PROHIBITED ACTIVITIES</a>" and will not post, send, publish, upload, or transmit
                                through the Services any Submission that is illegal, harassing,
                                hateful, harmful, defamatory, obscene, bullying, abusive,
                                discriminatory, threatening to any person or group, sexually explicit,
                                false, inaccurate, deceitful, or misleading;</li>
                            <li>to the extent permissible by applicable law, waive any and all moral
                                rights to any such Submission;</li>
                            <li>warrant that any such Submission are original to you or that you
                                have the necessary rights and licenses to submit such Submissions
                                and that you have full authority to grant us the above-mentioned
                                rights in relation to your Submissions; and
                                warrant and represent that your Submissions do not constitute
                                confidential information.</li>
                        </List.Root>
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
                        <List.Root style={{marginLeft: 40}}>
                            <li>Systematically retrieve data or other content from the Services to
                                create or compile, directly or indirectly, a collection, compilation,
                                database, or directory without written permission from us.</li>
                            <li>Trick, defraud, or mislead us and other users, especially in any
                                attempt to learn sensitive account information such as user
                                passwords.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related
                                features of the Services, including features that prevent or restrict
                                the use or copying of any Content or enforce limitations on the use
                                of the Services and/or the Content contained therein.</li>
                            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
                                Services.</li>
                            <li>Use any information obtained from the Services in order to harass,
                                abuse, or harm another person.</li>
                            <li>Make improper use of our support services or submit false reports of
                                abuse or misconduct.</li>
                            <li>Use the Services in a manner inconsistent with any applicable laws
                                or regulations.</li>
                            <li>Engage in unauthorized framing of or linking to the Services.</li>
                            <li>Upload or transmit (or attempt to upload or to transmit) viruses,
                                Trojan horses, or other material, including excessive use of capital
                                letters and spamming (continuous posting of repetitive text), that
                                interferes with any party’s uninterrupted use and enjoyment of the
                                Services or modifies, impairs, disrupts, alters, or interferes with the
                                use, features, functions, operation, or maintenance of the Services.</li>
                            <li>Engage in any automated use of the system, such as using scripts to
                                send comments or messages, or using any data mining, robots, or
                                similar data gathering and extraction tools.</li>
                            <li>Delete the copyright or other proprietary rights notice from any
                                Content.</li>
                            <li>Attempt to impersonate another user or person or use the username
                                of another user.</li>
                            <li>Upload or transmit (or attempt to upload or to transmit) any material
                                that acts as a passive or active information collection or transmission
                                mechanism, including without limitation, clear graphics interchange
                                formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar
                                devices (sometimes referred to as "spyware" or "passive collection
                                mechanisms" or "pcms").</li>
                            <li>Interfere with, disrupt, or create an undue burden on the Services or
                                the networks or services connected to the Services.</li>
                            <li>Harass, annoy, intimidate, or threaten any of our employees or
                                agents engaged in providing any portion of the Services to you.</li>
                            <li>Attempt to bypass any measures of the Services designed to
                                prevent or restrict access to the Services, or any portion of the
                                Services.</li>
                            <li>Copy or adapt the Services' software, including but not limited to
                                Flash, PHP, HTML, JavaScript, or other code.</li>
                            <li>Except as permitted by applicable law, decipher, decompile,
                                disassemble, or reverse engineer any of the software comprising or
                                in any way making up a part of the Services.</li>
                            <li>Except as may be the result of standard search engine or Internet
                                browser usage, use, launch, develop, or distribute any automated
                                system, including without limitation, any spider, robot, cheat utility,
                                scraper, or offline reader that accesses the Services, or use or
                                launch any unauthorized script or other software.</li>
                            <li>Use a buying agent or purchasing agent to make purchases on the
                                Services.</li>
                            <li>Make any unauthorized use of the Services, including collecting
                                usernames and/or email addresses of users by electronic or other
                                means for the purpose of sending unsolicited email, or creating user
                                accounts by automated means or under false pretenses.</li>
                            <li>Use the Services as part of any effort to compete with us or
                                otherwise use the Services and/or the Content for any revenue
                                generating endeavor or commercial enterprise.</li>
                            <li>Sell or otherwise transfer your profile.</li>
                        </List.Root>

                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term5"}>5. USER GENERATED CONTRIBUTIONS</Heading>
                        <br/>
                        <Text style={textStyles}>The Services does not offer users to submit or post content. We may
                            provide you with the opportunity to create, submit, post, display, transmit,
                            perform, publish, distribute, or broadcast content and materials to us or on
                            the Services, including but not limited to text, writings, video, audio,
                            photographs, graphics, comments, suggestions, or personal information or
                            other material (collectively, "Contributions"). Contributions may be viewable
                            by other users of the Services and through third-party websites. When you
                            create or make available any Contributions, you thereby represent and
                            warrant that:</Text>
                        <List.Root style={{marginLeft: 40}}>
                            <li>The creation, distribution, transmission, public display, or
                                performance, and the accessing, downloading, or copying of your
                                Contributions do not and will not infringe the proprietary rights,
                                including but not limited to the copyright, patent, trademark, trade
                                secret, or moral rights of any third party.</li>
                            <li>You are the creator and owner of or have the necessary licenses,
                                rights, consents, releases, and permissions to use and to authorize
                                us, the Services, and other users of the Services to use your
                                Contributions in any manner contemplated by the Services and
                                these Legal Terms.</li>
                            <li>You have the written consent, release, and/or permission of each
                                and every identifiable individual person in your Contributions to use
                                the name or likeness of each and every such identifiable individual
                                person to enable inclusion and use of your Contributions in any
                                manner contemplated by the Services and these Legal Terms.</li>
                            <li>Your Contributions are not false, inaccurate, or misleading.</li>
                            <li>Your Contributions are not unsolicited or unauthorized advertising,
                                promotional materials, pyramid schemes, chain letters, spam, mass
                                mailings, or other forms of solicitation.</li>
                            <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent,
                                harassing, libelous, slanderous, or otherwise objectionable (as
                                determined by us).</li>
                            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or
                                abuse anyone.</li>
                            <li>Your Contributions are not used to harass or threaten (in the legal
                                sense of those terms) any other person and to promote violence
                                against a specific person or class of people.</li>
                            <li>Your Contributions do not violate any applicable law, regulation, or
                                rule.</li>
                            <li>Your Contributions do not violate the privacy or publicity rights of any
                                third party.</li>
                            <li>Your Contributions do not violate any applicable law concerning child
                                pornography, or otherwise intended to protect the health or well
                                being of minors.</li>
                            <li>Your Contributions do not include any offensive comments that are
                                connected to race, national origin, gender, sexual preference, or
                                physical handicap.</li>
                            <li>Your Contributions do not otherwise violate, or link to material that
                                violates, any provision of these Legal Terms, or any applicable law or
                                regulation.</li>
                        </List.Root>
                        <Text style={textStyles}>Any use of the Services in violation of the foregoing violates these Legal
                            Terms and may result in, among other things, termination or suspension of
                            your rights to use the Services.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term6"}>6. CONTRIBUTION LICENSE</Heading>
                        <br/>

                        <Text style={textStyles}>You and Services agree that we may access, store, process, and use any
                            information and personal data that you provide and your choices (including
                            settings).</Text>
                        <Text style={textStyles}>By submitting suggestions or other feedback regarding the Services, you
                            agree that we can use and share such feedback for any purpose without
                            compensation to you.</Text>
                        <Text style={textStyles}>We do not assert any ownership over your Contributions. You retain full
                            ownership of all of your Contributions and any intellectual property rights or
                            other proprietary rights associated with your Contributions. We are not
                            liable for any statements or representations in your Contributions provided
                            by you in any area on the Services. You are solely responsible for your
                            Contributions to the Services and you expressly agree to exonerate us
                            from any and all responsibility and to refrain from any legal action against
                            us regarding your Contributions.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term7"}>7. THIRD-PARTY WEBSITES AND CONTENT</Heading>
                        <br/>
                        <Text style={textStyles}>The Services may contain (or you may be sent via the Site) links to other
                            websites ("Third-Party Websites") as well as articles, photographs, text,
                            graphics, pictures, designs, music, sound, video, information, applications,
                            software, and other content or items belonging to or originating from third
                            parties ("Third-Party Content"). Such Third-Party Websites and Third-Party
                            Content are not investigated, monitored, or checked for accuracy,
                            appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third
                            Party Content posted on, available through, or installed from the Services,
                            including the content, accuracy, offensiveness, opinions, reliability, privacy
                            practices, or other policies of or contained in the Third-Party Websites or
                            the Third-Party Content. Inclusion of, linking to, or permitting the use or
                            installation of any Third-Party Websites or any Third-Party Content does
                            not imply approval or endorsement thereof by us. If you decide to leave the use or install from the Services. Any purchases you make through Third
                            Party Websites will be through other websites and from other companies,
                            and we take no responsibility whatsoever in relation to such purchases
                            which are exclusively between you and the applicable third party. You
                            agree and acknowledge that we do not endorse the products or services
                            offered on Third-Party Websites and you shall hold us blameless from any
                            harm caused by your purchase of such products or services. Additionally,
                            you shall hold us blameless from any losses sustained by you or harm
                            caused to you relating to or resulting in any way from any Third-Party
                            Content or any contact with Third-Party Websites.</Text>

                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term8"}>8. SERVICES MANAGEMENT</Heading>
                        <br/>

                        <Text style={textStyles}>We reserve the right, but not the obligation, to: (1) monitor the Services for
                            violations of these Legal Terms; (2) take appropriate legal action against
                            anyone who, in our sole discretion, violates the law or these Legal Terms,
                            including without limitation, reporting such user to law enforcement
                            authorities; (3) in our sole discretion and without limitation, refuse, restrict
                            access to, limit the availability of, or disable (to the extent technologically
                            feasible) any of your Contributions or any portion thereof; (4) in our sole
                            discretion and without limitation, notice, or liability, to remove from the
                            Services or otherwise disable all files and content that are excessive in size
                            or are in any way burdensome to our systems; and (5) otherwise manage
                            the Services in a manner designed to protect our rights and property and to
                            facilitate the proper functioning of the Services.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term9"}>9. PRIVACY POLICY</Heading>
                        <br/>

                        <Text style={textStyles}>We care about data privacy and security. By using the Services, you agree
                            to be bound by our Privacy Policy posted on the Services, which is
                            incorporated into these Legal Terms.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term10"}>10. TERM AND TERMINATION</Heading>
                        <br/>
                        <Text style={textStyles}>These Legal Terms shall remain in full force and effect while you use the
                            Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                            LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                            DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO
                            AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP
                            ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
                            REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                            REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
                            THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
                            REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN
                            THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT
                            YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                            DISCRETION.</Text>
                        <Text style={textStyles}>If we terminate or suspend your account for any reason, you are prohibited
                            from registering and creating a new account under your name, a fake or
                            borrowed name, or the name of any third party, even if you may be acting
                            on behalf of the third party. In addition to terminating or suspending your
                            account, we reserve the right to take appropriate legal action, including
                            without limitation pursuing civil, criminal, and injunctive redress.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term11"}>11. MODIFICATIONS AND INTERRUPTIONS</Heading>
                        <br/>
                        <Text style={textStyles}>We reserve the right to change, modify, or remove the contents of the
                            Services at any time or for any reason at our sole discretion without notice.
                            However, we have no obligation to update any information on our Services.
                            We will not be liable to you or any third party for any modification, price
                            change, suspension, or discontinuance of the Services.</Text>
                        <Text style={textStyles}>We cannot guarantee the Services will be available at all times. We may
                            experience hardware, software, or other problems or need to perform
                            maintenance related to the Services, resulting in interruptions, delays, or
                            errors. We reserve the right to change, revise, update, suspend,
                            discontinue, or otherwise modify the Services at any time or for any reason
                            without notice to you. You agree that we have no liability whatsoever for
                            any loss, damage, or inconvenience caused by your inability to access or
                            use the Services during any downtime or discontinuance of the Services.
                            Nothing in these Legal Terms will be construed to obligate us to maintain
                            and support the Services or to supply any corrections, updates, or releases
                            in connection therewith.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term12"}>12. GOVERNING LAW</Heading>
                        <br/>
                        <Text style={textStyles}>These Legal Terms shall be governed by and defined following the laws of
                            Hong Kong. TechnoFleet Limited and yourself irrevocably consent that the
                            courts of Hong Kong shall have exclusive jurisdiction to resolve any dispute
                            which may arise in connection with these Legal Terms.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term12"}>13. DISPUTE RESOLUTION</Heading>
                        <br/>
                        <Heading size={"lg"}>Informal Negotiations</Heading>
                        <Text style={textStyles}>To expedite resolution and control the cost of any dispute, controversy, or
                            claim related to these Legal Terms (each a "Dispute" and collectively, the
                            "Disputes") brought by either you or us (individually, a "Party" and
                            collectively, the "Parties"), the Parties agree to first attempt to negotiate any
                            Dispute (except those Disputes expressly provided below) informally for at
                            least thirty (30) days before initiating arbitration. Such informal negotiations
                            commence upon written notice from one Party to the other Party.</Text>
                        <br/>
                        <Heading size={"lg"}>Binding Arbitration</Heading>
                        <Text style={textStyles}>If the parties are unable to resolve the dispute through informal negotiation,
                            the dispute shall be finally resolved by arbitration in accordance with the
                            United Nations Commission on International Trade Law Arbitration Rules in
                            force at the time of commencement of the arbitration.</Text>
                        <br/>
                        <Heading size={"lg"}>Restrictions</Heading>
                        <Text style={textStyles}>The Parties agree that any arbitration shall be limited to the Dispute
                            between the Parties individually. To the full extent permitted by law, (a) no
                            arbitration shall be joined with any other proceeding; (b) there is no right or
                            authority for any Dispute to be arbitrated on a class-action basis or to utilize
                            class action procedures; and (c) there is no right or authority for any
                            Dispute to be brought in a purported representative capacity on behalf of
                            the general public or any other persons.</Text>
                        <br/>
                        <Heading size={"lg"}>Exceptions to Informal Negotiations and Arbitration</Heading>
                        <Text style={textStyles}>The Parties agree that the following Disputes are not subject to the above
                            provisions concerning informal negotiations binding arbitration: (a) any
                            Disputes seeking to enforce or protect, or concerning the validity of, any of
                            the intellectual property rights of a Party; (b) any Dispute related to, or
                            arising from, allegations of theft, piracy, invasion of privacy, or unauthorized
                            use; and (c) any claim for injunctive relief. If this provision is found to be
                            illegal or unenforceable, then neither Party will elect to arbitrate any
                            Dispute falling within that portion of this provision found to be illegal or
                            unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties
                            agree to submit to the personal jurisdiction of that court.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term14"}>14. CORRECTIONS</Heading>
                        <br/>
                        <Text style={textStyles}>There may be information on the Services that contains typographical
                            errors, inaccuracies, or omissions, including descriptions, pricing,
                            availability, and various other information. We reserve the right to correct
                            any errors, inaccuracies, or omissions and to change or update the
                            information on the Services at any time, without prior notice.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term15"}>15. DISCLAIMER</Heading>
                        <br/>
                        <Text style={textStyles}>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                            BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT
                            YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
                            WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
                            CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
                            INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                            NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                            REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS
                            OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES
                            OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
                            ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
                            MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
                            PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                            WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF
                            THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
                            OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                            INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,
                            (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
                            FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES,
                            OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
                            SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
                            OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
                            OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF
                            ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE
                            AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
                            GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
                            SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
                            THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
                            MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
                            ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
                            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
                            YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
                            SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
                            THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD
                            USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
                            APPROPRIATE.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term16"}>16. LIMITATIONS OF LIABILITY</Heading>
                        <br/>
                        <Text style={textStyles}>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR
                            AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
                            INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL,
                            OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE,
                            LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF
                            THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
                            POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING
                            TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU
                            FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
                            OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT
                            PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD
                            PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE
                            LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
                            IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF
                            CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL
                            OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO
                            YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term17"}>17. INDEMNIFICATION</Heading>
                        <br/>
                        <Text style={textStyles}>You agree to defend, indemnify, and hold us harmless, including our
                            subsidiaries, affiliates, and all of our respective officers, agents, partners,
                            and employees, from and against any loss, damage, liability, claim, or
                            demand, including reasonable attorneys’ fees and expenses, made by any
                            third party due to or arising out of: (1) use of the Services; (2) breach of
                            these Legal Terms; (3) any breach of your representations and warranties
                            set forth in these Legal Terms; (4) your violation of the rights of a third
                            party, including but not limited to intellectual property rights; or (5) any overt
                            harmful act toward any other user of the Services with whom you
                            connected via the Services. Notwithstanding the foregoing, we reserve the
                            right, at your expense, to assume the exclusive defense and control of any
                            matter for which you are required to indemnify us, and you agree to
                            cooperate, at your expense, with our defense of such claims. We will use
                            reasonable efforts to notify you of any such claim, action, or proceeding
                            which is subject to this indemnification upon becoming aware of it.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term18"}>18. USER DATA</Heading>
                        <br/>
                        <Text style={textStyles}>We will maintain certain data that you transmit to the Services for the
                            purpose of managing the performance of the Services, as well as data
                            relating to your use of the Services. Although we perform regular routine
                            backups of data, you are solely responsible for all data that you transmit or
                            that relates to any activity you have undertaken using the Services. You
                            agree that we shall have no liability to you for any loss or corruption of any
                            such data, and you hereby waive any right of action against us arising from
                            any such loss or corruption of such data.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term19"}>19. ELECTRONIC COMMUNICATIONS,
                            TRANSACTIONS, AND SIGNATURES</Heading>
                        <br/>
                        <Text style={textStyles}>Visiting the Services, sending us emails, and completing online forms
                            constitute electronic communications. You consent to receive electronic
                            communications, and you agree that all agreements, notices, disclosures,
                            and other communications we provide to you electronically, via email and
                            on the Services, satisfy any legal requirement that such communication be
                            in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC
                            SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND
                            TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
                            OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
                            SERVICES. You hereby waive any rights or requirements under any
                            statutes, regulations, rules, ordinances, or other laws in any jurisdiction
                            which require an original signature or delivery or retention of non-electronic
                            records, or to payments or the granting of credits by any means other than
                            electronic means.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term20"}>20. MISCELLANEOUS</Heading>
                        <br/>
                        <Text style={textStyles}>These Legal Terms and any policies or operating rules posted by us on the
                            Services or in respect to the Services constitute the entire agreement and
                            understanding between you and us. Our failure to exercise or enforce any
                            right or provision of these Legal Terms shall not operate as a waiver of
                            such right or provision. These Legal Terms operate to the fullest extent
                            permissible by law. We may assign any or all of our rights and obligations
                            to others at any time. We shall not be responsible or liable for any loss,
                            damage, delay, or failure to act caused by any cause beyond our
                            reasonable control. If any provision or part of a provision of these Legal
                            Terms is determined to be unlawful, void, or unenforceable, that provision
                            or part of the provision is deemed severable from these Legal Terms and
                            does not affect the validity and enforceability of any remaining provisions.
                            There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the
                            Services. You agree that these Legal Terms will not be construed against
                            us by virtue of having drafted them. You hereby waive any and all defenses
                            you may have based on the electronic form of these Legal Terms and the
                            lack of signing by the parties hereto to execute these Legal Terms.</Text>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"term21"}>21. CONTACT US</Heading>
                        <br/>
                        <Text style={textStyles}>In order to resolve a complaint regarding the Services or to receive further
                            information regarding use of the Services, please contact us at:</Text>
                        <Text style={textStyles}><b>TechnoFleet Limited</b></Text>
                        <Text style={textStyles}><b>WORKSHOP 60, 3/F, BLK A, EAST SUN IND CTR NO. 16 SHING YIP ST</b></Text>
                        <Text style={textStyles}><b>KWUN TONG</b></Text>
                        <Text style={textStyles}><b>Hong Kong</b></Text>
                        <Text style={textStyles}><b style={{color: "blue"}}>crewing@technofleet.org</b></Text>
                    </Tabs.Content>

                    <Tabs.Content value="privacy" marginLeft={{base: 0,md: 50}} width={{base: "full", md: "75%"}} padding={{base: 2, md: 0}}>
                        <Heading size={"4xl"}>PRIVACY NOTICE</Heading>
                        <br/>
                        <Heading size={"lg"} color={"rgb(34 34 34 / 0.8)"}>{lastUpdated}</Heading>
                        <br/>
                        <br/>
                        <Text style={textStyles}>This Privacy Notice (<b>"we,"</b> <b>"us,"</b> or <b>"our"</b>), describes how
                            and why we might access, collect, store, use, and/or share (<b>"process"</b>)
                            your personal information when you use our services (<b>"Services"</b>),
                            including when you:
                            <b>Questions or concerns?</b> Reading this Privacy Notice will help you
                            understand your privacy rights and choices. We are responsible for making
                            decisions about how your personal information is processed. If you do not
                            agree with our policies and practices, please do not use our Services.</Text>
                        <br/>
                        <br/>
                        <Heading size={"2xl"}>SUMMARY OF KEY POINTS</Heading>

                        <Text style={{...textStyles, fontStyle: "italic", fontWeight: "450"}}>
                            This summary provides key points from our Privacy Notice, but you
                            can find out more details about any of these topics by clicking the
                            link following each key point or by using our <a href={"#privacy-table-of-content"} style={linkStyles}>table of contents</a> below
                            to find the section you are looking for.
                        </Text>
                        <Text style={textStyles}>
                            <b>What personal information do we process?</b> When you visit, use, or
                            navigate our Services, we may process personal information depending on
                            how you interact with us and the Services, the choices you make, and the
                            products and features you use. Learn more about <a href={"#policy1"} style={linkStyles}>personal information you
                            disclose to us.</a>
                        </Text>
                        <Text style={textStyles}>
                            <b>Do we process any sensitive personal information?</b> Some of the
                            information may be considered "special" or "sensitive" in certain
                            jurisdictions, for example your racial or ethnic origins, sexual orientation,
                            and religious beliefs. We do not process sensitive personal information.
                        </Text>
                        <Text style={textStyles}>
                            <b>Do we collect any information from third parties?</b> We may collect
                            information from public databases, marketing partners, social media
                            platforms, and other outside sources. Learn more about <a style={linkStyles}>information
                            collected from other sources.</a>
                        </Text>
                        <Text style={textStyles}>
                            <b>How do we process your information?</b> We process your information to
                            provide, improve, and administer our Services, communicate with you, for
                            security and fraud prevention, and to comply with law. We may also
                            process your information for other purposes with your consent. We process
                            your information only when we have a valid legal reason to do so. Learn
                            more about <a href={"#policy2"} style={linkStyles}>how we process your information.</a>
                        </Text>
                        <Text style={textStyles}>
                            <b>In what situations and with which parties do we share personal
                            information?</b> We may share information in specific situations and with
                            specific third parties. Learn more about <a href={"#policy3"} style={linkStyles}>when and with whom we share
                            your personal information.</a>
                        </Text>
                        <Text style={textStyles}>
                            <b>What are your rights?</b> Depending on where you are located
                            geographically, the applicable privacy law may mean you have certain
                            rights regarding your personal information. Learn more about <a href={"#policy9"} style={linkStyles}>your privacy
                            rights.</a>
                        </Text>
                        <Text style={textStyles}>
                            <b>How do you exercise your rights?</b> The easiest way to exercise your
                            rights is by by contacting us.
                            We will consider and act upon any request in accordance with applicable
                            data protection laws.
                        </Text>
                        <Text style={textStyles}>
                            Want to learn more about what we do with any information we
                            collect? <a href={"#policy1"} style={linkStyles}>Review the Privacy Notice in full.</a>
                        </Text>

                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"privacy-table-of-content"}>TABLE OF CONTENTS</Heading><br/>

                        <a style={linkStyles} href="#policy1">1. WHAT INFORMATION DO WE COLLECT?</a><br/>
                        <a style={linkStyles} href="#policy2">2. HOW DO WE PROCESS YOUR INFORMATION?</a><br/>
                        <a style={linkStyles} href="#policy3">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                            INFORMATION?</a><br/>
                        <a style={linkStyles} href="#policy4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a><br/>
                        <a style={linkStyles} href="#policy5">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a><br/>
                        <a style={linkStyles} href="#policy6">6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</a><br/>
                        <a style={linkStyles} href="#policy7">7. HOW LONG DO WE KEEP YOUR INFORMATION?</a><br/>
                        <a style={linkStyles} href="#policy8">8. DO WE COLLECT INFORMATION FROM MINORS?</a><br/>
                        <a style={linkStyles} href="#policy9">9. WHAT ARE YOUR PRIVACY RIGHTS?</a><br/>
                        <a style={linkStyles} href="#policy10">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a><br/>
                        <a style={linkStyles} href="#policy11">11. DO WE MAKE UPDATES TO THIS NOTICE?</a><br/>
                        <a style={linkStyles} href="#policy12">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a><br/>
                        <a style={linkStyles} href="#policy13">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                            COLLECT FROM YOU?</a><br/>
                        <br/>
                        <br/>
                        <Heading size={"3xl"} id={"policy1"}>1. WHAT INFORMATION DO WE COLLECT?</Heading>
                        <br/>
                        <Heading size={"xl"} >Personal information you disclose to us</Heading>

                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b> We collect personal information that you provide to us.
                        </Text>
                        <Text style={textStyles}>
                            We collect personal information that you voluntarily provide to us when you
                            register on the Services, express an interest in obtaining information about
                            us or our products and Services, when you participate in activities on the
                            Services, or otherwise when you contact us.
                        </Text>
                        <br/>
                        <Text style={textStyles}>
                            <b>Sensitive Information.</b> We do not process sensitive information.
                        </Text>
                        <br/>
                        <Text style={textStyles}>
                            All personal information that you provide to us must be true, complete, and
                            accurate, and you must notify us of any changes to such personal
                            information.
                        </Text>
                        <br/>
                        <Heading size={"xl"} >Information automatically collected</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>  Some information — such as your Internet Protocol (IP) address
                            and/or browser and device characteristics — is collected automatically
                            when you visit our Services.
                        </Text>
                        <Text style={textStyles}>
                            We automatically collect certain information when you visit, use, or
                            navigate the Services. This information does not reveal your specific
                            identity (like your name or contact information) but may include device and
                            usage information, such as your IP address, browser and device
                            characteristics, operating system, language preferences, referring URLs,
                            device name, country, location, information about how and when you use
                            our Services, and other technical information. This information is primarily
                            needed to maintain the security and operation of our Services, and for our
                            internal analytics and reporting purposes.
                        </Text>
                        <Text style={textStyles}>
                            Like many businesses, we also collect information through cookies and
                            similar technologies.
                        </Text>
                        <br/>

                        <Heading size={"3xl"} id={"policy2"}>2. HOW DO WE PROCESS YOUR INFORMATION?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>  We process your information to provide, improve, and administer
                            our Services, communicate with you, for security and fraud prevention, and
                            to comply with law. We may also process your information for other
                            purposes with your consent.
                        </Text>
                        <Text style={textStyles}>
                            <b>We process your personal information for a variety of reasons,
                                depending on how you interact with our Services, including:</b>
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy3"}>3. WHEN AND WITH WHOM DO WE SHARE YOUR
                            PERSONAL INFORMATION?</Heading>
                        <br/>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>  We may share information in specific situations described in this
                            section and/or with the following third parties.
                        </Text>
                        <Text style={textStyles}>
                            We may need to share your personal information in the following situations:
                        </Text>
                       <List.Root marginLeft="30px">
                           <li>
                               <b>Business Transfers.</b> We may share or transfer your information in
                               connection with, or during negotiations of, any merger, sale of
                               company assets, financing, or acquisition of all or a portion of our
                               business to another company.
                           </li>
                           <li>
                               <b>Affiliates.</b> We may share your information with our affiliates, in
                               which case we will require those affiliates to honor this Privacy
                               Notice. Affiliates include our parent company and any subsidiaries,
                               joint venture partners, or other companies that we control or that are
                               under common control with us.
                           </li>
                           <li>
                               <b>Business Partners.</b> We may share your information with our
                               business partners to offer you certain products, services, or
                               promotions.
                           </li>
                       </List.Root>
                        <br/>
                        <Heading size={"3xl"} id={"policy4"}>4. DO WE USE COOKIES AND OTHER TRACKING
                            TECHNOLOGIES?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>  We may use cookies and other tracking technologies to collect
                            and store your information.
                        </Text>
                        <Text style={textStyles}>
                            We may use cookies and similar tracking technologies (like web beacons
                            and pixels) to gather information when you interact with our Services.
                            Some online tracking technologies help us maintain the security of our
                            Services, prevent crashes, fix bugs, save your preferences, and assist with
                            basic site functions.
                        </Text>
                        <Text style={textStyles}>
                            We also permit third parties and service providers to use online tracking
                            technologies on our Services for analytics and advertising, including to help
                            manage and display advertisements or to tailor advertisements to your
                            interests. The third parties and service providers use their technology to
                            provide advertising about products and services tailored to your interests
                            which may appear either on our Services or on other websites.
                        </Text>
                        <Text style={textStyles}>
                            Specific information about how we use such technologies and how you can
                            refuse certain cookies is set out in our Cookie Notice.
                        </Text>
                        <br/>

                        <Heading size={"3xl"} id={"policy5"}>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b> If you choose to register or log in to our Services using a social
                            media account, we may have access to certain information about you.
                        </Text>
                        <Text style={textStyles}>
                            Our Services offer you the ability to register and log in using your third
                            party social media account details (like your Facebook or X logins). Where
                            you choose to do this, we will receive certain profile information about you
                            from your social media provider. The profile information we receive may
                            vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well
                            as other information you choose to make public on such a social media
                            platform.
                        </Text>
                        <Text style={textStyles}>
                            We will use the information we receive only for the purposes that are
                            described in this Privacy Notice or that are otherwise made clear to you on
                            the relevant Services. Please note that we do not control, and are not
                            responsible for, other uses of your personal information by your third-party
                            social media provider. We recommend that you review their privacy notice
                            to understand how they collect, use, and share your personal information,
                            and how you can set your privacy preferences on their sites and apps.
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy6"}>6. IS YOUR INFORMATION TRANSFERRED
                            INTERNATIONALLY?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b> We may transfer, store, and process your information in countries
                            other than your own.
                        </Text>
                        <Text style={textStyles}>
                            Our servers are located in. Regardless of your location, please be aware
                            that your information may be transferred to, stored by, and processed by us
                            in our facilities and in the facilities of the third parties with whom we may
                            share your personal information (see "<a href={"#policy3"} style={linkStyles}>WHEN AND WITH WHOM DO WE
                            SHARE YOUR PERSONAL INFORMATION?</a>" above), including facilities
                            in and other countries.
                        </Text>
                        <Text style={textStyles}>
                            If you are a resident in the European Economic Area (EEA), United
                            Kingdom (UK), or Switzerland, then these countries may not necessarily
                            have data protection laws or other similar laws as comprehensive as those
                            in your country. However, we will take all necessary measures to protect
                            your personal information in accordance with this Privacy Notice and
                            applicable law.
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy7"}>7. HOW LONG DO WE KEEP YOUR INFORMATION?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>  We keep your information for as long as necessary to fulfill the
                            purposes outlined in this Privacy Notice unless otherwise required by law.
                        </Text>
                        <Text style={textStyles}>
                            We will only keep your personal information for as long as it is necessary
                            for the purposes set out in this Privacy Notice, unless a longer retention
                            period is required or permitted by law (such as tax, accounting, or other
                            legal requirements).
                        </Text>
                        <Text style={textStyles}>
                            When we have no ongoing legitimate business need to process your
                            personal information, we will either delete or anonymize such information,
                            or, if this is not possible (for example, because your personal information
                            has been stored in backup archives), then we will securely store your
                            personal information and isolate it from any further processing until deletion
                            is possible.
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy8"}>8. DO WE COLLECT INFORMATION FROM
                            MINORS?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b> We do not knowingly collect data from or market to children
                            under 18 years of age.
                        </Text>
                        <Text style={textStyles}>
                            We do not knowingly collect, solicit data from, or market to children under
                            18 years of age, nor do we knowingly sell such personal information. By
                            using the Services, you represent that you are at least 18 or that you are
                            the parent or guardian of such a minor and consent to such minor
                            dependent’s use of the Services. If we learn that personal information from
                            users less than 18 years of age has been collected, we will deactivate the
                            account and take reasonable measures to promptly delete such data from
                            our records. If you become aware of any data we may have collected from
                            children under age 18, please contact us at <a style={linkStyles}>crewing@technofleet.org</a>.
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy9"}>9. WHAT ARE YOUR PRIVACY RIGHTS?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>  You may review, change, or terminate your account at any time,
                            depending on your country, province, or state of residence.
                        </Text>
                        <Text style={textStyles}>
                            <b>Withdrawing your consent:</b> If we are relying on your consent to process
                            your personal information, which may be express and/or implied consent
                            depending on the applicable law, you have the right to withdraw your
                            consent at any time. You can withdraw your consent at any time by
                            contacting us by using the contact details provided in the section "<a href={"#policy13"} style={linkStyles}>HOW
                            CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
                        </Text>
                        <Text style={textStyles}>
                            However, please note that this will not affect the lawfulness of the
                            processing before its withdrawal nor, when applicable law allows, will it
                            affect the processing of your personal information conducted in reliance on
                            lawful processing grounds other than consent.
                        </Text>
                        <br/>
                        <Heading size={"xl"}>Account Information</Heading>
                        <br/>
                        <Text style={textStyles}>
                            If you would at any time like to review or change the information in your
                            account or terminate your account, you can:
                            Upon your request to terminate your account, we will deactivate or delete
                            your account and information from our active databases. However, we may
                            retain some information in our files to prevent fraud, troubleshoot problems,
                            assist with any investigations, enforce our legal terms and/or comply with
                            applicable legal requirements.
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy10"}>10. CONTROLS FOR DO-NOT-TRACK FEATURES</Heading>

                        <Text style={textStyles}>
                            Most web browsers and some mobile operating systems and mobile
                            applications include a Do-Not-Track ("DNT") feature or setting you can
                            activate to signal your privacy preference not to have data about your
                            online browsing activities monitored and collected. At this stage, no uniform
                            technology standard for recognizing and implementing DNT signals has
                            been finalized. As such, we do not currently respond to DNT browser
                            signals or any other mechanism that automatically communicates your
                            choice not to be tracked online. If a standard for online tracking is adopted
                            that we must follow in the future, we will inform you about that practice in a
                            revised version of this Privacy Notice.
                        </Text>
                        <Heading size={"3xl"} id={"policy11"}>11. DO WE MAKE UPDATES TO THIS NOTICE?</Heading>
                        <Text style={{...textStyles, fontStyle: "italic", margin: "10px 0"}}>
                            <b style={{fontStyle: "italic"}}>In Short:</b>Yes, we will update this notice as necessary to stay compliant
                            with relevant laws.
                        </Text>
                        <Text style={textStyles}>
                            We may update this Privacy Notice from time to time. The updated version
                            will be indicated by an updated "Revised" date at the top of this Privacy
                            Notice. If we make material changes to this Privacy Notice, we may notify
                            you either by prominently posting a notice of such changes or by directly
                            sending you a notification. We encourage you to review this Privacy Notice
                            frequently to be informed of how we are protecting your information.
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy12"}>12. HOW CAN YOU CONTACT US ABOUT THIS
                            NOTICE?</Heading>

                        <Text style={textStyles}>
                            If you have questions or comments about this notice, you may contact us
                            by post at:
                        </Text>
                        <Text style={textStyles}>
                            <a style={linkStyles}>crewing@technofleet.org</a>
                        </Text>
                        <br/>
                        <Heading size={"3xl"} id={"policy13"}>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE
                            THE DATA WE COLLECT FROM YOU?</Heading>
                        <Text style={textStyles}>
                            Based on the applicable laws of your country, you may have the right to
                            request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your
                            personal information. You may also have the right to withdraw your consent
                            to our processing of your personal information. These rights may be limited
                            in some circumstances by applicable law. To request to review, update, or
                            delete your personal information, please send email to <a style={linkStyles}>crewing@technofleet.org</a>

                        </Text>
                    </Tabs.Content>
                </GridItem>
            </Grid>
        </Tabs.Root>

    )
}