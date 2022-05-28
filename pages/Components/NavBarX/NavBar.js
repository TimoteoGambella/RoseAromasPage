import CartWidget from "../CartWidgetX/CartWidget"
import Link from 'next/link'
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  

    return(
    <div className="navbar-container">

        <Navbar expand="sl" className="navbar-expand-custom navBarPrincipal">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav">
                        <Link href={'/'} className="nav-link">Inicio</Link>
                        <Link href={'/QuienSoy'} className="nav-link">¿Quién soy?</Link>
                        <Link href={'/NuestrosProductos'} className="nav-link">Nuestros productos</Link>
                        <Link href={'/Tienda'} className="nav-link">Tienda</Link>
                        <Link href={'/Refill'} className="nav-link">Refill</Link>
                        <Link href={'#contacto'} className="nav-link">Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        
        <CartWidget/>
    </div>
    );
}





