import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authentication, Basket, Home, Product, Shop, Wishlist, Error404 } from './pages'
import { Header, Footer } from "./components"
function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/wishlist" element={<Wishlist />}></Route>
                    <Route path="/basket" element={<Basket />}></Route>
                    <Route path="/Product" element={<Product />}></Route>
                    <Route path="/signin" element={<Authentication />}></Route>
                    <Route path="/signup" element={<Authentication />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
