import styles from "../basket.module.scss"
import { Button } from "react-felix-ui"
import { IoMdPricetag } from "@icons"

const Summary = () => {
    return (
        <>
            <div className={`${styles.coupon_container} text-w-500`}>
                <span><IoMdPricetag />Apply Coupon</span>
                <Button size="sm" variant="outline" isTransform={false}>Apply</Button>

            </div>
            <h6>Price Details (2 Items)</h6>
            <div className={styles.order}>
                <div className={styles.breakup}>
                    <div className={styles.item}>
                        <span>Total MRP</span>
                        <span>2000</span>
                    </div>
                    <div className={styles.item}>
                        <span>Discounted on MRP</span>
                        <span className="text-success">-1000</span>
                    </div>
                    <div className={styles.item}>
                        <span>Coupon Discount</span>
                        <span>2000</span>
                    </div>
                    <div className={styles.item}>
                        <span>Delivery Charges</span>
                        <span className="text-success">Free</span>
                    </div>
                </div>
                <div className={`${styles.item} text-w-600`}>
                    <span>Total Amount</span>
                    <span>1500</span>
                </div>
            </div>
            <Button size="md" isWide={true}>Place your order</Button>
        </>
    )
}

export default Summary