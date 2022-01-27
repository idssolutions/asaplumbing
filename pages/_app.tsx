import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import { ToastContainer } from 'react-nextjs-toast'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer/>
      <Nav />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
