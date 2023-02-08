import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Footer } from '../src/components/Footer';
import { Header } from '../src/components/Header';
import { axeAccessibilityReporter } from '../src/utils/axeAccessibilityReporter';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    axeAccessibilityReporter();
  },[]);
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
