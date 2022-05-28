import { Navbar, Nav } from "react-bootstrap";
import {Animated} from "react-animated-css";
export default function DashboardNavbar({setTypeContainer}) {
  

    const handleClick = (type) => {
        setTypeContainer(type)
    }


    return(
    <div className="navbar-container">

        <Navbar expand="sl" className="navbar-expand-custom navBarPrincipal">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav">
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <a onClick={() => handleClick("Fragancias")} className="nav-link">Fragancias</a>
                        </Animated>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <a onClick={() => handleClick("Productos")} className="nav-link">Productos</a>
                        </Animated>
                        <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                            <a onClick={() => handleClick("Ordenes")} className="nav-link">Ordenes</a>
                        </Animated>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        
    </div>
    );
}
