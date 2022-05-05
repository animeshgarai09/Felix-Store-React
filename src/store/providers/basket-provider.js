import { createContext, useContext, useReducer } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useToast } from 'react-felix-ui'
import { BasketReducer } from '../reducers/basket-reducer'
import axios from "axios"

const BasketContext = createContext()

const init = {
    items: [],
    mrp: 0,
    total: 0,
    discount: 0,
    itemsCount: 0,
    address: "",
}
const BasketProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("felix-store-user-token");
    const [BasketState, BasketDispatcher] = useReducer(BasketReducer, init)
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const addToBasket = (item, alert) => {
        const checkPresence = BasketState.items.filter((bItem => bItem._id === item._id))
        if (checkPresence.length === 0) {
            axios.post("/api/user/cart",
                { product: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            ).then((response) => {

                BasketDispatcher({
                    type: "SET_ITEMS",
                    payload: response.data.cart
                })
                switch (alert?.alert) {
                    case "no-alert":
                        break
                    case "move":
                        toast({
                            status: "success",
                            message: "Item moved to your basket",
                            duration: 2
                        })
                        break
                    default:
                        toast({
                            status: "success",
                            message: "Item added in your basket",
                            duration: 2
                        })
                        break
                }
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
            BasketDispatcher({
                type: "SET_ITEMS",
                payload: response.data.cart
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
    const removeAllFromBasket = ({ alert }) => {
        axios.delete(`/api/user/cart`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            BasketDispatcher({
                type: "EMPTY_BASKET",
            })
            switch (alert) {
                case "no-alert":
                    break
                default:
                    toast({
                        status: "success",
                        message: "Removed all items from basket",
                        duration: 2
                    })
                    break
            }
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
            BasketDispatcher({
                type: "SET_ITEMS",
                payload: response.data.cart
            })
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
        <BasketContext.Provider value={{ BasketState, BasketDispatcher, addToBasket, updateProductQty, removeFromBasket, removeAllFromBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
const useBasket = () => useContext(BasketContext)
export { useBasket, BasketProvider }