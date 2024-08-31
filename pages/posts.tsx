import { AspectRatio, Box,Heading } from "@chakra-ui/react"
import VoxelRoom from '../components/voxel-room'
import NoSsr from "no-ssr";

const PostPage = () => {
    return(
        <Box>
            <NoSsr>
                <VoxelRoom initialScale={3} modelName='/computer_terminal.glb' />
            </NoSsr>
            <Heading>МОЛОДОЙ ЮРА - ПЕЩЕРНЫЙ КУНЖ</Heading>
            <AspectRatio mt={4} maxW='760px' ratio={1}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/AspkYYHpp98?si=zJXEmsbFBkwUtdtj"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </AspectRatio>
        </Box>
    )
}

export default PostPage
