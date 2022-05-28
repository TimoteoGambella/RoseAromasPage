import { useState, useEffect } from "react"
import DashboardNavbar from "../DashboardNavbarX/DashboardNavbar";
import DashboardOrdenes from "../DashboardOrdenesX/DashboardOrdenes";
import DashboardProductos from "../DashboardProductosX/DashboardProductos";
import DashboardFragancias from "../DashboardFraganciasX/DashboardFragancias";

export default function DashboardContainer () {
    const [typeContainer,setTypeContainer] = useState(undefined);

    useEffect(() => {
        setTypeContainer("Ordenes");
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="dashboard-container">

            <div className="dashboard-title">
                <h2>ROSE AROMAS</h2>
                <h3>DASHBOARD</h3>
            </div>

            <DashboardNavbar setTypeContainer={setTypeContainer}/>


            <div className="dashboard-type">
                {typeContainer === "Ordenes" && <DashboardOrdenes/>}
                {typeContainer === "Productos" && <DashboardProductos/>}
                {typeContainer === "Fragancias" && <DashboardFragancias/>}
            </div>
        </div>
            
    )
}