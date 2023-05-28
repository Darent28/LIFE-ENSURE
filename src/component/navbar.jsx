import React from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaBuilding} from "react-icons/fa";


export const Navbar = () => {

  

  const location = useLocation();

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand"><Link to="/" className="nav-link">
              <FaBuilding></FaBuilding><span> LIFE-ENSURE</span></Link></div>
            <ul className="navbar-nav nav-custom">
                <li className={`nav-item item-custom ${location.pathname === '/log-in' ? 'nav-on' : ''}`}>
                  <Link to="/log-in" className="nav-link text-custom" activeClassName="active">Login</Link>
                </li>
                <li className={`nav-item item-custom ${location.pathname === '/sign-in' ? 'nav-on' : ''}`}>
                  <Link to="/sign-in" className="nav-link text-custom" activeClassName="active"><span>Register</span></Link>
                </li>
               
                <li className={`nav-item item-custom ${location.pathname === '/f-auto' ? 'nav-on' : ''}`}>
                  <Link to="/f-auto" className="nav-link text-custom" activeClassName="active">Reporte de Informacion</Link>
                </li>
                <li className={`nav-item item-custom ${location.pathname === '/f-incidente' ? 'nav-on' : ''}`}>
                  <Link to="/f-incidente" className="nav-link text-custom" activeClassName="active">Formulario de Incidente</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;