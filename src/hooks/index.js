import { useState } from "react"
import { useAuth } from "@providers/auth-provider"
import { useBasket } from "@providers/basket-provider"
import { useWishlist } from "@providers/wishlist-provider"
export const useInputHandler = (state) => {
    const [inputState, setInputState] = useState(state)
    const inputChange = (evt) => {
        const value = evt.target.value;
        setInputState({
            ...inputState,
            [evt.target.name]: value
        });
    }
    return { inputState, inputChange }
}

export const useSetUserDetails = () => {
    const { AuthDispatcher } = useAuth()
    const { setBasketState } = useBasket()
    const { setWishlistState } = useWishlist()

    return (user, token) => {
        console.log(user)
        AuthDispatcher({
            type: "SET_USER",
            payload: {
                _id: user._id,
                name: user.fullName,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                encodedToken: token
            }
        })
        setBasketState(user.cart)
        setWishlistState(user.wishlist)
    }
}