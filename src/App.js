import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authentication, Basket, Home, Product, Shop, Wishlist, Error404 } from '@pages'
import { Header, Footer, RequireAuth, RestrictAuth, ScrollToTop } from "@components"
import Mockman from "mockman-js"
function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
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
        </Router>
    );
}

export default App;
