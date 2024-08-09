import {Box, Card,Stack, Heading, CardBody} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {CardImage} from "CardImage";
import {useParams} from "next/navigation";
import styled from "@emotion/styled";

interface IImage {
    src: string;
    title: string;
}

const GridBox = styled.div`
    display: grid;
    margin: 20px;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media only screen and (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const images: Record<string, IImage[]> = {
    dombay: [
        {src: "/images/dombay/img.png", title: "Kislovodsk"},
        {src: "/images/dombay/img_1.png", title: "w o a"},
        {src: "/images/dombay/img_2.png", title: "chilling"},
        {src: "/images/dombay/img_3.png", title: "Kislovodsk 2"},
        {src: "/images/dombay/img_4.png", title: "happy chilling"},
        {src: "/images/dombay/img_5.png", title: "feel like Link"},
        {src: "/images/dombay/img_6.png", title: "ok"},
        {src: "/images/dombay/img_7.png", title: "mountains"},
        {src: "/images/dombay/night.png", title: "Night in Dombay"},
        {src: "/images/dombay/day.png", title: "Tur'ye lake"},
        {src: "/images/dombay/Night_2.png", title: "Night in Dombay 2"},],
    kazan: [
        {src: "/images/kazan/img.png", title: "coffee"},
        {src: "/images/kazan/img_1.png", title: ""},
        {src: "/images/kazan/img_2.png", title: "sober"}],
    voronezh: [
        {src: "/images/voronezh/hapnul_2.png", title: "Hapnul 2 (with one friend and one enemy...)"},
        {src: "/images/voronezh/img.png", title: "Sewer hatch"},
        {src: "/images/voronezh/img_1.png", title: "Chizhov Gallery"},
        {src: "/images/voronezh/Typography.png", title: "Typography"}],
    yaroslavl: [
        {src: "/images/yaroslavl/img.png", title: "birds"},
        {src: "/images/yaroslavl/img_1.png", title: "Russia <3"},
        {src: "/images/yaroslavl/img_2.png", title: "Russia <3"}],
    teriberka: [
        {src: "/images/teriberka/img.png", title: ""},
        {src: "/images/teriberka/img_1.png", title: "hot tea, cold sea"},
        {src: "/images/teriberka/img_2.png", title: "52"},
        {src: "/images/teriberka/img_3.png", title: "Kola Peninsula"}],
    kostroma: [
        {src: "/images/kostroma/img.png", title: "Snegyrechnaya"},
        {src: "/images/kostroma/img_1.png", title: ""},
        {src: "/images/kostroma/img_2.png", title: ""}],
}


const SubTravelPage = () => {
    const params = useParams<{param: string}>()
    const [data, setData] = useState<IImage[]>([])

    useEffect(() => {
        if (params?.param) {
            setData(images[params.param])
        }

    }, [params?.param])

    return(
        <>
            <GridBox >
                {data?.map((src) =>
                    <Card maxW='sm' h={'fit-content'} key={src.src}>
                        <CardBody>
                            <CardImage src={src.src}/>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{src.title}</Heading>
                            </Stack>
                        </CardBody>
                    </Card>
                )}
            </GridBox>
        </>
    )
}

export default SubTravelPage
