export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            localStorage.setItem("felix-user-token", action.payload.encodedToken)
            return { ...action.payload }
        default:
            return state
    }
}