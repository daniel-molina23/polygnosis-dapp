import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import "bulma/css/bulma.min.css";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD-djuI1nWvmw3ZL7LXzC5Se7lXQUbg0dk",
  authDomain: "fir-crud-dapp.firebaseapp.com",
  projectId: "fir-crud-dapp",
  storageBucket: "fir-crud-dapp.appspot.com",
  messagingSenderId: "220919629314",
  appId: "1:220919629314:web:bc5c1eb5e1599ccc59491b",
  measurementId: "G-64BZ747NS7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
