import {Box, Card,Stack, Heading, CardBody} from "@chakra-ui/react"
import { useState} from "react";
import {CardImage} from "CardImage";

const imgSrcData = [
    {src: "/images/dombay/night.png", title: "Night in Dombay"},
    {src: "/images/dombay/day.png", title: "Tur'ye lake"},
    {src: "/images/dombay/Night_2.png", title: "Night in Dombay 2"},
    {src: "/images/dombay/waterfall.png", title: "waterfall"}]


const DombayPage = () => {
    const [data, _setData] = useState(imgSrcData)

    return(
        <>
            <Box display="flex" margin="20px" gap={"20px"} flexDirection="column" alignItems="center" justifyContent="space-between">
                {data.map((src) =>
                    <Card maxW='sm' key={src.src}>
                        <CardBody>
                            <CardImage src={src.src}/>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{src.title}</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                )}
            </Box>
        </>
    )
}

export default DombayPage
