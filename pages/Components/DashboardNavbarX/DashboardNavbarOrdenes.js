import {Animated} from "react-animated-css";

export default function DashboardNabvarOrdenes({setEntregado,entregado}) {


    const handleClick = (type) => {
        setEntregado(type);
    }


    return (
        <nav className="navbarorder navbar navbar-expand navbar-light navbar-tienda" id='navBar'>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
                    <ul>
                        <li style={{display:"flex"}}>
                            <div className="Filtro1">
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className={entregado===false?"active":""}>
                                    <p onClick={() =>handleClick(false)}>No Entregadas</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className={entregado===true?"active":""}>
                                    <p onClick={() =>handleClick(true)}>Entregadas</p>
                                </Animated>
                                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className={entregado==="rechazada"?"active":""}>
                                    <p onClick={() =>handleClick("rechazada")}>Rechazadas</p>
                                </Animated>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}