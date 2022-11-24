import React from "react";
import './Servicios.css';

const Servicios = () => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Servicios</h2>
                    <h3 className="section-subheading text-muted">Vení a descubrir una experiencia única…</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <img src="images/cjas.jpg" alt=""height="140"/>
                        </span>
                        <h4 className="my-3">Compras online</h4>
                        <p className="text-muted">Compras online, con la mejor asesoramiento para despejar tus dudas y salir sabiendo un poquito mas del mundo del vino.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <img src="images/jjs.jpg" alt=""height="140"/>
                        </span>
                        <h4 className="my-3">Elegante vinoteca</h4>
                        <p className="text-muted">Te espera una amplia variedad de vinos de autor, bodegas familiares y boutique. Acompañandote, para encontrar lo que estes buscando.  </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <img src="images/gente3.jpg" alt=""height="140"/>
                        </span>
                        <h4 className="my-3">Eventos/ catas</h4>
                        <p className="text-muted">De la mano de de expertos, realizamos eventos de degustacion y aprendizaje de nuestras bodegas. Aromas, sabores, algo rico y el mejor ambiente.   </p>
                    </div>
                </div>
            </div>
        </section>
        
        
        
    )
}

export default Servicios;