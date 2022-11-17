import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Header } from '../src/components/Header';
import { MobileHeader } from '../src/components/MobileHeader';
import { axeAccessibilityReporter } from '../src/utils/axeAccessibilityReporter';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const maxWidth = true;
  useEffect(() => {
    axeAccessibilityReporter();
  },[]);
  
  return (
    <>
      {maxWidth ? <MobileHeader/> : <Header/> }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
