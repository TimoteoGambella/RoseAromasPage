import React from 'react'
import Image from 'next/image'
import prod1 from "../../A-imgs/productos-inicio/vela.webp"
import prod2 from "../../A-imgs/productos-inicio/homespray.webp"
import prod3 from "../../A-imgs/productos-inicio/difusor.webp"
import prod4 from "../../A-imgs/productos-inicio/bombon.webp"
import Link from 'next/link'

export default function ProductosInicio(){

    return(
        <div>
            <h2 className="titulo-productos">NUESTROS PRODUCTOS</h2>
            <div className="contenedor-productos-inicio">
                <Link href={{ pathname: '/Tienda', query: { keyword: 'velas' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod1} alt="DIFUSORES" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>VELAS</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/Tienda', query: { keyword: 'homespray' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod2} alt="BOMBON" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>HOMESPRAY</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/Tienda', query: { keyword: 'difusores' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod3} alt="VELAS" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>DIFUSORES</h3>
                    </div>
                </Link>
                <Link href={{ pathname: '/Tienda', query: { keyword: 'bombones' } }} passHref>
                    <div className="productos-inicio">
                        <div className='contenedor-card-inicio'>
                            <Image src={prod4} alt="HOMESPRAY" width={445} height={520} className="img-card-inicio"/>
                        </div>
                        <h3>BOMBONES</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}