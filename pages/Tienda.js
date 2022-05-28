import Header from "./Components/HeaderX/Header";
import Footer from "./Components/FooterX/Footer";
import logoWhap from "./A-imgs/whatsapp.webp";
import Image from "next/image";
import { useState, useEffect } from "react";
import TiendaContainer from "./Components/TiendaContainerX/TiendaContainer";
import NavBarTienda from "./Components/NavBarX/NavBarTienda";
import { useRouter } from 'next/router'
import Notification from "./Components/NotificationX/Notification";

function Tienda({typeProd}) {

  const [itemType, setItemType] = useState("Todo");
  const [showNotification,setShowNotification] = useState(false)
  const [showNotification2,setShowNotification2] = useState(false)

  
  const router=useRouter()

  useEffect(()=>{
    if(router.query.keyword != undefined){
      setItemType(router.query.keyword)
    }
  },[router])// eslint-disable-line react-hooks/exhaustive-deps


  return (<>
    <Header />

        <NavBarTienda setItemType={setItemType}/>

        <TiendaContainer itemType={itemType} setItemType={setItemType} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
        
        <div className="notification-container" style={showNotification ? {zIndex:'5'} : null}>
          <Notification showNotification={showNotification} text={"Recuerda seleccionar una fragancia"}/>
        </div>

        <div className="notification-container" style={showNotification2 ? {zIndex:'5'} : null}>
          <Notification showNotification2={showNotification2} text={"Se agrego correctamente"}/>
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

export default Tienda;