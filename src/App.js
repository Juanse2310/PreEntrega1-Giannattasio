import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import Servicios from "./components/Servicios";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer />}/>
        <Route path={"/category/:id"} element={<ItemListContainer />}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
        <Route path={"*"} element={<Error404 />}/>
        <Route path={"/servicios"} element={<Servicios/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
  );
}

export default App;
