import React from "react";
import ReactDOM from "react-dom";
import BoxContainer from "./js/components/container/BoxContainer.jsx";
import ReactApp from './js/ReactApp.jsx';


import BootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import style from './index.scss';


const root = document.getElementById("root");

// ReactDOM.render(React.createElement(BoxContainer), root); // ReactDOM.render(<FormContainer />, root);
ReactDOM.render(React.createElement(ReactApp), root); // ReactDOM.render(<FormContainer />, root);


// alert('Opened');
