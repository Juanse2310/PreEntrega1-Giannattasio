import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/cava_dona_oliva/?hl=es" aria-label="Twitter"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/donaoliva2012/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/cavadonaoliva" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

        )
    }
    
    export default Footer;