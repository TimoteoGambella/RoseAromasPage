import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCountX/ItemCount';
import ItemTypeSelect from '../ItemTypeSelectX/ItemTypeSelect';
import AddCartButton from '../AddCartButtonX/AddCartButton';

export default function DetailsBlock({SetDetails, Details, producto, setShowNotification,setShowNotification2}){
    const [type, setType] = useState("none");
    const [amount,setAmount] = useState(1);

    return(
        <>
            {Details?
                    <div className="container-details-cart">
                        <p className='boton-atras' onClick={()=>SetDetails(!Details)}>ATRAS</p>
                        <Card sx={{ maxWidth: 345 }}>
                            <div className='img-card-tienda'>
                                <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={producto.Img}
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {producto.Nombre}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" className='desc-card-details'>
                                {producto.Descripcion}
                                </Typography>
                                <Typography variant="h6" color="text.secondary" className='precio-card-details'>
                                {`Precio: $${producto.Precio}`}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ItemTypeSelect setType={setType} type={type} className="select-card-details"/>
                                <ItemCount stock={producto.Stock} amount={amount} setAmount={setAmount}/>
                                <AddCartButton producto={producto} type={type} amount={amount} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
                            </CardActions>
                        </Card>
                    </div>
                :
                    <>
                    </>
            }
        </>
    )
}