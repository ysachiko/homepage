import { Box } from "@chakra-ui/react"
import VoxelRoom from '../components/voxel-room'
import NoSsr from "../components/no-ssr";

const PostPage = () => {
    return(
        <Box>
            <NoSsr>
                <VoxelRoom initialScale={3} modelName='/computer_terminal.glb' />
            </NoSsr>
        </Box>
    )
}

export default PostPage