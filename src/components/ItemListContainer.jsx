import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
//import arrayProductos from "./json/productos.json";
import { /*addDoc,*/ collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
            setLoading(false);
        });
    }, [id]);
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, item);
        })
    }, []);*/

    return (
        <div className="container">
                {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
}
export default ItemListContainer;