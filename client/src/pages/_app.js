import "@/styles/globals.css";
import "@/styles/Home.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="https://static.vecteezy.com/system/resources/previews/003/809/007/non_2x/global-sphere-icon-free-vector.jpg" />
                <title>CharitySphere | Voluteer</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
