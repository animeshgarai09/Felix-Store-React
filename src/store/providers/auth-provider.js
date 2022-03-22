import { createContext, useContext, useReducer, useEffect } from "react"
import { AuthReducer } from "../reducers/auth-reducer"
import axios from "axios"
import { useBasket } from "./basket-provider"
import { useWishlist } from "./wishlist-provider"

const AuthContext = createContext()

const initialState = {
    _id: "",
    name: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    encodedToken: ""
}
const AuthProvider = ({ children }) => {
    const [UserState, AuthDispatcher] = useReducer(AuthReducer, initialState)
    const { setBasketState } = useBasket()
    const { setWishlistState } = useWishlist()

    useEffect(() => {
        const token = localStorage.getItem("felix-user-token")
        if (token) {
            axios.post("/api/auth/verify", {
                encodedToken: token
            }).then((response) => {
                const user = response.data
                AuthDispatcher({
                    type: "SET_USER",
                    payload: {
                        _id: user.id,
                        name: user.fullName,
                        email: user.email,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                        encodedToken: token
                    }
                })
                setBasketState(user.cart)
                setWishlistState(user.wishlist)
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ UserState, AuthDispatcher }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }