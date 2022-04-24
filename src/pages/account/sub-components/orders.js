import styles from "../account.module.scss"
import { Image, Button } from "react-felix-ui"
const Orders = () => {
    return (
        <div className={styles.orders}>
            <div className={styles.page_header}>
                <h4>My Orders</h4>
                <p>All the order placed by you is listed here.</p>
            </div>
            <div className={styles.item}>
                <div className={styles.item_info}>
                    <span>Order : 76wv8-67wf8-hggh</span>
                    <div>
                        <span>Placed on : 12 July 2020</span>
                        <span className={styles.total}>Total : <span> ₹ 1047</span></span>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.image}>
                        <Image src={require(`@assets/images/fruits/avocado.jpeg`)} />
                    </div>
                    <div className={styles.info}>
                        <a href="#" className={styles.name}>Broccoli - Exotic - 250 g</a>
                        <div>
                            <span className={styles.price}>Rs. 250</span>
                            <span className={styles.qty}>Quantity : 4</span>
                        </div>
                    </div>
                    <Button size="sm" color="warning" variant="ghost">Buy again</Button>
                </div>
                <div className={styles.product}>
                    <div className={styles.image}>
                        <Image src={require(`@assets/images/fruits/avocado.jpeg`)} />
                    </div>
                    <div className={styles.info}>
                        <a href="#" className={styles.name}>Broccoli - Exotic - 250 g</a>
                        <div>
                            <span className={styles.price}>Rs. 250</span>
                            <span className={styles.qty}>Quantity : 4</span>
                        </div>
                    </div>
                    <Button size="sm" color="warning" variant="ghost">Buy again</Button>
                </div>
                <div className={styles.product}>
                    <div className={styles.image}>
                        <Image src={require(`@assets/images/fruits/avocado.jpeg`)} />
                    </div>
                    <div className={styles.info}>
                        <a href="#" className={styles.name}>Broccoli - Exotic - 250 g</a>
                        <div>
                            <span className={styles.price}>Rs. 250</span>
                            <span className={styles.qty}>Quantity : 4</span>
                        </div>
                    </div>
                    <Button size="sm" color="warning" variant="ghost">Buy again</Button>
                </div>
                <div className={styles.product}>
                    <div className={styles.image}>
                        <Image src={require(`@assets/images/fruits/avocado.jpeg`)} />
                    </div>
                    <div className={styles.info}>
                        <a href="#" className={styles.name}>Broccoli - Exotic - 250 g</a>
                        <div>
                            <span className={styles.price}>Rs. 250</span>
                            <span className={styles.qty}>Quantity : 4</span>
                        </div>
                    </div>
                    <Button size="sm" color="warning" variant="ghost">Buy again</Button>
                </div>

            </div>


        </div>
    )
}

export default Orders