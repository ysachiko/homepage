import {Box, Heading, SimpleGrid} from "@chakra-ui/react"
import VoxelRoom from '../components/voxel-room'
import NoSsr from "../components/no-ssr";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledGrid = styled(SimpleGrid)`
    margin-top: 20px;
    @media (max-width: 720px) {
        justify-items: center;
    }
`

const StyledTitle = styled(Heading)`
    @media (max-width: 720px) {
        text-align: center;
    }
`

const PostPage = () => {
    return(
        <Box>
            <NoSsr>
                <VoxelRoom initialScale={2.5} modelName='/vinyl_player.glb' />
            </NoSsr>
            <StyledTitle>My Vinyl</StyledTitle>
            <StyledGrid minChildWidth='300px' spacing='40px'>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img.png"} alt={'vinyl'} height={300} width={300}/>
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_1.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_2.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_3.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_4.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_5.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_6.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_8.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_9.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_10.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_11.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_12.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_13.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_14.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_15.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_16.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_17.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
                <Box maxH='300px' maxW='300px'>
                    <Image src={"/images/vinyl/img_18.png"} alt={'vinyl'} height={300} width={300}  />
                </Box>
            </StyledGrid>
        </Box>
    )
}

export default PostPage
