import { initializeApp } from "firebase/app";
import {getFirestore, limit} from "firebase/firestore";
import { collection, getDocs, orderBy, where, query, addDoc, doc,setDoc,Timestamp, deleteDoc} from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAfSPLiF53AwxpbFsL9RQjamXZaBC49lKU",
    authDomain: "rosepagina.firebaseapp.com",
    projectId: "rosepagina",
    storageBucket: "rosepagina.appspot.com",
    messagingSenderId: "552005559733",
    appId: "1:552005559733:web:1b141a0a54400c4c9b25fc"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCarouselImg = async() => {

  const carouselDocs = await getDocs(collection(db, "Carousel"));
  const carouselImg = carouselDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselImg);
}

export const getCarouselFraganciaImg = async() => {
  
  const carouselFraganciasDocs = await getDocs(query(collection(db,"CarouselFragancias"),orderBy("Nombre")));
  const carouselFraganciasImg = carouselFraganciasDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselFraganciasImg);
}

//Cambian las fotos para el responsive
export const getCarouselFraganciaSMLImg = async() => {
  
  const carouselFraganciasSMLDocs = await getDocs(query(collection(db,"CarouselFraganciasSML"),orderBy("Nombre")));
  const carouselFraganciasSMLImg = carouselFraganciasSMLDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(carouselFraganciasSMLImg);
}

//OBTENER PRODUCTOS
export const getProductos = async(cat,limite) =>{
  if(cat==="Todo"){
    var productosDocs = await getDocs(query(collection(db,"Productos"),limit(limite)));
  }else{
    var productosDocs = await getDocs(query(collection(db,"Productos"),where("Categoria","==",cat),limit(limite)));
  }
  const productos = productosDocs.docs.map(doc=>{return{id:doc.id,...doc.data()}})
  return(productos)
}




//CARGAR UNA NUEVA ORDEN DE COMPRA
export const addNewOrder = async (order) => {

  const fechaOrder={'dia': (new Date()).getDate(),'mes':((new Date()).getMonth()+1),"ano":(new Date()).getFullYear()}

  const newOrder = {
      fecha:fechaOrder,
      items: order.items,
      payer: order.payerInfoEspecial,
      entregado: false
  };
  const doc = await addDoc(collection(db, "Orders"), newOrder);
  return(doc.id);
}

// REMOVE ORDER
export const removeOrder = async (id) => {
  await deleteDoc(doc(db, "Orders", id));
}

//CARGAR UNA NUEVA ORDEN DE COMPRA TEMPORAL
export const addNewOrderFalse = async (order) => {
  
  const fechaOrder={'dia': (new Date()).getDate(),'mes':((new Date()).getMonth()+1),"ano":(new Date()).getFullYear()}

  const newOrder = {
      fecha:fechaOrder,
      items: order.items,
      payer: order.payerInfoEspecial,
      entregado: false
  };
  const doc = await addDoc(collection(db, "OrdersFalses"), newOrder);
  return(doc.id);
}

// REMOVE ORDER TEMPORAL
export const removeOrderTemporal = async (id) => {
  await deleteDoc(doc(db, "OrdersFalses", id));
}

// DASHBOARD GET ORDERS
export const getOrders = async(typeOrder) => {
  
  const ordersDoc = await getDocs(query(collection(db,typeOrder),orderBy("fecha")));
  const orders = ordersDoc.docs.map(doc=>{return{id:doc.id,...doc.data()}});
  return(orders);
}

export const setOrderEntregada = async(id, state) => {
  const order =  doc(db, 'Orders', id);
  await setDoc(order, { entregado: state }, { merge: true });
}

export const removeOrderFinal = async (id,typeOrder) => {
  await deleteDoc(doc(db, typeOrder, id));
}




// DASHBOARD REF IMAGE
const storage=getStorage(app)

export const addStorage = async(titulo,carpeta,imagen)=>{
  
  const storageRef = ref(storage,`${carpeta}/${titulo}.webp`)
  await uploadBytes(storageRef,imagen);
  return(getDownloadURL(ref(storage,`${carpeta}/${titulo}.webp`)));
}


// FRAGANCIAS
export const changeStockFragancia=(id,state,type)=>{
  const fragancia =  doc(db, type, id);
  setDoc(fragancia, { stock: state }, { merge: true });
}

export const removeFragancia = async (id,docEliminar,name) => {
  const deleteF=`${docEliminar}/${name}.webp`
  await deleteDoc(doc(db, docEliminar, id));
  await deleteObject(ref(storage, deleteF));
}

export const addFragancia = async (titulo,type,img)=>{
  const fragancia={
    Nombre:titulo,
    img:img,
    stock:false
  }
  await addDoc(collection(db, type),fragancia)
  return(true)
}


// DASHBOARD PRODUCTOS

export const editPropProduct = async (id,type,data) => {
  const product = doc(db, "Productos", id);
  if(type === "nombre"){
    await setDoc(product,{Nombre:data}, {merge:true})
  }
  if(type === "descripcion"){
    await setDoc(product,{Descripcion:data}, {merge:true})
  }
  if(type === "categoria"){
    await setDoc(product,{Categoria:data}, {merge:true})
  }
  if(type === "precio"){
    await setDoc(product,{Precio:data}, {merge:true})
  }
  if(type === "stock"){
    await setDoc(product,{Stock:data}, {merge:true})
  }  
  if(type === "imagen"){
    await setDoc(product,{Img:data}, {merge:true})
  }
}

export const removeProduct = async (id) => {
  await deleteDoc(doc(db, "Productos", id));
}

export const addProduct = async (producto,img) => {
  const newProd={
    ...producto, Img:img
  }

  await addDoc(collection(db, "Productos"),newProd);
  return (true)
}