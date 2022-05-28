import { useState } from "react"
import TextField from '@material-ui/core/TextField';
import { addProduct, addStorage } from "../../../firebaseX/Firebase";
import { useForm } from "react-hook-form";
import Image from "next/image";
import loading from "../../A-imgs/loading_apple_wordpress.webp"

export default function DashboardAddProducto ({disp,setDisp,reload,setReload}) {
    const [producto,setProducto] = useState ({})
    const [cargando,setCargando]=useState(false)

    const {register, formState:{errors},handleSubmit} = useForm()

    const handleData = (e,dataType) => {
        
        if(dataType === "imagen"){
            setProducto({...producto,Img: e.target.files[0]})
        }
        if(dataType === "nombre"){
            setProducto({...producto,Nombre: e.target.value})
        }
        if(dataType === "descripcion"){
            setProducto({...producto,Descripcion: e.target.value})
        }
        if(dataType === "categoria"){
            setProducto({...producto,Categoria: (e.target.value).toLowerCase()})
        }
        if(dataType === "precio"){
            setProducto({...producto,Precio: e.target.value})
        }
        if(dataType === "stock"){
            setProducto({...producto,Stock: e.target.value})
        }
    }

    const reset = ()=>{
        let form = document.getElementById("myForm")
        form.reset()
        setProducto({})
    }

    const handleFormSubmit = (e) => {
        if(producto.Nombre===undefined || producto.Descripcion===undefined || producto.Img===undefined || producto.Categoria===undefined || producto.Precio===undefined || producto.Stock===undefined){
            alert("Formulario incompleto")
        }else{
            setCargando(true)
            addStorage(producto.Nombre,"productos",producto.Img).then(res=>{
                addProduct(producto,res).then(res => {
                    setDisp("none");
                    setCargando(false)
                    reset()
                    setReload(!reload)
                })
            })
        }
    }  

    return (
        <div className='fondo-block' style={{display:disp}}>
          <div className='add-producto-container'>
            <form className='form-container' onSubmit={handleSubmit(handleFormSubmit)} id={"myForm"}>
                <div>
                    <div>
                        <h5>Imagen: </h5>
                        <input type="file" name="img" id="img" accept="image/*" onChangeCapture={(e) => handleData(e,"imagen")}
                        {...register("img",{required:true})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.img?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                    
                    <div>
                        <h5>Nombre: </h5>
                        <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={(e) => handleData(e,"nombre")}
                        {...register("nameId",{required:true})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.nameId?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>

                    <div>
                        <h5>Descripcion: </h5>
                        <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="descripcion"  placeholder="Descripcion" type="text" onChangeCapture={(e) => handleData(e,"descripcion")}
                        {...register("descripcion",{required:true})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.descripcion?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                
                    <div>
                        <h5>Categoria (velas-homespray-difusores-bombones): </h5>
                        <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="categoria"  placeholder="Categoria" type="text" onChangeCapture={(e) => handleData(e,"categoria")}
                        {...register("categoria",{required:true})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.categoria?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                
                    <div>
                        <h5>Precio: $</h5>
                        <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="precio"  placeholder="Precio" type="text" onChangeCapture={(e) => handleData(e,"precio")}
                        {...register("precio",{required:true,pattern:/^[0-9]+/})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.precio?.type==="required"&&"Campo obligatorio"}
                            {errors.precio?.type==="pattern"&&"Solo números"}
                        </span>
                    </div>

                    <div>
                        <h5>Stock: </h5>
                        <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="stock"  placeholder="Stock" type="text" onChangeCapture={(e) => handleData(e,"stock")}
                        {...register("stock",{required:true,pattern:/^[0-9]+/})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.stock?.type==="required"&&"Campo obligatorio"}
                            {errors.stock?.type==="pattern"&&"Solo números"}
                        </span>
                    </div>
                </div>
            
                <div className="actions-addproduct">
                    {cargando?
                        <div style={{backgroundColor:"#dee6e6",textAlign:"center",marginTop:"1vw"}}>
                            <Image src={loading} alt="loading" width={50} height={50} style={{backgroundColor:"transparent"}}/>
                        </div>
                    :
                        <button>AGREGAR</button>
                    }
                    <button onClick={()=>{reset(),setDisp("none")}} type={"reset"}>CANCELAR</button>
                </div>
            </form>
          </div>
        </div>
    )
}