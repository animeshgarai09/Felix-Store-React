import { useFilter } from '@providers/filter-provider'
import { productFilterByCategories, productFilterByPriceRange, sortProducts } from "./functions"

const useFilteredProducts = (products) => {
    let productList = [...products]
    const { FilterState } = useFilter()
    const { categories, sortBy, priceLow, priceHigh } = FilterState;

    if (sortBy) {
        productList = sortProducts(productList, sortBy);
    }

    if (categories.length > 0) {
        productList = productFilterByCategories(productList, categories);
    }
    if (priceLow !== 1 || priceHigh < 1000) {
        productList = productFilterByPriceRange(productList, priceLow, priceHigh)
    }
    return [...productList]
}

export default useFilteredProducts