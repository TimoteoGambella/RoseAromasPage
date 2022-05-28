import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { removeOrderFinal, setOrderEntregada } from '../../../firebaseX/Firebase';
import loading from "../../A-imgs/loading_apple_wordpress.webp"
import Image from "next/image";
import DashboardOrdenDetalles from '../DashboardOrdenDetallesX/DashboardOrdenDetalles';
import DashboardOrdenRemove from '../DashboardOrdenRemoveX/DashboardOrdenRemove';


export default function DashboardOrden({order,entregado,reload,setReload}) {

    const [disp,setDisp]=useState("none")
    const [disp2,setDisp2]=useState("none")
    const [cargando,setCargando]=useState(false)

    const handleEntregadoState = (order,state) => {
      setCargando(true);
      setOrderEntregada(order.id,state).then(res=>{
        setReload(!reload);
        setCargando(false);
      })
    }
    
    const handleBorrar = (order,typeOrder) => {
      setCargando(true)
      removeOrderFinal(order,typeOrder).then(res=>{
        setDisp("none");
        setReload(!reload);
        setCargando(false);
      })
    }

    const handleDetalles = () => {
      setDisp2("block")
    }
      
    return (
    <>
      {order===undefined?<></>:
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <div className='dash-prod-item-box delete-item-box' style={{marginBottom:"1.5vw"}}>
              <button onClick={()=> setDisp("block")}>ELIMINAR ORDEN</button>
            </div>
            <Typography gutterBottom variant="h5" component="div">
              {order && `Nombre: ${order.payer.name} ${order.payer.surname}`}
            </Typography>
            <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
              {order && `Fecha: ${order.fecha.dia}/${order.fecha.mes}/${order.fecha.ano}`}
            </Typography>
            <Typography variant="body1" color="text.secondary" className='desc-card-tienda'>
              {order && `Email: ${order.payer.email}`}
            </Typography>
            <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
              {order && `Telefono: ${order.payer.phone.area_code}-${order.payer.phone.number}`}
            </Typography>
            <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
              {order && `Localidad: ${order.payer.localidad}`}
            </Typography>
            <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
              {order && `Direccion: ${order.payer.address.street_name}-${order.payer.address.street_number} `}
            </Typography>
            <Typography variant="h6" color="text.secondary" className='precio-card-tienda'>
              {order.payer.street_piso && `Piso:${order.payer.street_piso} Numero: ${order.payer.street_apartamento}`}
            </Typography>
            
          </CardContent>

          <CardActions>
              <button onClick={() => handleDetalles()} className="button-entregada">Detalles</button>
          </CardActions>

          {cargando?
            <div style={{backgroundColor:"#dee6e6",width:"100%"}}>
              <Image src={loading} alt="loading" width={50} height={50} style={{backgroundColor:"transparent"}}/>
            </div>
          :
            <>
              {entregado===true && entregado!="rechazada" &&
                <CardActions>
                  <button onClick={() => handleEntregadoState(order,false)} className="button-entregada">NO ENTREGADA</button>
                </CardActions>
              }
              {entregado!=true && entregado!="rechazada" &&
                <CardActions>
                  <button onClick={() => handleEntregadoState(order,true)} className="button-entregada">ENTREGADA</button>
                </CardActions>
              }
            </>
          }

        </Card>
      }

      <DashboardOrdenDetalles disp2={disp2} order={order} setDisp2={setDisp2}/>

      <DashboardOrdenRemove disp={disp} entregado={entregado} cargando={cargando} handleBorrar={handleBorrar} order={order} setDisp={setDisp}/>
    </>
  );
}