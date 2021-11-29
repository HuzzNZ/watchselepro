import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={'w-full'}>
            <Header/>
            <div className={'my-8 w-full flex justify-center'}>
                <div className={'w-256'}>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    )
}

export default MyApp
