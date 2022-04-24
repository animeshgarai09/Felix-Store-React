import { createContext, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useToast } from 'react-felix-ui'
import axios from "axios"

const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("felix-store-user-token");
    const [BasketState, setBasketState] = useState([])
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const addToBasket = (item) => {
        const checkPresence = BasketState.filter((bItem => bItem._id === item._id))
        if (checkPresence.length === 0) {
            axios.post("/api/user/cart",
                { product: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            ).then((response) => {

                setBasketState(response.data.cart);
                toast({
                    status: "success",
                    message: "Item added in your basket",
                    duration: 2
                })
            }).catch((err) => {
                toast({
                    status: "error",
                    message: "Sign in to your account first",
                    duration: 2
                })
                navigate('/signin', { state: { from: location } }, { replace: true })
            })
        } else {
            toast({
                status: "error",
                message: "Item is already in the basket",
                duration: 1.5
            })
        }
    };

    const removeFromBasket = (id) => {
        axios.delete(`/api/user/cart/${id}`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setBasketState(response.data.cart);
        }).catch(err => {
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location } })
        })
    }
    const removeAllFromBasket = () => {
        axios.delete(`/api/user/cart`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setBasketState(response.data.cart);
            toast({
                status: "success",
                message: "Removed all items from basket",
                duration: 2
            })
        }).catch(err => {
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location } })
        })
    }

    const updateProductQty = (actionType, id) => {
        axios.post(`/api/user/cart/${id}`, {
            action: {
                type: actionType === "INC" ? "increment" : "decrement",
            }
        }, {
            headers: {
                authorization: encodedToken,
            },
        }).then(response => {
            setBasketState(response.data.cart);
        }).catch(err => {
            toast({
                status: "error",
                message: "Sign in to your account first",
                duration: 2
            })
            navigate('/signin', { state: { from: location } })
        })
    };

    return (
        <BasketContext.Provider value={{ BasketState, setBasketState, addToBasket, updateProductQty, removeFromBasket, removeAllFromBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
const useBasket = () => useContext(BasketContext)
export { useBasket, BasketProvider }