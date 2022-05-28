import { useEffect, useState } from "react"
import { getOrders } from "../../../firebaseX/Firebase";
import DashboardNavbarOrdenes from "../DashboardNavbarX/DashboardNavbarOrdenes";
import DashboardOrden from "../DashboardOrdenX/DashboardOrden";

export default function DashboardOrdenes() {

    const [entregado,setEntregado]=useState(false)
    const [orders, setOrders] = useState([]);
    const [ordersRechazada,setOrdersRechazadas]=useState([])
    const [reload,setReload] = useState(false);

    useEffect(() => {
        getOrders("Orders").then(res => {
            setOrders(res)
        })
        getOrders("OrdersFalses").then(res => {
            setOrdersRechazadas(res)
        })
    }, [reload])// eslint-disable-line react-hooks/exhaustive-deps

    return (
    
        <div className="dashboard-ordenes">
            <h2>Tus Ordenes</h2>

            <DashboardNavbarOrdenes setEntregado={setEntregado} entregado={entregado}/>
            <div className="ordenes-container">
                {entregado?
                    orders.lenght!=0?orders.filter(order=>order.entregado===entregado).map(order => <DashboardOrden order={order} setReload={setReload} reload={reload} key={order.id} entregado={entregado}/>):<></>
                :
                    orders.lenght!=0?orders.filter(order=>order.entregado===entregado).map(order => <DashboardOrden order={order} setReload={setReload} reload={reload} key={order.id} entregado={entregado}/>):<></>
                }
                {entregado==="rechazada"?ordersRechazada.lenght!=0?ordersRechazada.map(order => <DashboardOrden order={order} setReload={setReload} reload={reload} key={order.id} entregado={entregado}/>):<></>:<></>}
            </div>
            
        </div>

    )
}
