import { useState } from "react";
import { useForm } from "react-hook-form";
import { addFragancia,addStorage } from "../../../firebaseX/Firebase";
import Image from "next/image";
import loading from "../../A-imgs/loading_apple_wordpress.webp"

export default function DashboardAddFragancias({setAddFragancia,pantalla,tamaño,type,setReload,reload}){

    const {register, formState:{errors},handleSubmit} = useForm()
    const [imagen,setImagen]=useState("")
    const [titulo,setTitulo]=useState("")

    const [cargando,setCargando]=useState(false)

    const changeImagen = (e)=>{
        setImagen(e.target.files[0]);
    }

    const handleFormSubmit = () => {
        setCargando(true)
        addStorage(titulo,type,imagen).then(res => {
            const x = addFragancia(titulo,type,res)
            setCargando(!x)
            setAddFragancia(false)
            setReload(!reload)
        })
    }   

    const handleTituloFragancia=(e)=>{
        setTitulo(e.target.value)
    }

    return(
        <div className="add-fragancia">
            <div className="add-container">
                <p className='boton-atras' onClick={()=>{setAddFragancia(false),setImagen("")}}>ATRAS</p>
                <p>Cargar fragancias</p>
                <p className="subTitulo">{pantalla} || Tamaño: {tamaño}</p>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="add-foto">
                    <input
                        type="file"
                        name="img"
                        id="img"
                        accept="image/*"
                        onChangeCapture={(e) => {changeImagen(e)}}
                        {...register("img",{required:true})}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.img?.type==="required"&&"Campo obligatorio"}
                    </span>
                    </div>
                    <div className="input-span">
                        <input className="form-input" id="tituloF"  placeholder="TITULO FRAGANCIA" type="tituloF" onChangeCapture={handleTituloFragancia}
                        {...register("tituloF",{required:true})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.tituloF?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                    {cargando?
                        <div style={{backgroundColor:"#dee6e6",textAlign:"center",marginTop:"1vw"}}>
                            <Image src={loading} alt="loading" width={50} height={50} style={{backgroundColor:"transparent"}}/>
                        </div>
                    :
                        <button className="boton-atras boton-subir">
                            SUBIR
                        </button>
                    }
                </form>

            </div>
        </div>
    )
}