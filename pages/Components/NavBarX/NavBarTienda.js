import {Animated} from "react-animated-css";

export default function NavBarTienda({setItemType}) {
  

    const handleClick = (type) => {
        setItemType(type)
    }
    
    return(
        
            <nav className="navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <li style={{display:"flex"}}>
                            <div className="Filtro1">
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("Todo")}>Todo</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("velas")}>Velas</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("homespray")}>Homespray</p>
                                </Animated>
                            </div>
                            <div className="Filtro2">
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("difusores")}>Difusores</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                                    <p onClick={() =>handleClick("bombones")}>Bombones</p>
                                </Animated>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>

        
    );
}





