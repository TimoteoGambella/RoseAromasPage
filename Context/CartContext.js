import { useState,createContext,useEffect,useContext } from "react";
import { UseStorageContext } from "./StorageContext";

export const UseCartContext = createContext();

export function CartContext ({children}) {

    const {CarritoCargado,carritoStorage} = useContext(UseStorageContext);

    const [items,setItems] = useState([]);
    const [itemTrashId,setItemTrashId] = useState(undefined);
    const [idCompra,setIdCompra] = useState(undefined);

    useEffect(()=>{
        Cart_Items()
    },[carritoStorage])// eslint-disable-line react-hooks/exhaustive-deps

    const Cart_Items = ()=>{
        setItems(carritoStorage)
    }

    useEffect(()=>{
        CarritoCargado(items)
    },[items])// eslint-disable-line react-hooks/exhaustive-deps

    // ACTUALIZAR CANTIDAD DE UN ITEM
    const updateQuantityItem = (id, newQuantity) => {
        const newItems = [...items]
        const position = getIndex(id);
        newItems[position]["quantity"] = newQuantity;
        setItems(newItems);
    }

    //DEVUELVE -1 SI NO EXISTE EL ITEM
    const getIndex = (id) =>{
        return items.findIndex(item => item.id === id);
    }

    //AGREGO UN ITEM AL CARRITO, SI EXISTE LE CAMBIO LA CANTIDAD
    const addItem = (item) => {
        let result = getIndex(item.id);
        if(result === -1){
            setItems(items => [...items,item])
        }else{
            const newItems = [...items];
            newItems[result]["quantity"] = newItems[result]["quantity"] + item.quantity;
            setItems(newItems);
        }
    }


    const addShippment = (unit_price) => {
        const shippment = {
            id:"envioprod",
            title: "Dinero de Envio",
            quantity: 1,
            unit_price: unit_price,
        }

        let result = getIndex("envioprod");
        if(result === -1){
            setItems(items => [...items,shippment])
        }else{
            const newItems = [...items];
            newItems[result]["unit_price"] = shippment.unit_price;
            setItems(newItems);
        }
    }
    const addPackaging = (unit_price) => {
        const packaging = {
            id:"packaging",
            title: "Packaging",
            quantity: 1,
            unit_price: unit_price,
        }

        let result = getIndex("packaging");
        if(result === -1){
            setItems(items => [...items,packaging])
        }else{
            const newItems = [...items];
            newItems[result]["unit_price"] = packaging.unit_price;
            setItems(newItems);
        }
    }
    const addImpuestosMP = (unit_price) => {
        const impuestosMP = {
            id:"impuestosMP",
            title: "Tasa Mercadopago",
            quantity: 1,
            unit_price: unit_price,
        }

        let result = getIndex("impuestosMP");
        if(result === -1){
            setItems(items => [...items,impuestosMP])
        }else{
            const newItems = [...items];
            newItems[result]["unit_price"] = impuestosMP.unit_price;
            setItems(newItems);
        }
    }

    //DEVUELVO EL PRECIO TOTAL DE LA COMPRA
    const getTotalPriceCart = () =>{
        const totalPrice = items.filter(item=>item.id!=="envioprod" && item.id!=="packaging" && item.id!=="impuestosMP").reduce(function(accumulator, currentValue) {
            return accumulator + (currentValue.unit_price * currentValue.quantity) ;
          },0);
        return totalPrice;
    }

    const getTotalPriceForm = () =>{
        const totalPrice = items.filter(item=>item.id!=="impuestosMP").reduce(function(accumulator, currentValue) {
            return accumulator + (currentValue.unit_price * currentValue.quantity) ;
          },0);
        return totalPrice;
    }

    //DEVUELVO CANTIDAD DE TOTAL ITEMS EN CARRITO
    const getQuantity = () => {
        const quantity = items.reduce(function(accumulator, currentValue) {
            if(currentValue.id!=="envioprod" && currentValue.id!=="packaging" && currentValue.id!=="impuestosMP"){
                return accumulator + currentValue.quantity;
            }else{
                return accumulator + currentValue.quantity - 1;
            }
          },0);
        
        return quantity;
    }

    //SACO UN ITEM DEL CARRITO, 
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    //LIMPIO POR COMPLETO EL CARRITO
    const clear = () => {
        setItems([])
    }

    // DEVUELVO TODOS LOS ITEMS DEL CARRITO
    const getItems = () => {
        return items;
    }
    return(<UseCartContext.Provider value={{addShippment,addImpuestosMP,addPackaging, items, clear,updateQuantityItem,addItem, getTotalPriceCart,getTotalPriceForm,getQuantity,getItems,removeItem}}>
        {children}
    </UseCartContext.Provider>)
}