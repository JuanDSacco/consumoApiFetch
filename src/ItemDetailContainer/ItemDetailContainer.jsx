import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [data,setData] = useState([])
    const {id} = useParams()
    const API = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetch(API)
        .then((res) => (res.json()))
        .then((data) => setData(data.find((item) => item.id === parseInt(id))))
    },[id])

    return <ItemDetail data={data} />
}

export default ItemDetailContainer;