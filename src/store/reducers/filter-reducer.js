export const FilterReducer = (state, { type, payload }) => {
    switch (type) {
        case "FILTER_BY_SORT":
            return { ...state, filter: true, sortBy: payload }
        case "FILTER_BY_CATEGORY":
            return { ...state, filter: true, categories: payload }
        case "FILTER_BY_PRICE_RANGE":
            return { ...state, filter: true, priceLow: payload.min, priceHigh: payload.max }
        case "CLEAR_FILTERS":
            return {
                filter: false,
                sortBy: null,
                categories: [],
                priceLow: 1,
                priceHigh: 1000,
            };
        default:
            return { ...state }
    }
}