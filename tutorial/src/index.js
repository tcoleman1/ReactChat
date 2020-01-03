import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore')

firebase.initializeApp({
    
    apiKey: "AIzaSyCs9C_Mf6UcNU6JfBILyh7CxzwIevaFlIM",
    authDomain: "reactchatapp-aa1f6.firebaseapp.com",
    databaseURL: "https://reactchatapp-aa1f6.firebaseio.com",
    projectId: "reactchatapp-aa1f6",
    storageBucket: "reactchatapp-aa1f6.appspot.com",
    messagingSenderId: "443952684499",
    appId: "1:443952684499:web:65041390325d9d3181e326",
    measurementId: "G-F02GL9S9J0"
})
ReactDOM.render( <div> Hello World</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
