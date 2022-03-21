import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-felix-ui/dist/cjs/index.css'
import './global/css/global.scss'
import { makeServer } from "./server";
import { ProductProvider } from "@providers/product-provider"
import { AuthProvider } from "@providers/auth-provider"
import { BasketProvider } from "@providers/basket-provider"
import { WishlistProvider } from "@providers/wishlist-provider"
import { ToastProvider } from "react-felix-ui"
// Call make Server
makeServer();
ReactDOM.render(
    <React.StrictMode>
        <ToastProvider className="toast-container">
            <ProductProvider>
                <BasketProvider>
                    <WishlistProvider>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </WishlistProvider>
                </BasketProvider>
            </ProductProvider>
        </ToastProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

