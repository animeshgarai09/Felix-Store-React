import { Routes, Route } from "react-router-dom";
import { Authentication, Basket, Home, Product, Shop, Wishlist, Error404 } from '@pages'
import { Header, Footer, RequireAuth, RestrictAuth, ScrollToTop } from "@components"
import { FilterProvider } from "@providers/filter-provider";
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
