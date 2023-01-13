import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import './ItemDetail.css';


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
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} className="image-fluid" height="350" />
            </div>
            <div className="col-md-4">
                <h2 className="section-heading text-uppercase">{item.nombre}</h2>
                <h3 className="section-subheading text-muted">{item.descripcion}</h3>
                <p><b>$ {item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>

        </div>
    )
}

export default ItemDetail;