import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){

    return(
        <footer id="contacto">
            <div className="piePagina">
                <div className="footer-inicial">
                    <div className='contacto'>
                        <p>CONTACTOS</p>
                        <a href="https://wa.me/543487513839?text=Hola Rosé! Quería hacer una consulta" target="_blank" rel="noreferrer" className="contacto-2">WHATSAPP : +54 3487-513839</a>
                        <a href="https://www.instagram.com/rose_velas/?hl=es" target="_blank" rel="noreferrer" className="contacto-2">INSTAGRAM : @rose_velas</a>
                        <a href="mailto:Caromagnanihg@gmail.com" className="contacto-2">MAIL : Caromagnanihg@gmail.com</a>
                    </div>
                    <a href="#cabecero" rel="noopener" className="contacto-3">
                        <Image src="https://firebasestorage.googleapis.com/v0/b/rosepagina.appspot.com/o/logo.jpg?alt=media&token=08945eb0-05ed-4791-9c27-d762e3c443e9" alt="Logo" className="foto-footer" width={240} height={240}/>
                    </a>
                </div>
                <div>
                    <p className="copyright">&copy; Copyright 2021  RoséAromas | Desarrollado por <Link className="desarrollado" href="mailto:ftpaginasweb@gmail.com">FT</Link></p>
                </div>
            </div>
        </footer>
    )
}