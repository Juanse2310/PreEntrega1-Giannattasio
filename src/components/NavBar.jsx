import React from "react";
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className=" col-md-6">  

                <nav className="navbar bg-dark  navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}><img src={"/images/ca_do_ol-removebg-preview.png"} alt="Logo" width="250" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/servicios"}>Servicios</NavLink></li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/Malbec"}>malbec</NavLink></li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/category/Blend"}>blend</NavLink></li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"/nosotros"}>Nosotros</NavLink></li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to={"/category/contacto"}>Contacto</NavLink></li>
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