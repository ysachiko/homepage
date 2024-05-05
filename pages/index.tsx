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
import VoxelRoom from '../components/voxel-room'
import NoSsr from "../components/no-ssr";
import styled from '@emotion/styled';

const ButtonContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px 0;
`

const AboutTitle = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Page = () => {
    return (
        <Container>
            <NoSsr>
                <VoxelRoom modelName='/my_computer.glb' pos={{x:-0.5, y:0, z:0}} />
            </NoSsr>
            <AboutTitle borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={10} mb={6}>
                Hi, I&apos;m a frontend developer based in Moscow, Russia.
            </AboutTitle>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Yura Kovalev
                    </Heading>
                    <p>
                        Internet Serfer (Musician / Developer / Flower Boy)
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
                        borderWidth={1}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={1} 
                            borderStyle="solid" 
                            maxWidth="100px" 
                            display="inline-block" 
                            borderRadius="full" 
                            src="/images/me.jpg" 
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
                    Greetings, guys. 
                    As you may have already read, 
                    I am a frontend developer, working for the Russian company &ldquo;Sbermarket&ldquo;. 
                    I made this site to flex and learn Next.JS and Chakra. 
                    I&lsquo;m in love with vinyl, amazing at cooking and currently making a smart home. 
                    You can always subscribe to me on {' '}
                    <Link as={NextLink} href="https://www.instagram.com/fluttybeats/" passHref scroll={false}>
                        instagram
                    </Link>
                    . Also you can check my github, there are no particularly interesting projects yet, but someday there will be.
                </Paragraph>
                <ButtonContainer>
                    <Button
                        as={NextLink}
                        href="https://github.com/ysachiko"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        my git
                    </Button>
                </ButtonContainer>
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
                    Works at Sbermarket.
                </BioSection>
            </Section>
        </Container>
        
    )
}



export default Page;