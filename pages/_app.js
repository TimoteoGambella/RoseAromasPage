import '../styles/style.scss';
import { CarouselContext } from '../Context/CarouselContext';
import {CartContext} from '../Context/CartContext';
import Head from 'next/head';
import Script from "next/script";
import { StorageContext } from '../Context/StorageContext';
import { useEffect } from 'react';
import * as gtag from "../lib/gtag"
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  
  return (
    <>
      <Head>
        <title>Rosé Aromas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta charSet="utf-8"/>
        <meta name="description" content="Sitio web de Rosé Aromas, emprendimiento de Zárate. Dedicado a la venta de velas, homesprays, difusores y bombones aromatizados."/>
	      <meta name="keywords" content="aromas, vela, difusor, bombon, homespray, perfume, decoracion, emprendimiento, rose"/>
        <meta name="theme-color" content="#084444"/>
        <link rel="apple-touch-icon" href="./A-imgs/rose.webp"></link>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1227625620686925" crossOrigin="anonymous"></script>

      </Head>
      
      <CarouselContext>
        <StorageContext>
          <CartContext>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"/>
            
            {/* Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />

            {/* Google Adsense */}
            {/* <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1655669335191511" crossOrigin="anonymous"></Script> */}
            
            
            <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
            <Script type="text/javascript" id='emailJS'>
              {() =>{
                  emailjs.init("iAGffvAUjlmg0kSrt");}
              }
            </Script>
            
            <Component {...pageProps} />            
            
          </CartContext>
        </StorageContext>
      
      </CarouselContext>
    </>)
}

export default MyApp
