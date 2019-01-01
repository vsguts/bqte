import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer.jsx";


import BootstrapCss from 'bootstrap/dist/css/bootstrap.css';
import style from './index.scss';


const root = document.getElementById("root");

ReactDOM.render(React.createElement(FormContainer), root); // ReactDOM.render(<FormContainer />, root);

// alert('Opened');
