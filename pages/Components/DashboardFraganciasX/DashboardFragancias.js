import { useState, useContext, useEffect } from "react"
import { crlContext } from "../../../Context/CarouselContext"
import Image from "next/image"
import anadir from "../../A-imgs/icons8-más-2-matemáticas-100.webp"

import { changeStockFragancia, removeFragancia, getCarouselFraganciaImg, getCarouselFraganciaSMLImg } from "../../../firebaseX/Firebase"
import DashboardAddFragancias from "../DashboardAddFraganciasX/DashboardAddFragancias"

export default function DashboardFragancias () {

    const {carouselFragancia, carouselFraganciaSML}=useContext(crlContext)

    const [fragancias,setFragancias]=useState(carouselFragancia)
    const [fraganciasSML, setFraganciasSML]=useState(carouselFraganciaSML)

    const [addFragancia,setAddFragancia]=useState(false)
    const [pantalla,setPantalla]=useState("")
    const [tamaño,setTamaño]=useState("")
    const [type,setType]=useState("")

    const [fraganciaEliminar,setFraganciaEliminar]=useState("")
    const [fraganciaEliminar2,setFraganciaEliminar2]=useState("")
    const [docEliminar,setDocEliminar]=useState("")

    const [disp,setDisp]=useState("none")

    const [reload,setReload] = useState(false);

    useEffect(()=>{
        getCarouselFraganciaImg().then(res=>{
            setFragancias(res)
        })
        getCarouselFraganciaSMLImg().then(res=>{
            setFraganciasSML(res)
        })
    },[reload])// eslint-disable-line react-hooks/exhaustive-deps

    const disponibilidad = (e)=>{
        changeStockFragancia(e.target.name,e.target.checked,"CarouselFragancias")
    }
    const disponibilidad2 = (e)=>{
        changeStockFragancia(e.target.name,e.target.checked,"CarouselFraganciasSML")
    }

    return (
        <>
            <div className="dashboard-fragancias">
                <h1>Fragancias</h1>
                <div className="tipo-pantalla">
                    <h2>Fragancias Pantalla Grande</h2>
                    <div>
                        <Image src={anadir} width={100} height={100} alt="añadir" onClick={()=>{setPantalla("Pantalla Grande"),setTamaño("(1320x300)"),setType("CarouselFragancias"),setAddFragancia(true)}}/>
                    </div>
                </div>
                <br/>
                <div className="fragancia-container">
                    {fragancias.map(img=>(
                        <div key={img.id} className="linea-fragancia">
                            <p>{img.Nombre}</p>
                            <div className='dash-prod-item-box delete-item-box' style={{marginBottom:"1.5vw"}}>
                                <button onClick={()=>{setFraganciaEliminar(img.id),setFraganciaEliminar2(img.Nombre),setDocEliminar("CarouselFragancias"),setDisp("block")}}>ELIMINAR</button>
                            </div>
                            <div className="foto-stock">
                                <Image src={img.img} width={800} height={170} alt={img.Nombre}/>
                                <div>
                                    <p>Disponible:</p>
                                    <label className="switch">
                                        <input type={"checkbox"} name={img.id} id={img.id} onClick={disponibilidad} defaultChecked={img.stock?true:false}/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tipo-pantalla">
                    <h2>Fragancias Pantalla Chica</h2>
                    <div>
                        <Image src={anadir} width={100} height={100} alt="añadir" onClick={()=>{setPantalla("Pantalla Chica"),setTamaño("(700x500)"),setType("CarouselFraganciasSML"),setAddFragancia(true)}}/>
                    </div>
                </div>
                <br/>
                <div className="fragancia-container">
                    {fraganciasSML.map(img=>(
                        <div key={img.id} className="linea-fragancia">
                            <p>{img.Nombre}</p>
                            <div className='dash-prod-item-box delete-item-box' style={{marginBottom:"1.5vw"}}>
                                <button onClick={()=>{setFraganciaEliminar(img.id),setFraganciaEliminar2(img.Nombre),setDocEliminar("CarouselFraganciasSML"),setDisp("block")}}>ELIMINAR</button>
                            </div>
                            <div className="foto-stock">
                                <Image src={img.img} width={400} height={300} alt={img.Nombre}/>
                                <div>
                                    <p>Disponible:</p>
                                    <label className="switch">
                                        <input type={"checkbox"} name={img.id} id={img.id} onClick={disponibilidad2} defaultChecked={img.stock?true:false}/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='fondo-block' style={{display:disp}}>
                <div className='confirm-cancel-info'>
                    <p className='button-borrar-order' onClick={()=>{removeFragancia(fraganciaEliminar,docEliminar,fraganciaEliminar2),setDisp("none"),setReload(!reload)}}>Confirmar</p>
                    <p className='button-borrar-order' onClick={()=>{setDisp("none")}}>Cancelar</p>
                </div>
            </div>
            {!addFragancia?<></>:
                <DashboardAddFragancias setAddFragancia={setAddFragancia} pantalla={pantalla} tamaño={tamaño} type={type} setReload={setReload} reload={reload}/>
            }
        </>
    )
}