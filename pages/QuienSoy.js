import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.webp";
import Image from "next/image";

function QuienSoy() {

  return (<>
    <Header />
      <div className='container-bio'>
          <div className='biografia'>
              <h1>Carolina Magnani</h1>
              <p>Hola! Bienvenidos! <br></br> Les voy a contar sobre mi, soy estudiante de marketing y emprendedora. Este emprendimiento nació como una forma de distenderme y hacer lo que me gusta. Espero que en los productos encuentren la relajación y bienestar que intento transmitir.</p>
          </div>
      </div>

      <div className="container-map">
        <p className="container-map-titulo">Me encuentro en Zárate</p>
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


export default QuienSoy;