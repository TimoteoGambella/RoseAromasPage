import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.webp";
import Image from "next/image";
import CartContainer from "./Components/CartContainerX/CartContainer";

function Cart() {

  return (<>
    <Header />

        <CartContainer/>

        <div className="container-logoWhap">
          <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer">
              <Image src={logoWhap} alt="Whap" className='logoWhap' width={80} height={80}/>
          </a>
        </div>
    <Footer/>
    </>
  );
}





export default Cart;