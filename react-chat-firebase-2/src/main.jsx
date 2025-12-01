import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyRuVGhO3xk7-E7-Dr5E4VHVVSxJ2i22E",
  authDomain: "react-chat-au25.firebaseapp.com",
  databaseURL: "https://react-chat-au25-default-rtdb.firebaseio.com",
  projectId: "react-chat-au25",
  storageBucket: "react-chat-au25.firebasestorage.app",
  messagingSenderId: "163679578380",
  appId: "1:163679578380:web:a0f4c5adee2a144f6e8129"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);