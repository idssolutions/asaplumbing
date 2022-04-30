import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Toaster position="top-right" />
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
