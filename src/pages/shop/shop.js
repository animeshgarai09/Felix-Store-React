import styles from "./shop.module.scss"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, IconButton } from "react-felix-ui"
import { AiOutlineHeart, MdAdd } from "@icons"
import Categories from "./sub-components/categories"
import Filters from "./sub-components/filters"
import { useProducts } from "@providers/product-provider"
import { useFilter } from "@providers/filter-provider"
import { useBasket } from "@providers/basket-provider"
import { useWishlist } from "@providers/wishlist-provider"
import useFilteredProducts from "@hooks/useFilteredProducts"
const Shop = () => {

    const { products } = useProducts()
    const filteredProducts = useFilteredProducts(products);
    const { FilterState: { filter } } = useFilter()
    const { addToBasket } = useBasket()
    const { addToWishlist } = useWishlist()
    console.log(filteredProducts)
    return (
        <section className={styles.container}>
            <aside className={styles.filter__wrapper}>

                <Categories />
                <Filters />
            </aside>
            <div className={styles.product__container}>
                {
                    filter && filteredProducts.length === 0 && <h1>Not found 404</h1>
                }
                {!filter && filteredProducts.length === 0
                    ? [...Array(10)].map((_, i) => {
                        return (<ProductWrapper key={i} isLoading={true}></ProductWrapper>)
                    })

                    : filteredProducts.map((item, i) => {
                        return (
                            <ProductWrapper key={item._id}>
                                <ProductImage src={require(`@assets/images/${item.img}`)} alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
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
                                        <IconButton onClick={() => addToWishlist(item)} icon={<AiOutlineHeart />} className="like-btn" />
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