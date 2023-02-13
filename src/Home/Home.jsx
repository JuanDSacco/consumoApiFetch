import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <header>
                <h1>Tienda de todo un poco</h1>
                <nav>
                    <ul>
                        <Link to={`/productos`} className='linkProd'><button><li>Productos</li></button></Link> 
                        <li className='linkProd'><button>Nosotros</button></li>
                        <li className='linkProd'><button>Contacto</button></li>
                        
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Home;