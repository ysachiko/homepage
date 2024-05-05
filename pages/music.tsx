import { Box } from "@chakra-ui/react"
import VoxelRoom from '../components/voxel-room'
import NoSsr from "../components/no-ssr";

const MusicPage = () => {
    return(
        <Box>
            <NoSsr>
                <VoxelRoom initialScale={2.5} modelName='/vinyl_player.glb' />
            </NoSsr>
        </Box>
    )
}

export default MusicPage