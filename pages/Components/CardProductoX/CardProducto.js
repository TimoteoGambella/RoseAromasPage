import {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCountX/ItemCount';
import ItemTypeSelect from '../ItemTypeSelectX/ItemTypeSelect';
import AddCartButton from '../AddCartButtonX/AddCartButton';
import DetailsButton from '../DetailsButtonX/DetailsButton';
import DetailsBlock from '../DetailsBlockX/DetailsBlock';

export default function CardProducto({producto, setShowNotification, setShowNotification2}) {
    const [type, setType] = useState("none");
    const [amount,setAmount] = useState(1);
    const [details,setDetails] = useState(false);

    return (
      <>
        {producto && 
          <Card sx={{ maxWidth: 345 }}>
            <div className='img-card-tienda'>
              {producto && <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={producto.Img}
              />}
            </div>
            <CardContent>
              <div className="MuiCardContent-root css-46bh2p-MuiCardContent-root">
                <div className="MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom css-h93ljk-MuiTypography-root">
                  {producto.Nombre}
                </div>
                <p className="MuiTypography-root MuiTypography-body1 desc-card-tienda css-1pnmrwp-MuiTypography-root">{producto.Descripcion}</p>
                <span className="MuiTypography-root MuiTypography-p precio-card-tienda css-h7st5a">Precio: ${producto.Precio}</span>
              </div>
            </CardContent>
            <CardActions>
              <ItemTypeSelect setType={setType} type={type} prod={producto} className="select-card-tienda"/>
              <ItemCount stock={producto && producto.Stock} amount={amount} setAmount={setAmount}/>
              <AddCartButton producto={producto} type={type} amount={amount} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
              <DetailsButton SetDetails={setDetails} Details={details}/>
              <DetailsBlock SetDetails={setDetails} Details={details} producto={producto} setShowNotification={setShowNotification} setShowNotification2={setShowNotification2}/>
            </CardActions>
          </Card>
        }
      </>
  );
}