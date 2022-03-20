import { createContext, useContext } from 'react'
import { useToast } from 'react-felix-ui'
import { useState } from 'react'
import axios from "axios"

const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("felix-user-token");
    const [WishlistState, setWishlistState] = useState([])
    const toast = useToast()

    const addToWishlist = (item) => {
        const checkPresence = WishlistState.filter((wItem => wItem._id === item._id))
        if (checkPresence.length === 0) {
            axios.post("/api/user/wishlist",
                { product: item },
                {
                    headers: {
                        authorization: encodedToken,
                    },
                }
            ).then((response) => {

                setWishlistState(response.data.wishlist);
                toast({
                    status: "success",
                    message: "Item added in your wishlist",
                    duration: 2
                })
            }).catch((err) => {
                console.log(err)
            })
        } else {
            toast({
                status: "error",
                message: "Item is already in the wishlist",
                duration: 1.5
            })
        }
    };

    const removeFromWishlist = (id) => {
        axios.delete(`/api/user/wishlist/${id}`, {
            headers: {
                authorization: encodedToken,
            },
        }).then((response) => {
            setWishlistState(response.data.wishlist);

        }).catch(err => {
            console.log(err);

        })
    }
    return (
        <WishlistContext.Provider value={{ WishlistState, setWishlistState, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}
const useWishlist = () => useContext(WishlistContext)
export { useWishlist, WishlistProvider }