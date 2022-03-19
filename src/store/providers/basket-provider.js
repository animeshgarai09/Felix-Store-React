import { createContext, useContext } from 'react'
import { useState } from 'react'
import { useToast } from 'react-felix-ui'
import axios from "axios"

const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("felix-user-token");
    const [BasketState, setBasketState] = useState([])
    const toast = useToast()

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
                console.log(err)
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
            console.log(err);

        })
    }

    // const changeCartQty = async (quantity, id) => {
    //         await axios.post(
    //             `/api/user/cart/${id}`,
    //             {
    //                 qty: quantity,
    //             },
    //             {
    //                 headers: {
    //                     authorization: encodedToken,
    //                 },
    //             }
    //         );
    //         if (response.status === 200) {
    //             setBasketState(response.data.cart);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    return (
        <BasketContext.Provider value={{ BasketState, setBasketState, addToBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
const useBasket = () => useContext(BasketContext)
export { useBasket, BasketProvider }