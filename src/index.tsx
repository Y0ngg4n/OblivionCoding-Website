import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/build/main.css';

// Import JS
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
