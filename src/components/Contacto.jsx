import React from "react";
import './Contacto.css';

const Contacto = () => {
    return (
        
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">-</h2>
                    <h3 className="section-subheading text-muted">-</h3>
                </div>
                
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                
                                <input className="form-control" id="name" type="text" placeholder="Ingrese Nombre*" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">Por favor ingresar Nombre.</div>
                            </div>
                            <div className="form-group">
                                
                                <input className="form-control" id="email" type="email" placeholder="Ingrese Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">Por favor ingresar Email</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                                
                                <input className="form-control" id="phone" type="tel" placeholder="Ingrese Telefono *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Por favor ingresar Telefono.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                
                                <textarea className="form-control" id="message" placeholder="Consulta/Comentarios *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Por favor ingresar Mensaje.</div>
                            </div>
                        </div>
                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Enviar Mensaje</button></div>
                
                    </div>
                    </form>
            </div>
        </section>
                    )
}

export default Contacto;