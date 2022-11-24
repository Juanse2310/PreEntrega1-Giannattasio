import './App.css';
import React from "react";
import Banners from "./components/Banners";
import NavBar from './components/NavBar';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banners/>
      <ItemListContainer greeting={" Pronostico para el fin de semana: 90 % de probabilidades de  VINO "}/>
      <Servicios/>
      <Contacto/>
      <Footer/>

    </div>
  );
}

export default App;
