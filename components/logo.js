import Link from "next/link";
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled"
import FootprintIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-seize: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    return (
        <Link href="/">
                <LogoBox>
                    {/* <Image src={footPrintImg} alt="logo" width={30} height={30} /> */}
                    <FootprintIcon />
                    <Text 
                        color={useColorModeValue("gray.800", "whiteAlpha.900")} 
                        fontFamily="M PLUS Rounded 1c" 
                        fontWeight="bold" 
                        ml={3}>Yura Kovalev
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo;