import { Routes, Route } from "react-router-dom";
import { Authentication, Basket, Home, Product, Shop, Wishlist, Account, Error404 } from '@pages'
import { Header, Footer, RequireAuth, RestrictAuth, ScrollToTop } from "@components"
import { FilterProvider } from "@providers/filter-provider";
import Details from "./pages/account/sub-components/details";
import Orders from "./pages/account/sub-components/orders";
import Addresses from "./pages/account/sub-components/addresses";
import TrackOrders from "./pages/account/sub-components/track-orders";

import Mockman from "mockman-js"
function App() {
    return (
        <>
            <Header />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<FilterProvider><Shop /></FilterProvider>}></Route>
                    <Route element={<RequireAuth />}>
                        <Route path="/wishlist" element={<Wishlist />}></Route>
                        <Route path="/basket" element={<Basket />}></Route>
                        <Route path="/account" element={<Account />}>
                            <Route index element={<Details />}></Route>
                            <Route path="orders" element={<Orders />}></Route>
                            <Route path="addresses" element={<Addresses />}></Route>
                            <Route path="track-orders" element={<TrackOrders />}></Route>
                        </Route>
                    </Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route element={<RestrictAuth />}>
                        <Route path="/signin" element={<Authentication />}></Route>
                        <Route path="/signup" element={<Authentication />}></Route>
                    </Route>
                    <Route path="/mock" element={<Mockman />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </ScrollToTop>
            <Footer />
        </>
    );
}

export default App;
