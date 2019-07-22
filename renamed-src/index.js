// Like require, but from front end
import React from 'react';
// Renders react application on page
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // ./ means it is not coming from node modules - must be a file
import * as serviceWorker from './serviceWorker';

// Import App function by importing it as a self closing tag syntax: (component to render, where do you want to render it?) "render our app component onto div called root"
ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();