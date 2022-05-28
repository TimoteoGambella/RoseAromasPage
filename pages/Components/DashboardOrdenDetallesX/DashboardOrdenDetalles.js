export default function DashboardOrdenDetalles({disp2,order,setDisp2}) {

  return(
    <>
      {order===undefined?<></>:
        <div className='fondo-block' style={{display:disp2}}>
          <div className='detalles-info'>
            <p className='button-atras' onClick={()=>{setDisp2("none")}}>ATRAS</p>
            <ul className='ul-info'>
                <li>{order.fecha["dia"]}/{order.fecha["mes"]}/{order.fecha["ano"]}</li>
                <li>{order.payer.name} {order.payer.surname} | {order.payer.email}</li>
                <li>{order.payer.localidad} {order.payer.address["zip_code"]} | {order.payer.address["street_name"]} {order.payer.address["street_number"]} | {order.payer.phone["area_code"]}-{order.payer.phone["number"]}</li>
                <li>{order.payer.metodo_pago}</li>
            </ul>
            <ul className="container-item-list">
                {(order.items).map(item=><li key={item.id} className="item-list">{item.title} | Cantidad: {item.quantity} | Total: {item.quantity * item.unit_price} | Fragancia: {item.type}</li>)}
                {(order.items).map(item=><li key={item.id} className="item-list">{item.title} | Cantidad: {item.quantity} | Total: {item.quantity * item.unit_price} | Fragancia: {item.type}</li>)}
                {(order.items).map(item=><li key={item.id} className="item-list">{item.title} | Cantidad: {item.quantity} | Total: {item.quantity * item.unit_price} | Fragancia: {item.type}</li>)}

            </ul>
          </div>
        </div>
      }
    </>

  )
}