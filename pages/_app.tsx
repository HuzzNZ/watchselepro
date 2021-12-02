import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Meta from "../components/Meta";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const handleRouteChange = (url: string) => {
        // @ts-ignore
        window.gtag('config', 'G-PMG9HME0S4', {
            page_path: url
        });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className={'w-full'}>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PMG9HME0S4"/>
            <Script strategy="afterInteractive" id={"Google Analytics"} dangerouslySetInnerHTML={{ __html:`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PMG9HME0S4');`
            }}/>
            <Meta page={""}/>
            <Header/>
            <div className={'w-full h-20'}>

            </div>
            <div className={'my-8 w-full flex justify-center'}>
                <div className={'lg:w-248 lg:px-0 w-full px-4'}>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    )
}

export default MyApp
