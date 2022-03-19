import { createContext, useContext, useReducer, useEffect } from "react"
import { AuthReducer } from "../reducers/auth-reducer"
import axios from "axios"

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
    const [userState, AuthDispatcher] = useReducer(AuthReducer, initialState)
    useEffect(() => {
        const token = localStorage.getItem("felix-user-token")
        if (token) {
            axios.post("/api/auth/verify", {
                encodedToken: token
            }).then((response) => {
                const user = response.data
                AuthDispatcher({
                    type: "VERIFY_USER",
                    payload: {
                        _id: user.id,
                        name: user.fullName,
                        email: user.email,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                        encodedToken: token
                    }
                })
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ userState, AuthDispatcher }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }