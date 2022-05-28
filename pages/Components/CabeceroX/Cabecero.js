import Image from 'next/image'
import Link from 'next/link'
import logo from '../../A-imgs/rose.webp'

export default function Header(){

    return (
        <div className="cabecero" id="cabecero">
            <h1 className='tituloMobile'>ROSÉ AROMAS</h1>
            
            <div className='container-titulo'>
                <h1 className="tituloI">ROSÉ</h1>
            </div>

            <div className='container-logoRose'>
                <div className='container2-logoRose'>
                    <Link href={'/'}>
                        <a>
                            <Image src={logo} alt="LOGO" width={230} height={200}/>
                        </a>
                    </Link>
                </div>
                <p>By Carolina</p>
            </div>

            <div className='container-titulo'>
                <h1 className="tituloD">AROMAS</h1>
            </div>
        </div>
    )
}