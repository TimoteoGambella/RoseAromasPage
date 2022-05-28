import React, { useContext } from "react";
import { crlContext } from "../../../Context/CarouselContext";

export default function ItemTypeSelect ({setType,prod}){

  const {carouselFragancia} = useContext(crlContext);

  const handleOnChange = (e) => {
    setType(e.target.value)
  }

  return (
    <div className="item-select-container">
      <select id="fragancias" onChange={e => handleOnChange(e)}>
        <option value="none">Seleccionar Fragancia</option>
        {carouselFragancia.map((fragancia)=>{
          return(
            fragancia.stock?<option value={fragancia.Nombre} key={fragancia.Nombre}>{fragancia.Nombre}</option>:null
          )
        }
        )}
      </select>
    </div>
  )
}