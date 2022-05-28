import Image from 'next/image'
import {useContext, useEffect} from "react";
import CarouselInicio from "./Components/CarouselX/CarouselInicio";
import banner_1 from "./A-imgs/banner/banner.webp";
import banner_2 from "./A-imgs/banner/banner2.webp";
import logoWhap from "./A-imgs/whatsapp.webp";
import CarouselFragancia from "./Components/CarouselFraganciaX/CarouselFragancia";
import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import ProductosInicio from './Components/ProductosInicioX/ProductosInicio';
import { crlContext } from '../Context/CarouselContext';
import loading from "./A-imgs/loading_apple_wordpress.webp"

export default function Home() {

    const {carousel, carouselFragancia, carouselFraganciaSML}=useContext(crlContext)

    return(
        <div>

            {carousel.length!=0 && carouselFragancia.length!=0 && carouselFraganciaSML.length!=0?
                <>
                    <Header/>

                    <div className='banner-1'>
                        <Image src={banner_1} layout="responsive"  alt="BANNER" className="appear"/>
                    </div>

                    <div className='banner-2'>
                        <Image src={banner_2} layout="responsive" alt="BANNER" className="appear-ban2"/>
                    </div>

                    <CarouselInicio/>

                    <ProductosInicio/>

                    <CarouselFragancia/>

                    <div className="container-logoWhap">
                        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer">
                            <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
                        </a>
                    </div>

                    <Footer/>
                </>
            :
                <div className='cargando-index'>
                    <p>CARGANDO...</p>
                    <Image src={loading} alt="loading" width={70} height={70}/>
                </div>
            }       
        </div>
    )
}


