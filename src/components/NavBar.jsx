import React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className=" col-md-6">  

                <nav className="navbar bg-dark  navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top"><img src="images/ca_do_ol-removebg-preview.png" alt="Logo" width="250" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
                                <li className="nav-item"><a className="nav-link" href="#bodegas">Bodegas</a></li>
                                <li className="nav-item"><a className="nav-link" href="#nosotros">Nosotros</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
                            </ul>
                        </div>
                        <div className=" col-md-1 d-flex align-items-center justify-content-end">            
                            <CartWidget />
                        </div>
                    </div>
                </nav>

                </div>
             </div>
         </div>
    )
}

export default NavBar;