import styles from "./basket.module.scss"
import { useWishlist } from "@providers/wishlist-provider"
import { useBasket } from "@providers/basket-provider"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, Modal, ModalBody } from "react-felix-ui"
import { MdAdd } from "@icons"
import { Empty, Counter } from "@components"
import Summary from "./sub-components/summary"
import { useEffect, useState } from "react"

const Basket = () => {

    const { BasketState, updateProductQty, removeFromBasket, removeAllFromBasket } = useBasket()
    const { addToWishlist } = useWishlist()
    const [itemCount, setItemCount] = useState(0)

    const [isModalOpen, setModal] = useState(false)

    const handleMoveToWishlist = (item) => () => {
        removeFromBasket(item._id)
        addToWishlist(item)
    }

    const handleRemoveAll = () => {
        removeAllFromBasket()
        setModal(false)
    }


    useEffect(() => {
        const itemCount = BasketState.reduce((prev, current) => parseInt(prev) + current.qty, 0)
        setItemCount(itemCount)
    }, [BasketState])
    return (
        <section className={styles.container}>
            {BasketState.length === 0
                ? <Empty page="basket" />
                : <div className={styles.wrapper}>
                    <div className={styles.item_container}>
                        <div className={styles.info}>
                            <div>
                                <h3>My Basket</h3>
                                <p>You have {itemCount} items in the basket. Checkout fast !</p>
                            </div>
                            <Button size="sm" variant="ghost" onClick={() => setModal(true)} isRound={true} isTransform={false} color="danger">Remove all</Button>
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
                                            <ProductActions newLine>
                                                <Counter min={1} set={item.qty} onDecrease={() => updateProductQty("DEC", item._id)} onIncrease={() => updateProductQty("INC", item._id)} />
                                                <Button size="sm" isTransform={false} onClick={handleMoveToWishlist(item)} variant="ghost" leftIcon={<MdAdd />}>Wishlist</Button>
                                            </ProductActions>
                                        </ProductBody>
                                    </ProductWrapper>
                                )
                            })
                            }
                        </div>
                    </div>
                    <aside className={styles.summary_container}>
                        <Summary itemCount={itemCount} />
                    </aside>
                </div>
            }
            <Modal size="sm" isOpen={isModalOpen} onClose={() => setModal(false)} title="Are you sure?">
                <ModalBody>
                    <p>All the items in the basket will be removed!</p>
                    <div className={styles.actions}>
                        <Button color="gray" onClick={() => setModal(false)}>Cancel</Button>
                        <Button color="danger" onClick={handleRemoveAll}>Remove All</Button>
                    </div>
                </ModalBody>
            </Modal>
        </section>
    )
}

export default Basket