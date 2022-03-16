import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-felix-ui/dist/cjs/index.css'
import './global/css/global.scss'
import { makeServer } from "./server";
import { ProductProvider } from "./store/providers/product-provider"
// Call make Server
makeServer();
ReactDOM.render(
    <React.StrictMode>
        <ProductProvider>
            <App />
        </ProductProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

