import { Box, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const SpinnerContainer = styled(Box)`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
`

export const ButtonsContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    gap: 10px;
`

export const TrackInfoContainer = styled(Box)`
    height: 130px;
    display: flex;
    margin-top: 2rem;
`

export const TitleTrackContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1.5rem;
`

export const AudioImage = styled(Image)`
    max-width:150px;
    display: inline-block; 
`