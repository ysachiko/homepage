import {Box, Card,Stack, Heading, CardBody} from "@chakra-ui/react"
import { useState} from "react";
import {CardImage} from "CardImage";

const imgSrcData = [
    {src: "/images/kazan/img.png", title: "coffee"},
    {src: "/images/kazan/img_1.png", title: ""},
    {src: "/images/kazan/img_2.png", title: "sober"}]


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
