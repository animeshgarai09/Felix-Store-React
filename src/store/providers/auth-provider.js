import { createContext, useContext, useReducer } from "react"
import { AuthReducer } from "../reducers/auth-reducer"
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
    return (
        <AuthContext.Provider value={{ userState, AuthDispatcher }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }