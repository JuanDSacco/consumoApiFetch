import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [data,setData] = useState([])
    const API = 'https://fakestoreapi.com/products'


    useEffect(() => {
        fetch(API)
        .then((res) => (res.json()))
        .then((res) => setData(res))
    },[])

    return <ItemList data={data}/>
}

export default ItemListContainer;