import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => {
    return(
        <>
            <nav>
                <ul className='navBar'>
                    <Link to={`/productos`} className='linkProd'><button><li>Productos</li></button></Link> 
                    <Link to={`/`} className='linkProd'><button><li>Nosotros</li></button></Link>
                    <Link to={`/`} className='linkProd'><button><li>Contacto</li></button></Link>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;