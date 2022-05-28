import { useState,createContext,useEffect } from "react";

export const UseStorageContext = createContext();

export function StorageContext ({children}) {

    const [carritoStorage, setCarritoStorage]=useState([])

    useEffect(()=>{
        const data = {'dia': (new Date()).getDate(),'mes':((new Date()).getMonth()+1),"ano":(new Date()).getFullYear()};
        if(!localStorage.getItem("CarritoRoseAromas")){
            localStorage.setItem("CarritoRoseAromas",JSON.stringify(carritoStorage))
            localStorage.setItem("FechaCarrito",JSON.stringify(data))
        }else{
            const fecha = {'dia': (new Date()).getDate(),'mes':((new Date()).getMonth()+1),"ano":(new Date()).getFullYear()};
            const dataStorage = JSON.parse(localStorage.getItem("FechaCarrito"));

            if ((dataStorage.ano>=fecha.ano) && (dataStorage.mes>=fecha.mes) && (dataStorage.dia>=fecha.dia)) { // un dia en ms
                const cart = JSON.parse(localStorage.getItem("CarritoRoseAromas"))
                setCarritoStorage(cart)
            }else{
                localStorage.setItem("CarritoRoseAromas",JSON.stringify(carritoStorage))
                localStorage.setItem("FechaCarrito",JSON.stringify(fecha))
            }
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    const CarritoCargado=(info)=>{
        if(info.length!==0){
            localStorage.setItem("CarritoRoseAromas",(JSON.stringify(info)))
        }
    }
    
    return(
    <UseStorageContext.Provider value={{CarritoCargado,carritoStorage}}>
        {children}
    </UseStorageContext.Provider>)
}