import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail =({item}) => {
    
    return(
        <div className="row my-5">
            <div className="col-md-5 ">
                <img src={item.imagen} alt={item.nombre} className="image-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <h5>{item.descripcion}</h5>
                <p>{item.precio}</p>
                <ItemCount stock={item.stock}/>
            </div>

        </div>
    )
}

export default ItemDetail;