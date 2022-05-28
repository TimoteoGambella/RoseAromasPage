import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.webp";
import Image from "next/image";
import Form from "./Components/FormX/Form";

function FinalizarCompra() {

  return (<>
    <Header />
      <div className="form-title">
          <h1>FINALIZAR COMPRA</h1>
      </div>

      <div className="form-container">
      <Form />
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


export default FinalizarCompra;