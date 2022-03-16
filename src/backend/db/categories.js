import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        _id: uuid(),
        categoryName: "fruits",
    },
    {
        _id: uuid(),
        categoryName: "vegetables",
    },
    {
        _id: uuid(),
        categoryName: "plants",
    },
    {
        _id: uuid(),
        categoryName: "organic products",
    },
    {
        _id: uuid(),
        categoryName: "groceries",
    },
];
