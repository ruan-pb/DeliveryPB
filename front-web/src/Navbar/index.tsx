import './styles.css'
import {ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav className="main-nav-bar">

            <Logo/>
            <Link to="/" className="Logo-text">DS Delivery</Link>
        </nav>
    )

}

export default Navbar;