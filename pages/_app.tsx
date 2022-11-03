import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Header } from '../src/components/Header';
import { axeAccessibilityReporter } from '../src/utils/axeAccessibilityReporter';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter();
  },[]);
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
