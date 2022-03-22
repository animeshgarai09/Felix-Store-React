import { useFilter } from "@providers/filter-provider"
import { createSearchParams, useSearchParams } from "react-router-dom";

const useFilterHandler = () => {
    const { FilterState, FilterDispatcher } = useFilter()
    const [_, setSearchParams] = useSearchParams();

    const handleCategoryChange = (e) => {
        let categoryList = [...FilterState.categories];
        if (e.target.checked) {
            categoryList.push(e.target.value);
        } else {
            categoryList = categoryList.filter((category) => category !== e.target.value);
        }
        FilterDispatcher({ type: "FILTER_BY_CATEGORY", payload: categoryList });
        setSearchParams(createSearchParams({ ...FilterState, filter: true, categories: categoryList }));
    }

    const handleSortByChange = (e) => {
        FilterDispatcher({
            type: "FILTER_BY_SORT",
            payload: e.target.value,
        });
        setSearchParams(
            createSearchParams({ ...FilterState, filter: true, sortBy: e.target.value })
        );

    }
    const handlePriceRangeChange = (range) => {
        const { min, max } = range
        console.log(range)
        FilterDispatcher({
            type: "FILTER_BY_PRICE_RANGE",
            payload: range,
        });
        setSearchParams(
            createSearchParams({ ...FilterState, filter: true, priceLow: min, priceHigh: max })
        );
    }

    const handleClearFilter = () => {
        FilterDispatcher({ type: "CLEAR_FILTERS" });
        setSearchParams();
    };
    return {
        handleCategoryChange,
        handleSortByChange,
        handlePriceRangeChange,
        handleClearFilter
    }
}

export default useFilterHandler