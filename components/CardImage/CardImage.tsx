import {FC, useState} from "react";
import { Image, Modal, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import styled from "@emotion/styled";

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
                display="inline-block"
                src={src}
                alt="profile image"
            />
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <OverlayOne/>
                <ModalContent>
                    <ModalCloseButton />
                    <Image
                        onClick={() => setIsOpen(true)}
                        display="inline-block"
                        src={src}
                        alt="profile image"
                    />
                </ModalContent>
            </Modal>
        </>
    )
}
