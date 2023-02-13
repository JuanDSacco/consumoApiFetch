import { Link } from "react-router-dom";
import './item.css'
const Item = ({data}) => {
    return(
        <>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <img src={data.image} className='img' alt='foto'/>
            <h3>$ {data.price}</h3>
            <br></br>
            <Link to={`/item/${data.id}`}><button>Detalles</button></Link>    
        </>
    )
}

export default Item;
