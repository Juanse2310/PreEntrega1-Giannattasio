import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './components/Error404';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import './App.css';
import Servicios from "./components/Servicios";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import Contacto from "./components/Contacto";




function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/servicios"} element={<Servicios/>}/>
        <Route path={"/contacto"} element={<Contacto/>}/>
        <Route path={"/cart"} element={<Cart />}/>
        <Route path={"/checkout"} element={<Checkout />} />
        <Route path={"/thankyou/:id"} element={<ThankYou />} />
        <Route path={"*"} element={<Error404 />}/>
      </Routes>
       <Footer/>
      </BrowserRouter>  
      </CartContextProvider>
  );
}

export default App;
