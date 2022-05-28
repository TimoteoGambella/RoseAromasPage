import { useEffect,useState, createContext } from "react";
import { getCarouselImg, getCarouselFraganciaImg, getCarouselFraganciaSMLImg } from "../firebaseX/Firebase";

export const crlContext = createContext();

export function CarouselContext ({children}){

    const [carousel,setCarouselImg] = useState([]);
    const [carouselFragancia,setCarouselFraganciaImg]=useState([]);
    const [carouselFraganciaSML,setCarouselFraganciaSMLImg]=useState([]);

    //Set carousel img from Firebase
    useEffect(() => {
        getCarouselImg().then(res =>{
            setCarouselImg(res);
        })
        getCarouselFraganciaImg().then(res => {
            setCarouselFraganciaImg(res);
        })
        getCarouselFraganciaSMLImg().then(res => {
            setCarouselFraganciaSMLImg(res);
        })
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <crlContext.Provider value={{carousel, carouselFragancia, carouselFraganciaSML}}>
            {children}
        </crlContext.Provider>
    )
}