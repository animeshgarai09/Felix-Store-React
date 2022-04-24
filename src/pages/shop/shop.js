import styles from "./shop.module.scss"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, IconButton } from "react-felix-ui"
import { AiFillHeart, AiOutlineHeart, MdAdd } from "@icons"
import Categories from "./sub-components/categories"
import Filters from "./sub-components/filters"
import { useFilter } from "@providers/filter-provider"
import { useBasket } from "@providers/basket-provider"
import { useWishlist } from "@providers/wishlist-provider"
import { useProducts } from "@providers/product-provider"
import useFilteredProducts from "@hooks/useFilteredProducts"
import { checkWishListed } from "@global/js"
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react"

const Shop = () => {
    const [searchParams] = useSearchParams();
    const { products } = useProducts()
    const { FilterState: { filter }, FilterDispatcher } = useFilter()
    const [filteredProducts, setFilteredProducts] = useState([])
    const filterProducts = useFilteredProducts();
    const { addToBasket } = useBasket()
    const { WishlistState, wishlistToggle } = useWishlist()

    useEffect(() => {
        if ([...searchParams].length === 0) {
            FilterDispatcher({ type: "CLEAR_FILTERS" });
            const temp = products.length !== 0 && filterProducts(products, true)
            setFilteredProducts(temp)
        } else {
            const temp = products.length !== 0 && filterProducts(products)
            setFilteredProducts(temp)
        }
    }, [products, searchParams])


    return (
        <section className={styles.container}>
            <aside className={styles.filter__wrapper}>

                <Categories />
                <Filters />
            </aside>
            <div className={styles.product__container}>
                {
                    filter === "done" && filteredProducts.length === 0 && <h1>Not found 404</h1>
                }
                {(filter === "processing" || filter === "idle")
                    ? [...Array(10)].map((_, i) => {
                        return (<ProductWrapper key={i} isLoading={true}></ProductWrapper>)
                    })

                    : filteredProducts.map((item, i) => {
                        const isWislisted = checkWishListed(WishlistState, item._id)
                        return (
                            <ProductWrapper key={item._id} isOutStock={item.stock === "0"}>
                                <ProductImage src={require(`@assets/images/${item.img}`)} alt='product' badge={item.badge} />
                                <ProductBody
                                    title={item.title}
                                    description={item.description}
                                    category={{
                                        name: item.category,
                                    }}
                                    vendor={{
                                        name: item.vendor,
                                    }}
                                    rating={item.rating}
                                    currentPrice={item.currentPrice}
                                    price={item.price}
                                >
                                    <ProductActions>
                                        <IconButton onClick={() => wishlistToggle(item)} icon={isWislisted ? <AiFillHeart /> : <AiOutlineHeart />} className="like-btn" />
                                        <Button onClick={() => addToBasket(item)} size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                                    </ProductActions>
                                </ProductBody>
                            </ProductWrapper>
                        )
                    })}
            </div>
        </section>
    )
}

export default Shop