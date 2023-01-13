import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const ItemDetail =({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock ] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);
    
    return(
        <div className="row my-5">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="image-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <h5>{item.descripcion}</h5>
                <p>{item.precio}</p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>

        </div>
    )
}

export default ItemDetail;