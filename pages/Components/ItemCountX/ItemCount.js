import {useState, useContext, useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@material-ui/core';
import { UseCartContext } from '../../../Context/CartContext';



export default function ItemCount ({stock, amount, setAmount, productId}) {
    const {updateQuantityItem} = useContext(UseCartContext);


    const handleAddItem = () => {
        if(amount < stock){
            setAmount(amount + 1);
            if(productId){
                updateQuantityItem(productId,amount+1);
            }
        }
    }
    
    const handleRemoveItem = () => {
        if(amount > 1){
            setAmount(amount - 1);
            if(productId){
                updateQuantityItem(productId,amount-1);
            }
        }
    }

    return (
        <div className="itemCountContainer">


            <RemoveIcon className="buttonitemcount" onClick={handleRemoveItem} color="primary" style={{fontSize:"1.5em"}}/>


            <div className="itemCount">
                <Typography style={{fontSize:"1em"}}>{`${amount}`}</Typography>
            </div>


            <AddIcon className="buttonitemcount" onClick={handleAddItem} style={{fontSize:"1.5em"}}/>

        </div>
    );
}