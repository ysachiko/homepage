import NextLink from 'next/link';
import {
    Link,
    Container,
    Heading,
    Box,
    Button,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react'
import Section from "../components/section";
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={10} mb={6} align="center">
                Hi, I&apos;m a frontend developer based in Moscow, Russia.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                 <Heading as="h2" variant="page-title">
                    Yura Kovalev
                 </Heading>
                 <p>
                    Internet Serfer ( Musician / Developer / Flower Boy)
                 </p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/YK.png" 
                            alt="profile image"
                        /> 
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                    <Paragraph>
                    Greetings, friends. 
                    As you may have already read, 
                    I am a frontend developer, working for the Russian company &ldquo;Samokat&ldquo;. 
                    I made this site to flex and learn Next.JS and Chakra. 
                    I&lsquo;m in love with vinyl, make a smart home, and am a delicious cook. 
                    You can always subscribe to me on {' '}
                        <Link as={NextLink} href="https://www.instagram.com/fluttybeats/" passHref scroll={false}>
                            instagram
                        </Link>
                    . Also you can check my github, there are no particularly interesting projects there yet, but someday there will be.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/works"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            my git
                        </Button>
                    </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>
                        1999
                    </BioYear>
                    Born in Omsk, Russia.
                </BioSection>
                <BioSection>
                    <BioYear>
                        2021
                    </BioYear>
                   Worked at <Link as={NextLink} href="https://fabuma.ru/" passHref scroll={false}>
                            Fabuma Records.
                        </Link>
                </BioSection>
                <BioSection>
                    <BioYear>
                        2022
                    </BioYear>
                    Became a computer security specialist Institute of Cybernetics MIREA.
                </BioSection>
                <BioSection>
                    <BioYear>
                        2023 to present
                    </BioYear>
                    Works at Samokat.
                </BioSection>
            </Section>
        </Container>
        
    )
}



export default Page;