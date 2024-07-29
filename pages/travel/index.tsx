import {Box} from "@chakra-ui/react"
import styled from "@emotion/styled";
import Link from "next/link";
import VoxelRoom from "voxel-room";
import NoSsr from "no-ssr";

const LinkText = styled.span`
    &:hover {
        color: #88ccca;
    }
    font-size: 18px;
    transition: color 0.3s;
`

const TravelPage = () => {
    return(
        <>
            <NoSsr>
                <VoxelRoom initialScale={15} modelName='/earth.glb' />
            </NoSsr>
            <Box display="flex" padding='15px' flexDirection='column' gap="10px" justifyContent="space-between">
                <Link href="/travel/dombay"><LinkText>Dombay 2024</LinkText></Link>
                <Link href="/travel/voronezh"><LinkText>Voronezh 2024</LinkText></Link>
            </Box>
        </>
    )
}

export default TravelPage
