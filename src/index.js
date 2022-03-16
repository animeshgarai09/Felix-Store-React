import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-felix-ui/dist/cjs/index.css'
import './global/css/global.scss'
import { makeServer } from "./server";
import { ProductProvider } from "./store/providers/product-provider"
import { AuthProvider } from "./store/providers/auth-provider"
// Call make Server
makeServer();
ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

