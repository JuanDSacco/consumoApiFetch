import { Link } from "react-router-dom";
import './item.css'
const Item = ({data}) => {
    return(
        <>
            <h1>{data.title}</h1>
            <img src={data.image} className='img' alt='foto'/>
            <br></br>
            <Link to={`/item/${data.id}`}><button>Detalles</button></Link>    
        </>
    )
}

export default Item;
