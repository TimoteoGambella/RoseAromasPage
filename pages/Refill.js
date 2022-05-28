import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.webp";
import Image from "next/image";


function Refill() {

  return (<>
    <Header />
        <h1 className="title-refill">Refill</h1>

        <div className="container-refill">
          <p>Este servicio consiste en el rellenado de recipientes con cera de soja de origen vegetal y esencias concentradas. 
            Es una tecnica amigable con el planeta ya que se reutilizan los envases luego de terminar la vela, y de esta forma, se reduce la cantidad de recipientes.
          </p>
          <p className="puntos-refill">Requisitos:</p>
          <ul>
            <li>- Contar con un envase</li>
            <li>- Envase resistente a alta temperatura</li>
            <li>- Si es de madera, ser ignifugo</li>
            <li>- Servicio único para: Zárate-Campana-Lima</li>
          </ul>
          <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta sobre los Refill" target="_blank" rel="noreferrer" className="contacto-refill">Contactar servicio: 3487513839</a>
        </div>

        <div className="container-logoWhap">
          <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer">
              <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
          </a>
        </div>
    <Footer/>
    </>
  );
}


export default Refill;