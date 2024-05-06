import { Box, Button, Text, useColorModeValue  } from "@chakra-ui/react"
import * as React from 'react'
const { useState, useCallback, useRef } = React
import { useWavesurfer } from '@wavesurfer/react'
import { AudioImage, ButtonsContainer, TitleTrackContainer, TrackInfoContainer } from "./ui"
import { WaveSurferOptions } from "wavesurfer.js"

const formatTime = (seconds?: number) => {
    if (seconds === undefined) return 0
    return [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')
}

const contentUrls = [
    {
        imageUrl: '/images/boosya.jpg',
        audioUrl: '/music/YuYu - он не хочет мою нежность.mp3',
    },
    {
        imageUrl: '/images/podique.jpg',
        audioUrl: '/music/Podique ᵔ◡ᵔx Молодой Юра - Зависимость.mp3',
    }
    
    
]

const surferConfig: Partial<WaveSurferOptions> = {
    height: 100,
    waveColor: '#88ccca',
    progressColor: '#8d1d1d',
}


export const AudioPlayer = ( ) => {
    const containerRef = useRef(null)
    const [urlIndex, setUrlIndex] = useState(0)
    const [volume, setVolume] = useState(0.5)
  
    const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
        ...surferConfig,
        container: containerRef,
        url: contentUrls[urlIndex].audioUrl,
    })
  
    const onUrlChange = useCallback(() => {
        setUrlIndex((index) => (index + 1) % contentUrls.length)
    }, [])
  
    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])
  

    const handleVolume = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(e.target.value))
        wavesurfer?.setVolume(parseFloat(e.target.value))
    }, [wavesurfer])

    const handleMute = useCallback(() => {
        wavesurfer && wavesurfer.setMuted(!wavesurfer.getMuted())
    }, [wavesurfer])


    return (
        <>
            <Box ref={containerRef} />
            
            <Box>
                <TrackInfoContainer>
                    <AudioImage
                        boxSize='100px' 
                        src={contentUrls[urlIndex].imageUrl} 
                        alt="profile image"
                    /> 
                    <TitleTrackContainer>
                        <Text>{contentUrls[urlIndex].audioUrl.substring(7)}</Text>
  
                        <Text>
                            {formatTime(currentTime)} / {formatTime(wavesurfer?.getDuration())}
                        </Text>
                    </TitleTrackContainer>
                </TrackInfoContainer>
                

                <ButtonsContainer>
                    <Button colorScheme={useColorModeValue('purple', 'orange')} onClick={onUrlChange}>Change audio</Button>
                    <input
                        type="range"
                        id='volume'
                        name='volume'
                        min={0}
                        max={1}
                        step={0.05}
                        value={volume}
                        onChange={handleVolume}
                    />
                    <Button colorScheme={useColorModeValue('purple', 'orange')} onClick={onPlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </Button>
                    <Button colorScheme={useColorModeValue('purple', 'orange')} onClick={handleMute}>
                        {wavesurfer?.getMuted() ? 'UnMute': 'Mute'}
                    </Button>
                </ButtonsContainer>
            </Box>
            
        </>
    )
}