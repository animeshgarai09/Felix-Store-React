import { createContext, useContext, useReducer, useEffect, } from "react"
import { ProductReducer } from '../reducers/product-reducer'
import axios from "axios"
const ProductContext = createContext()

const ProductProvider = ({ children }) => {

    const [productState, productDispatch] = useReducer(ProductReducer, [])
    useEffect(() => {
        axios.get("/api/products")
            .then((response) => {
                console.log(response.data.products);
                productDispatch({
                    type: "SET_PRODUCTS",
                    payload: response.data.products
                })
            })
    }, [])
    return (
        <ProductContext.Provider value={productState}>
            {children}
        </ProductContext.Provider>
    )
}
const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider }