import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.webp";
import Image from "next/image";
import prod1 from "./A-imgs/productos-inicio/vela.webp"
import prod2 from "./A-imgs/productos-inicio/difusor.webp"
import prod3 from "./A-imgs/productos-inicio/homespray.webp"
import prod4 from "./A-imgs/productos-inicio/bombon.webp"

function NuestrosProductos() {

  return (<>
    <Header />
      <div className='container-Nprods'>
        <div className='container-Nprods-left'>
          <div className="container-photo">
            <Image src={prod1}
            alt="VELAS" width={245} height={320}/>
          </div>
          <div className="container-Nprods-info">
              <h2>VELAS</h2>
              <p>
                Realizadas con cera natural de soja, la cual posee diversas propiedades,
                entre ellas que no emite gases tóxicos,duran más que las de parafina y no dejan residuos.
                Además le agregamos esencias concentradas de larga duración.
              </p>
          </div>
        </div>
        <div className='container-Nprods-right'>
          <div className="container-photo">
            <Image src={prod2}
            alt="DIFUSOR" className='fotoProd' width={245} height={320}/>
          </div>
          <div className="container-Nprods-info">
              <h2>DIFUSORES</h2>
              <p>
                Perfumes para ambiente y textiles, realizados con esencias concentradas de larga duración.
                Disponibles en versión plástico pet.
              </p>
          </div>
        </div>
        <div className='container-Nprods-left'>
          <div className="container-photo">
              <Image src={prod3}
              alt="HOMESPRAY" className='fotoProd' width={245} height={320}/>
          </div>
          <div className="container-Nprods-info">
              <h2>HOMESPRAYS</h2>
              <p>
                Perfumes realizados con esencias concentradas de larga duración, incluye varillas de madera. 
                Disponible en versión plástico pet y vidrio.
              </p>
          </div>
        </div>
        <div className='container-Nprods-right'>
          <div className="container-photo">
            <Image src={prod4}
            alt="BOMBON" className='fotoProd' width={245} height={320}/>
          </div>
          <div className="container-Nprods-info">
              <h2>BOMBONES</h2>
              <p>
                Realizados con cera de soja natural y perfumados con esencias concentradas. 
                Ideales para decoración o para su uso en el hornito (del mismo modo que se usaría la esencia). 
                Disponibles en su versión en bolsa de encaje o caja.
              </p>
          </div>
        </div>
      </div>

      <h1 className="title-refill">SOUVENIRS</h1>

      <div className="container-refill">
        <p> Ofrecemos servicio de souvenirs para eventos. Podes elegir el producto de la tienda que te guste y pedir un presupuesto para la cantidad que necesites.
            Se recomienda pedir este servicio con un mes de anticipación mínimo. Las fragancias son a elección y pueden ser surtidas.
        </p>
        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta sobre el servicio de souvenirs" target="_blank" rel="noreferrer" className="contacto-refill">Contactar servicio: 3487513839</a>
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


export default NuestrosProductos;