import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { editPropProduct } from '../../../firebaseX/Firebase';

export default function DashboardProductoInput ({title,tipo,producto,setReload,reload}){
    const [propType, setPropType] = useState("");
    const [tagDisplay,settagDisplay] = useState(true);
    const [data,setData] = useState("");

    const handleChangeData = (e) => {
        setData(e.target.value)
    }

    const handleConfirm = () => {
        editPropProduct(producto.id,propType,data).then(res => {
                setPropType("");
                settagDisplay(true)
                setData("")
                setReload(!reload);
        });
    }


    return(
        <>
            {producto===undefined?<></>:
            
                <div>

                    {tagDisplay && <h5>{title}: </h5>}
                    {propType === tipo ? 
                        tipo==="descripcion"? <textarea className="title-dash-prod-item textarea"  size="medium" autoComplete="off" color="secondary"  id="nameId"  defaultValue={producto[title]} type="text" onChangeCapture={handleChangeData}/>:
                    <TextField className="title-dash-prod-item" size="medium" autoComplete="off" color="secondary"  id="nameId"  defaultValue={producto[title]} type="text" onChangeCapture={handleChangeData}/>
                    : <h5>{producto[title]}</h5>}
                                    
                    {propType !== tipo ? <EditTwoToneIcon fontSize="large" onClick={() => {setData(producto[title]),setPropType(tipo), settagDisplay(false)}}/>
                    : <div>
                        <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                        <CancelOutlinedIcon onClick={()=> {setPropType(""), setData(""), settagDisplay(true)}}/>
                    </div>}
        
                </div>
            }
        </>

    )
}