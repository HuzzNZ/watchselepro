import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const handleRouteChange = (url: string) => {
        // @ts-ignore
        window.gtag('config', '[Tracking ID]', {
            page_path: url,
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
            <Meta/>
            <Header/>
            <div className={'w-full h-20'}>

            </div>
            <div className={'my-8 w-full flex justify-center'}>
                <div className={'w-256'}>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    )
}

export default MyApp
