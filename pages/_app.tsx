import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from '../lib/theme'
import Fonts from '../components/fonts'
import type { AppProps } from 'next/app' 

const Website = ({Component, pageProps, router}: AppProps) => {
    return(
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website;