import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-felix-ui/dist/cjs/index.css'
import './global/css/global.scss'
import { makeServer } from "./server";

// Call make Server
makeServer();
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

