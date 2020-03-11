import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCVsk1aqq66Gz1wFucZC0Kin3THDJ_L0lM",
    authDomain: "danger-zone-f7567.firebaseapp.com",
    databaseURL: "https://danger-zone-f7567.firebaseio.com",
    projectId: "danger-zone-f7567",
    storageBucket: "danger-zone-f7567.appspot.com",
    messagingSenderId: "335694551016",
    appId: "1:335694551016:web:58422fa557f11861a0f65d",
    measurementId: "G-5Z066TMHRF"
  }
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
