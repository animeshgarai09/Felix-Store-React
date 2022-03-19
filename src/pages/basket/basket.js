import styles from "./basket.module.scss"
import { useWishlist } from "@providers/wishlist-provider"
import { useBasket } from "@providers/basket-provider"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button } from "react-felix-ui"
import { MdAdd } from "@icons"
import Summary from "./sub-components/summary"
const Basket = () => {

    const { BasketState, removeFromBasket } = useBasket()
    const { addToWishlist } = useWishlist()

    const handleMoveToWishlist = (item) => () => {
        removeFromBasket(item._id)
        addToWishlist(item)
    }

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item_container}>
                    <div className={styles.info}>
                        <div>
                            <h3>My Basket</h3>
                            <p>You have {BasketState.length} items in the basket. Checkout fast !</p>
                        </div>
                        <Button size="sm" variant="ghost" isRound={true} isTransform={false} theme="danger">Remove all</Button>
                    </div>
                    <div className={styles.items_wrapper}>
                        {BasketState.map((item, i) => {
                            return (
                                <ProductWrapper style="horizontal" key={item._id} onClose={() => removeFromBasket(item._id)}>
                                    <ProductImage src={require(`@assets/images/${item.img}`)} alt='product' />
                                    <ProductBody
                                        title={item.title}
                                        description={item.description}
                                        category={{
                                            name: item.category,
                                        }}
                                        currentPrice={item.currentPrice}
                                        price={item.price}
                                    >
                                        <ProductActions>
                                            <Button size="sm" onClick={handleMoveToWishlist(item)} variant="ghost" leftIcon={<MdAdd />}>Move to wishlist</Button>
                                        </ProductActions>
                                    </ProductBody>
                                </ProductWrapper>
                            )
                        })
                        }
                    </div>
                </div>
                <aside className={styles.summary_container}>

                    <Summary />
                </aside>
            </div>
        </section>
    )
}

export default Basket