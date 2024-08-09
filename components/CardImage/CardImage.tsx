import {FC, useState} from "react";
import {Box, Modal, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from 'next/image'

const OverlayOne = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
    />
)
const StyledImage = styled(Image)`
    &:hover {
        cursor: zoom-in;
    }
`

export const CardImage:FC<{src: string}> = ({src}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <StyledImage
                onClick={() => setIsOpen(true)}
                width={500}
                height={500}
                src={src}
                alt="profile image"
            />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <OverlayOne/>
                <ModalContent w={'auto'} h={'auto'} maxW={'700px'} maxH={'700px'}>
                    <ModalCloseButton />
                    <Image
                        onClick={() => setIsOpen(true)}
                        src={src}
                        quality={100}
                        width={500}
                        height={300}
                        alt="profile image"
                    />
                </ModalContent>
            </Modal>
        </>
    )
}
