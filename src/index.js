import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxpVTWvQZTgPFP7XYCDuaVv9Srbx9AIP4",
  authDomain: "cava-oliva.firebaseapp.com",
  projectId: "cava-oliva",
  storageBucket: "cava-oliva.appspot.com",
  messagingSenderId: "339176547556",
  appId: "1:339176547556:web:11beee407cce6f7fd3b8f1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
