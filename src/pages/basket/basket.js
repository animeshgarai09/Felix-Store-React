import styles from "./basket.module.scss"
import { productList } from "../home/sub-components/data"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button } from "react-felix-ui"
import { MdAdd } from "@icons"
import Summary from "./sub-components/summary"
const Basket = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item_container}>
                    <div className={styles.info}>
                        <div>
                            <h3>My Basket</h3>
                            <p>You have 3 items in basket</p>
                        </div>
                        <Button size="sm" variant="ghost" isRound={true} isTransform={false} theme="danger">Remove all</Button>
                    </div>
                    {productList.slice(0, 5).map((item, i) => {
                        return (
                            <ProductWrapper style="horizontal" key={item.id} onClose={() => console.log(i)} >
                                <ProductImage src={item.img} alt='product' />
                                <ProductBody
                                    title={item.name}
                                    description={item.description}
                                    category={{
                                        name: item.category,
                                    }}
                                    currentPrice={item.currentPrice}
                                    price={item.price}
                                >
                                    <ProductActions>
                                        <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Move to wishlist</Button>
                                    </ProductActions>
                                </ProductBody>
                            </ProductWrapper>
                        )
                    })
                    }
                </div>
                <aside className={styles.summary_container}>

                    <Summary />
                </aside>
            </div>
        </section>
    )
}

export default Basket