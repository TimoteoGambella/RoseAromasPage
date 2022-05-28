import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import  'bootstrap/dist/css/bootstrap.min.css';
import left from "./icons8-izquierda-círculo-90.webp"
import right from "./icons8-derecha-círculo-90.webp"
import Image from "next/image";
import { crlContext } from "../../../Context/CarouselContext";


export default function CarouselInicio(){
    const leftArrow=(
        <Image src={left} alt="FLECHA" width={70} height={70} className="prev-next-btn"/>
    )
    const rightArrow=(
        <Image src={right} alt="FLECHA" width={70} height={70} className="prev-next-btn"/>
    )

    const {carousel} = useContext (crlContext);

    return(
        <div className="container-carousel">
            <Carousel prevIcon={leftArrow} nextIcon={rightArrow} interval={4000}>
                {carousel.map((foto)=>{
                    return(
                        <Carousel.Item key={foto.id}>
                            <Image
                            src={foto.img}
                            alt={foto.titulo}
                            width={700}
                            height={500}
                            className="carousel-foto"
                            />
                            <Carousel.Caption>
                                <h1 className="carousel-titulo">{foto.titulo}</h1>
                                <p className="carousel-desc">{foto.descripcion}</p>
                            </Carousel.Caption>
                            <div className="carousel-titulo-mobile"><h3>{foto.titulo}</h3></div>
                            <div className="carousel-desc-mobile"><p>{foto.descripcion}</p></div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}