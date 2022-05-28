import { useEffect,useState } from "react"
import { getProductos } from "../../../firebaseX/Firebase"
import DashboardAddProducto from "../DashboardAddProductoX/DashboardAddProducto"
import DashboardBuscador from "../DashboardBuscadorX/DashboardBuscador"
import DashboardProductoItem from "../DashboardProductoItemX/DashboardProductoItem"

export default function DashboardProductos () {
    
    const [listaProds,setListaProds]=useState([])
    const [prodsFiltrados, setProdsFiltrados]=useState([])
    const [busqueda,setBusqueda]=useState(false);
    const [reload,setReload] = useState(false);
    const [disp,setDisp]=useState("none")


    const handleAddProduct = () => {
        setDisp("block")
      }

    useEffect(()=>{
        getProductos("Todo",9999).then(res=>{
            setListaProds(res)
        })
    },[reload])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <div className="dashboard-productos">
            <h2>Tus Productos</h2>
            
            <DashboardBuscador  listaProds={listaProds} setProdsFiltrados={setProdsFiltrados} prodsFiltrados={prodsFiltrados} setBusqueda={setBusqueda}/>

            <button onClick={handleAddProduct}>AGREGAR UN NUEVO PRODUCTO</button>

            <div className="dashboard-productos-container">
                {busqueda? <p className="noSeEncontro">No se encontraron productos</p> 
                :   prodsFiltrados.length === 0 ? listaProds.map(prod => <DashboardProductoItem key={prod.id} producto={prod} setReload={setReload} reload={reload}/>)
                :
                prodsFiltrados.map(prod => <DashboardProductoItem key={prod.id} producto={prod} setReload={setReload} reload={reload}/>)
                }
            </div>

        </div>

        <DashboardAddProducto setDisp={setDisp} disp={disp} reload={reload} setReload={setReload}/>
        </>
        
    )
}