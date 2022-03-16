import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        title: "Avocado Indian - 250 g",
        description: "Avocado is often eaten as a fruit eaten alone or mixed with other fruits in a fruit salad",
        img: "vegetables/avocado.jpeg",
        category: "fruit",
        stock: "13",
        rating: "3.2",
        price: "207",
        currentPrice: "167"
    },
    {
        _id: uuid(),
        title: "Baby Corn - Exotic - 100 g",
        description: "Who can say no to baby corn? It is widely loved and used in many continental cuisines.",
        img: "vegetables/baby-corn.jpeg",
        category: "vegetables",
        stock: "20",
        rating: "3.9",
        price: "49",
        currentPrice: "37"
    }, {
        _id: uuid(),
        title: "Broccoli - Exotic - 250 g",
        description: "Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.",
        img: "vegetables/broccoli.jpeg",
        category: "vegetables",
        stock: "30",
        rating: "4.1",
        price: "51",
        tag: "populer",
        currentPrice: "37.5"
    }, {
        _id: uuid(),
        title: "Chilli green - 250 g",
        description: "Can we think of Indian cooking without a dash of hot, peppery green chillies?",
        img: "vegetables/Chilli-Green.jpeg",
        category: "vegetables",
        stock: "30",
        rating: "4.2",
        price: "35",
        currentPrice: "29"
    },
    {
        _id: uuid(),
        title: "Brinjal Bharta - 500 g",
        description: "Avocado is often eaten as a fruit eaten alone or mixed with other fruits in a fruit salad",
        img: "vegetables/brinjal.png",
        category: "vegetables",
        stock: "10",
        rating: "4.5",
        price: "70",
        currentPrice: "59.5"
    },
    {
        _id: uuid(),
        title: "Onion - 500 g",
        description: "Add sage and cheddar to make an extra special and delicious onion soup",
        img: "vegetables/onion.jpeg",
        category: "vegetables",
        stock: "12",
        rating: "2.3",
        price: "30",
        currentPrice: "26.9"
    },
    {
        _id: uuid(),
        title: "Ginger - 100 g",
        description: "Steep a healing, rejuvenating cup of ginger tea on days when you need an extra push!",
        img: "vegetables/ginger.jpeg",
        category: "vegetables",
        stock: "22",
        rating: "4.5",
        price: "15",
        currentPrice: "7.9"
    },
    {
        _id: uuid(),
        title: "Potato - 500 g",
        description: "Potato is a popular and important ingredient in every imaginable cuisine. It is loved globally.",
        img: "vegetables/potato-2.jpeg",
        category: "vegetables",
        stock: "22",
        rating: "4.5",
        price: "22",
        currentPrice: "17.6"
    },
    {
        _id: uuid(),
        title: "Baby Potato - Exotic - 200 g",
        description: "Baby potatoes are smaller but have the exact same goodness as potatoes. They’re a roast favourite.",
        img: "vegetables/potato.jpeg",
        category: "vegetables",
        stock: "17",
        rating: "4.5",
        price: "25.8",
        currentPrice: "13"
    },
    {
        _id: uuid(),
        title: "Sprouts Green Peas 200 g",
        description: "Steep a healing, rejuvenating cup of ginger tea on days when you need an extra push!",
        img: "vegetables/SPROUTS-GREEN-PEAS.jpeg",
        category: "vegetables",
        stock: "27",
        rating: "4.1",
        price: "63",
        currentPrice: "49"
    },
    {
        _id: uuid(),
        title: "Tomato - 500 g",
        description: "Stuff tomatoes with some mixed veggies and crumbled panner and enjoy them grilled",
        img: "vegetables/tomato.jpeg",
        category: "vegetables",
        stock: "22",
        rating: "3.1",
        price: "35",
        currentPrice: "22.5"
    },
    {
        _id: uuid(),
        title: "Tomato - Cherry Fresh Hydroponic - 250 g",
        description: "Stuff tomatoes with some mixed veggies and crumbled panner and enjoy them grilled",
        img: "vegetables/tomato-2.jpeg",
        category: "vegetables",
        stock: "11",
        rating: "3.1",
        price: "197",
        currentPrice: "169"
    },
];
