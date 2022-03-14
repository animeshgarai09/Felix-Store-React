import { productList } from "./data"
import { ProductWrapper, ProductBody, ProductActions, Button, Image } from "react-felix-ui"
import styles from "../home.module.scss"
import { MdAdd } from "@icons"

const Deals = () => {
    return (
        productList.slice(0, 4).map((item, i) => {
            return (
                <div className={styles.deals} key={item.id}>
                    <div className={styles.image_wrapper}>
                        <Image src={require(`@assets/images/banner-${5 + i}.png`)} alt="banner" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.timer}>
                            <span className={styles.timer_block}>
                                <span>150</span>
                                <span>Days</span>
                            </span>
                            <span className={styles.timer_block}>
                                <span>150</span>
                                <span>Days</span>
                            </span>
                            <span className={styles.timer_block}>
                                <span>150</span>
                                <span>Days</span>
                            </span>
                            <span className={styles.timer_block}>
                                <span>150</span>
                                <span>Days</span>
                            </span>
                        </div>
                        <ProductWrapper >
                            <ProductBody
                                title={item.name}
                                rating={item.rating}
                                currentPrice={item.currentPrice}
                                price={item.price}
                            >
                                <ProductActions>
                                    <Button size="md" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                                </ProductActions>
                            </ProductBody>
                        </ProductWrapper>
                    </div>
                </div>
            )
        })
    )
}

export default Deals