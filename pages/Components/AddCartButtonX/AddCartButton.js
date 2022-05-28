import React, { useContext } from 'react';
import { UseCartContext } from '../../../Context/CartContext';
import { showNotification as show} from '../../../helpersX/helpers';

export default function AddCartButton({producto,type,amount,setShowNotification, setShowNotification2}){
    const {addItem} = useContext(UseCartContext);
     
    const handleOnClick = () => {
        if(type === "none"){
            show(setShowNotification)
        }else{
            //AGREGAR AL CARRO EL JSON CON FORMATO DE MP
            addItem({
                id: producto.id,
                title: producto.Nombre,
                description: producto.Descripcion,
                picture_url: producto.Img,
                category_id: producto.Categoria,
                currency_id: "ARS", 
                quantity: Number(amount),
                type:type,
                unit_price: Number(producto.Precio),
                stock:producto.Stock,
            });
            show(setShowNotification2)
        }
    }

    return(
        <button onClick={handleOnClick} className="add-cart-button">Agregar al carrito</button>
    )
}