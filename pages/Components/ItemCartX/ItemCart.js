import { useState, useContext, useEffect } from 'react';
import ItemCount from '../ItemCountX/ItemCount';
import { UseCartContext } from '../../../Context/CartContext';
import Image from 'next/image'
import tacho from "../../A-imgs/icons8-basura-96.webp"

export default function ItemCart({producto}) {
    const {removeItem} = useContext(UseCartContext);

    const [prods,setProds] = useState({id:"",title:"",quantity:0,type:"",stock:0,unit_price:0})
    const [amount,setAmount] = useState(0)
    const [borrar,setBorrar]=useState(false)

    useEffect(()=>{
        setAmount(producto.quantity)
        setProds(producto)
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const handleClearCart = (event,id) => {
        setBorrar(!borrar)
        if(event){
            removeItem(id)
        }
    }

    const {getItemPrice} = useContext(UseCartContext);
    
    return(
        <>
            {prods.id==="envioprod" || prods.id==="packaging" || prods.id==="impuestosMP"?<></>:
            
                <div className="item-cart">

                    <div className="grid-row">
                        <div className='gridItem titulo-cart'><h3>{prods.title}</h3></div>
                        <div className='gridItem fragancia-cart'><h3>{prods.type}</h3></div>
                        
                        <ItemCount productId= {prods.id} amount={amount} setAmount={setAmount} stock={prods.stock}/>
                        <div className='gridItem precio-item-cart'><h3>$ {prods.unit_price*prods.quantity}</h3></div>
                    </div>
                    <div className='borrar-item' onClick={()=>{setBorrar(!borrar)}}>
                        <Image src={tacho} width={96} height={96} alt="itemCart"/>
                    </div>
                    {borrar?
                        <>
                            <div className="VaciarCarrito-container">
                                <div className="VaciarCarrito">
                                    <p className="title-vaciar">BORRAR PRODUCTO</p>
                                    <div className="button-vaciar-container">
                                        <p className="button-vaciar" onClick={()=>{handleClearCart(true,prods.id)}}>ACEPTAR</p>
                                        <p className="button-vaciar" onClick={()=>{handleClearCart(false,prods.id)}}>CANCELAR</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>
                    }
                </div>
            }
        </>
    )
}