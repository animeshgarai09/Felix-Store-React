export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, ...action.payload]
        case "REMOVE_FROM_CART":
            return [...state.filter((item) => item._id !== action.payload._id)]
        default:
            return state
    }
}