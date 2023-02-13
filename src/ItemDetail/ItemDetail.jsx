import './itemDetail.css'
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
    return(
        <div>
            <h1>Nombre: {data.title}</h1>
            <img src={data.image} className='imgDetail' alt='imagen' />
            <h2>Precio: ${data.price}</h2>
            <p>Detalle del producto: {data.description}</p>
            <Link to={`/`}><button>Volver al inicio</button></Link>
        </div>
    )
}

export default ItemDetail;