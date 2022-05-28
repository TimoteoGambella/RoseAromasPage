
export default function DetailsButton({SetDetails,Details}){
    return(
        <>
            <button className="details-cart-button" onClick={()=>SetDetails(!Details)}>DETALLES</button>
        </>
    )
}