import { Box } from "@chakra-ui/react"
import VoxelRoom from '../components/voxel-room'
import NoSsr from "../components/no-ssr";
import { AudioPlayer } from "audioplayer/Audioplayer";

const MusicPage = () => {
    return(
        <Box>
            <NoSsr>
                <VoxelRoom initialScale={2.5} modelName='/vinyl_player.glb' />              
            </NoSsr>
            <AudioPlayer/>
        </Box>
    )
}

export default MusicPage