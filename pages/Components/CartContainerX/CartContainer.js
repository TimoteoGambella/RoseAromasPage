import { useState,useContext } from "react";
import { UseCartContext } from "../../../Context/CartContext";
import ItemCart from '../ItemCartX/ItemCart';
import Router from "next/router";


export default function CartContainer () {
    const {getItems, getTotalPriceCart, clear} = useContext(UseCartContext);
    const itemsCart = getItems();

    const [vaciar,setVaciar]=useState(false)
    
    const handleClearCart = (event) => {
        setVaciar(!vaciar)
        if(event){
            clear()
        }
    }

    const handleConfirmBuy = () => {
        Router.push({ pathname: '/FinalizarCompra'})
    }
    
    return (<div className="cart-container">

            <div className="item-cart-container">
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="gridItem"><p>Nombre</p></div>
                        <div className="gridItem"><p>Fragancia</p></div>
                        <div className="gridItem"><p>Cantidad</p></div>
                        <div className="gridItem"><p>Precio</p></div>
                    </div>
                </div>
                <div className="line"></div>

                {itemsCart.map(producto => <ItemCart key={producto.id} producto={producto}/>)}
                
                {itemsCart.length === 0 ? <p>No tienes ningun producto en el carrito</p> : <></>} 
                {/* <div className="line"></div> */}
                
                <div className="resume-cart-container">
                    <div className="grid-container">
                        <div className="grid-row-cart">
                            <div className="grid-info-adicional">
                                <div className="gridItem"><p>El costo de envio a Zarate, Campana y Lima es de $300 adicionales</p></div>
                                <div className="gridItem"><p>El costo de envio a cualquier otra localidad de CABA o Buenos Aires es de $600 adicionales</p></div>
                                <div className="gridItem"><p>El envio tarda aproximadamente 10 dias. <br/>En casos especiales, la responsable se pondra en contacto con usted.</p></div>
                            </div>
                            <div className="gridItem total"><h3>Total: ${getTotalPriceCart()}</h3></div>
                        </div> 
                    </div>
                </div>
                {itemsCart.length === 0 ? <></> : <div className="cart-actions">
                    <button onClick={handleConfirmBuy}>Confirmar Compra</button>
                    <button onClick={()=>{handleClearCart(false)}}>Vaciar Carrito</button>
                    {vaciar?
                        <div className="VaciarCarrito-container">
                            <div className="VaciarCarrito">
                                <p className="title-vaciar">VACIAR CARRITO</p>
                                <div className="button-vaciar-container">
                                    <p className="button-vaciar" onClick={()=>{handleClearCart(true)}}>ACEPTAR</p>
                                    <p className="button-vaciar" onClick={()=>{handleClearCart(false)}}>CANCELAR</p>
                                </div>
                            </div>
                        </div>
                        :
                        <>
                        </>
                    }
                </div>
                }
            </div>
            
        </div>
    )
}