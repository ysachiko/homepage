import {Box, Heading, SimpleGrid, Text} from "@chakra-ui/react"
import VoxelRoom from '../components/voxel-room'
import NoSsr from "no-ssr";
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

const data = [
    {src: "/images/vinyl/img.png", title: 'Frank Ocean - Blonde'},
    {src: "/images/vinyl/dr_1.jpg", title: 'Ye - My Beautiful Dark Twisted Fantasy'},
    {src: "/images/vinyl/dr_2.jpg", title: 'A$AP Rocky - At. Long. Last. ASAP'},
    {src: "/images/vinyl/dr_3.jpg", title: 'Doja Cat - Hot Pink'},
    {src: "/images/vinyl/dr_4.jpg", title: 'Yung Lean - Stranger'},
    {src: "/images/vinyl/img_1.png", title: 'Daft Punk - Random Access Memories'},
    {src: "/images/vinyl/img_2.png", title: 'JPEGMAFIA - All My Heroes Are Cornballs'},
    {src: "/images/vinyl/img_3.png", title: 'David Bowie - The Rise and Fall of Ziggy Stardust and the Spiders from Mars'},
    {src: "/images/vinyl/img_4.png", title: 'Tyler, the Creator - Call Me If You Get Lost'},
    {src: "/images/vinyl/img_5.png", title: 'Tyler, the Creator - Flower Boy'},
    {src: "/images/vinyl/img_6.png", title: 'Kids See Ghosts'},
    {src: "/images/vinyl/img_8.png", title: 'Frank Ocean - Nostalgia, Ultra'},
    {src: "/images/vinyl/img_9.png", title: 'Kendrick Lamar - To Pimp a Butterfly'},
    {src: "/images/vinyl/img_10.png", title: '100 gecs - 10,000 gecs'},
    {src: "/images/vinyl/img_11.png", title: 'dog shit 💩'},
    {src: "/images/vinyl/img_12.png", title: 'Portishead - Dummy'},
    {src: "/images/vinyl/img_13.png", title: 'Madvillain - Madvillainy '},
    {src: "/images/vinyl/img_14.png", title: 'FKA twigs - Caprisongs'},
    {src: "/images/vinyl/img_15.png", title: 'Burial - Burial'},
    {src: "/images/vinyl/img_16.png", title: 'The Beatles - Abbey Road'},
    {src: "/images/vinyl/img_17.png", title: 'Siouxsie and the Banshees - Juju'},
    {src: "/images/vinyl/img_18.png", title: 'Джунгли – Весна В Шанхае'},
]

const PostPage = () => {
    return(
        <Box>
            <NoSsr>
                <VoxelRoom initialScale={2.5} modelName='/vinyl_player.glb' />
            </NoSsr>
            <StyledTitle>My Vinyl</StyledTitle>
            <StyledGrid minChildWidth='300px' spacing='40px'>
                {
                    data.map((record) =>
                        <Box  maxW='300px' key={record.title}>
                            <Image src={record.src} alt={'vinyl'} height={300} width={300}/>
                            <Text fontSize='xl'>{record.title}</Text>
                        </Box>)
                }

            </StyledGrid>
        </Box>
    )
}

export default PostPage
