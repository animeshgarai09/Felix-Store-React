import styles from "./shop.module.scss"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, IconButton, List, ListItem } from "react-felix-ui"
import { AiOutlineHeart, MdAdd } from "@icons"
import Categories from "./sub-components/categories"
import { useProducts } from "@providers/product-provider"
import { useBasket } from "@providers/basket-provider"
import { useWishlist } from "@providers/wishlist-provider"
const Shop = () => {

    const { products } = useProducts()
    const { addToBasket } = useBasket()
    const { addToWishlist } = useWishlist()
    return (
        <section className={styles.container}>
            <aside className={styles.filter__wrapper}>

                <Categories />
                <div className={`${styles.side} ${styles.filter__container}`}>
                    <div className="control">
                        <h5>Filters</h5>
                        <Button size="xs" variant="ghost" isRound={true} theme="danger">Clear All</Button>
                    </div>
                    <span className={styles.heading}>Sort By</span>
                    <List style="none">
                        <ListItem>
                            <label><input type="checkbox" className={styles.subOption} /> Price - Low to high</label>
                        </ListItem>
                        <ListItem>
                            <label><input type="checkbox" className={styles.subOption} /> Price - High to low</label>
                        </ListItem>
                    </List>
                    <span className={styles.heading}>Rating</span>

                    <List style="none">
                        <ListItem>
                            <input type="radio" id="f-option" name="selector" />
                            <label for="f-option">4 Star & above</label>
                        </ListItem>

                        <ListItem>
                            <input type="radio" id="s-option" name="selector" />
                            <label for="s-option">3 Star & above</label>
                        </ListItem>
                        <ListItem>
                            <input type="radio" id="t-option" name="selector" />
                            <label for="t-option">2 Star & above</label>
                        </ListItem>
                        <ListItem>
                            <input type="radio" id="t-option" name="selector" />
                            <label for="t-option">1 Star & above</label>
                        </ListItem>
                    </List>
                </div>
            </aside>
            <div className={styles.product__container}>
                {products.map((item, i) => {
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