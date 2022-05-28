import React,{useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import MercadoPagoButton from '../MercadoPagoButtonX/MercadoPagoButton';
import Link from 'next/link';
import { useEffect } from "react";
import { UseCartContext } from "../../../Context/CartContext";


export default function Form2(){

    const form = useRef();
    const {addShippment,addImpuestosMP,addPackaging,getTotalPriceForm,getTotalPriceCart} = useContext(UseCartContext);

    const {register, formState:{errors},handleSubmit} = useForm()

    const [formValidado,setFormValidado] = useState(false);
    const [respuesta,setRespuesta]=useState(false)
    const [respuesta2,setRespuesta2]=useState(true)
    
    const [payerInfo, setPayerInfo] = useState({});
    const [payerInfoEspecial, setPayerInfoEspecial] = useState({});
    const [phone, setPhone] = useState({});
    const [address, setAddress] = useState({});
    const [metodoPago,setMetodoPago]=useState("")
    const [metodoMP,setMetodoMP]=useState("")

    const [codigoPostal,setCodigoPostal]= useState(false)
    const [cambiarCodigo,setCambiarCodigo]=useState(false)

    const [envio,setEnvio] = useState(0);
    const [packaging, setPackaging] =useState(false)

    useEffect(()=>{
        setFormValidado(false)
        setRespuesta(false)
        
        if(cambiarCodigo){
            CP()
        }

        localStorage.setItem("FormRoseAromas",JSON.stringify(payerInfo))
    },[payerInfo])// eslint-disable-line react-hooks/exhaustive-deps


    useEffect(()=>{
        localStorage.setItem("FormRoseAromas",JSON.stringify(payerInfoEspecial))
    },[payerInfoEspecial])// eslint-disable-line react-hooks/exhaustive-deps


    useEffect(()=>{
        addShippment(0)
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    
    const handleFormSubmit = () => {
        if(metodoPago==="mercadopago"){
            if(metodoMP===""){
                alert("Seleccione un metodo de pago (envio dinero (MP)-Transferencia o Link Mercadopago)")
                return
            }
        }
        setRespuesta(true)
        setFormValidado(true);
    }   

    // NOMBRE
    const handleNameData = (e) => {
        setPayerInfo({...payerInfo,name: e.target.value})
        setPayerInfoEspecial({...payerInfoEspecial,name: e.target.value})
    }

    // APELLIDO
    const handleSurnameData = (e) => {
        setPayerInfo({...payerInfo,surname: e.target.value});
        setPayerInfoEspecial({...payerInfoEspecial,surname: e.target.value});
    }

    // EMAIL
    const handleEmailData = (e) => {
        setPayerInfo({...payerInfo,email: e.target.value});
        setPayerInfoEspecial({...payerInfoEspecial,email: e.target.value});
    }

    // CODIGO DE AREA
    const handleAreaNumberPhoneData = (e) => {
        setPayerInfo({...payerInfo,phone:{...phone,area_code: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial,phone:{...phone,area_code: e.target.value}});
        setPhone({...phone,area_code: e.target.value})
    }

    // NUMERO DE TELEFONO
    const handleNumberPhoneData = (e) => {
        setPayerInfo({...payerInfo,phone:{...phone,number: Number(e.target.value)}});
        setPayerInfoEspecial({...payerInfoEspecial,phone:{...phone,number: e.target.value}});
        setPhone({...phone,number: Number(e.target.value)})
    }

    // LOCALIDAD
    const handleLocalidad=(e)=>{
        setPayerInfoEspecial({...payerInfoEspecial,localidad: e.target.value})
    }

    // DIRECCION
    const handleStreetNameData = (e) => {
        setPayerInfo({...payerInfo, address:{...address, street_name: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial, address:{...address, street_name: e.target.value}});
        setAddress({...address, street_name: e.target.value})
    }

    // NUMERO DE CASA
    const handleStreetNumberData = (e) => {
        setPayerInfo({...payerInfo, address:{...address,street_number: Number(e.target.value)}});
        setPayerInfoEspecial({...payerInfoEspecial, address:{...address, street_number:e.target.value}});
        setAddress({...address, street_number: Number(e.target.value)})

    }

    // PISO
    const handlePiso = (e) => {
        setPayerInfoEspecial({...payerInfoEspecial, street_piso:e.target.value});
    }
    
    // DEPARTAMENTO
    const handleDepartamento = (e) => {
        setPayerInfoEspecial({...payerInfoEspecial, street_departamento:e.target.value});
    }

    // PAGO
    const handleMetodoPago = (pago) => {
        setPayerInfoEspecial({...payerInfoEspecial, metodo_pago:pago});
    }
    
    const handlePago=(pago)=>{
        if(pago==="efectivo" || pago==="mercadopago"){
            setMetodoMP("")
            setMetodoPago(pago)
            if(pago==="efectivo"){
                handleMetodoPago(pago);
            }
        }else{
            if(metodoPago==="mercadopago"){
                setMetodoMP("")
                setMetodoMP(pago)
                handleMetodoPago(pago)
            }
        }
    }

    // CODIGO POSTAL
    const handleZipCoderData = (e) => {
        setPayerInfo({...payerInfo, address:{...address, zip_code: e.target.value}});
        setPayerInfoEspecial({...payerInfoEspecial, address:{...address, zip_code: e.target.value}});
        setAddress({...address, zip_code: e.target.value})
        setCambiarCodigo(true)
    }
    
    const handlePackaging = (e)=>{
        setPackaging(!packaging)
        setPayerInfoEspecial({...payerInfoEspecial, packaging: (!packaging)});
        if(!packaging){
            addPackaging(200)
        }else{
            addPackaging(0)
        }
    }

    const CP = ()=>{
        if(payerInfo.address.zip_code === "") {
            addShippment(0);
            setEnvio(0);
        }else if(payerInfo.address.zip_code ==="2800" || payerInfo.address.zip_code==="2804" || payerInfo.address.zip_code==="2806"){
            setCodigoPostal(true);
            addShippment(300);
            setEnvio(300);
        }else{
            setCodigoPostal(false);
            addShippment(600);
            setEnvio(600);
            setMetodoPago("mercadopago")
        }
        if(metodoPago==="mercadopago"){
            addImpuestosMP(getTotalPriceForm()*5/100)
        }else{
            addImpuestosMP(0)
        }
    }

    return(
        <div className="container-form-compra">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
                <div className='form-input-title formtitle2'>
                    <h2>DATOS PERSONALES</h2>
                </div>

                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={handleNameData}
                    {...register("nameId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.nameId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>

                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="surnameId"  placeholder="Apellido" type="text" onChangeCapture={handleSurnameData}
                    {...register("surnameId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.surnameId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="emailId"  placeholder="Email" type="email" onChangeCapture={handleEmailData}
                    {...register("emailId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.emailId?.type==="required"&&"Campo obligatorio"}
                        {errors.emailId?.type==="pattern"&&"Mail no valido"}
                    </span>
                </div>

                <div>
                    <div className="input-span">
                        <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="numberAreaId"  placeholder="Código de area" type="text" onChangeCapture={handleAreaNumberPhoneData}
                        {...register("numberAreaId",{required:true,minLength:2,maxLength:4, pattern:/^[0-9]+/})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.numberAreaId?.type==="required"&&"Campo obligatorio"}
                            {errors.numberAreaId?.type==="minLength"&&"Cod. area sin 0"}
                            {errors.numberAreaId?.type==="maxLength"&&"Cod. area incorrecto"}
                            {errors.numberAreaId?.type==="pattern"&&"Solo números"}
                        </span>
                    </div>

                    <div className="input-span">
                        <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="numberId"  placeholder="Número de telefono" type="text" onChangeCapture={handleNumberPhoneData}
                        {...register("numberId",{required:true,minLength:6,maxLength:6, pattern:/^[0-9]+/})}/>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.numberId?.type==="required"&&"Campo obligatorio"}
                            {errors.numberId?.type==="minLength"&&"Numero incorrecto"}
                            {errors.numberId?.type==="maxLength"&&"Numero sin 15"}
                            {errors.numberId?.type==="pattern"&&"Solo números"}
                        </span>
                    </div>
                </div>
                
                <div className='form-input-title formtitle2'>
                    <h2>DATOS DE ENVIO</h2>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"  color="secondary"  id="localidad"  placeholder="Localidad (Solo BsAs)" type="text" onChangeCapture={handleLocalidad}
                    {...register("localidad",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.localidad?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="streetId"  placeholder="Calle" type="text" onChangeCapture={handleStreetNameData}
                    {...register("streetId",{required:true})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.streetId?.type==="required"&&"Campo obligatorio"}
                    </span>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="streetNumberId"  placeholder="Número de calle" type="text" onChangeCapture={handleStreetNumberData}
                    {...register("streetNumberId",{required:true, pattern:/^[0-9]+/})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.streetNumberId?.type==="required"&&"Campo obligatorio"}
                        {errors.streetNumberId?.type==="pattern"&&"Solo números"}

                    </span>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off"  color="secondary"  id="piso"  placeholder="Piso" type="text" onChangeCapture={handlePiso}
                    {...register("piso")}/>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="departamento"  placeholder="Departamento" type="text" onChangeCapture={handleDepartamento}
                    {...register("departamento")}/>
                </div>
                <div className="input-span">
                    <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="zipCodeId"  placeholder="Código Postal" type="text" onChangeCapture={handleZipCoderData}
                    {...register("zipCodeId",{required:true, pattern:/^[0-9]+/})}/>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.zipCodeId?.type==="required"&&"Campo obligatorio"}
                        {errors.zipCodeId?.type==="pattern"&&"Solo números"}
                    </span>
                </div>
                {codigoPostal?
                    <div className="radioButton">
                        <div className='form-input-title formtitle2'>
                            <h2>METODO DE PAGO</h2>
                        </div>
                        <label htmlFor="efectivo">
                            <input
                                {...register("pago",{required:true})}
                                type="radio"
                                name="pago"
                                value="efectivo"
                                id="efectivo"
                                onClick={()=>handlePago("efectivo")}
                            />
                            EFECTIVO
                        </label>
                        <label htmlFor="mercadopago">
                            <input
                                {...register("pago",{required:true})}
                                type="radio"
                                name="pago"
                                value="mercadopago"
                                id="mercadopago"
                                onClick={()=>handlePago("mercadopago")}
                            />
                            MERCADOPAGO
                        </label>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.pago?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                :
                    <div className="radioButton">
                        <div className='form-input-title formtitle2'>
                            <h2>METODO DE PAGO</h2>
                        </div>
                        <label htmlFor="mercadopago">
                            <input
                                {...register("pago",{required:true})}
                                type="radio"
                                name="pago"
                                value="mercadopago"
                                id="mercadopago"
                                onClick={()=>handlePago("mercadopago")}
                            />
                            MERCADOPAGO
                        </label>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.pago?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </div>
                }
                {metodoPago==="mercadopago" && 
                    <>
                        <div className='form-input-title formtitle2' style={{textAlign:"center"}}>
                            <h2>FORMA DE PAGO</h2>
                        </div>
                        <div className="radioButton" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <label htmlFor="linkMP">
                                <input
                                    {...register("metodoMP",{required:true})}
                                    type="radio"
                                    name="metodoMP"
                                    value="linkMP"
                                    id="linkMP"
                                    onClick={()=>handlePago("linkMP")}
                                />
                                LINK MERCADOPAGO (+5%)
                            </label>
                            <label htmlFor="envioMP" className="envio-trans">
                                <input
                                    {...register("metodoMP",{required:true})}
                                    type="radio"
                                    name="metodoMP"
                                    value="envioMP"
                                    id="envioMP"
                                    onClick={()=>{handlePago("envioMP"),alert("La encargada se pondra en contacto para finalizar esta compra.")}}
                                />
                                ENVIO DINERO (MP) TRANSFERENCIA
                            </label>
                        </div>
                        <span className="text-danger text-small d-block mb-2">
                            {errors.metodoMP?.type==="required"&&"Campo obligatorio"}
                        </span>
                    </>
                }

                <div className="checkbox">
                    <div className='form-input-title formtitle2'>
                        <h2>PACKAGING</h2>
                    </div>
                    <label htmlFor="packaging">
                        <input
                            type="checkbox"
                            name="packaging"
                            value="checkbox"
                            id="packaging"
                            onChangeCapture={()=>{handlePackaging()}}
                        />
                        SERVICIO DE PACKAGING
                    </label>
                </div>

                <div className="total-a-pagar">
                    <p>Productos: ${getTotalPriceCart()}</p>
                    <p>Precio de envio: ${envio}</p>
                    {metodoMP==="linkMP"?
                        <>
                            {packaging?<p>Servicio Packaging: $200</p>:<></>}
                            <p>Impuestos por mercadopago: ${(getTotalPriceForm())*5/100}</p>
                            <p>Total: ${(getTotalPriceForm())+(getTotalPriceForm())*5/100}</p>
                        </>
                        :
                        <>
                            {packaging?<p>Servicio Packaging: $200</p>:<></>}
                            <p>Total: ${(getTotalPriceForm())}</p>
                        </>
                    }
                </div>

                <button className="boton-validar" onClick={()=>{setRespuesta2(false)}}>VALIDAR FORMULARIO</button>
                <span>
                    {respuesta?
                        <p className="validacion-mensaje">Validacion Correcta</p>
                        : respuesta2?<></>:<p className="validacion-mensaje" style={{color:"red"}}>Validacion Incorrecta</p>
                    }
                </span>
            </form>

            {/* MERCADO PAGO COMPRAR */}
            <div>
                <MercadoPagoButton payerInfo={payerInfo} payerInfoEspecial={payerInfoEspecial} formValidado={formValidado}/>
                <Link href="/Cart-" className="linkStyle" passHref><button className="boton-validar">CANCELAR</button></Link>
            </div>
        </div>
    )
}