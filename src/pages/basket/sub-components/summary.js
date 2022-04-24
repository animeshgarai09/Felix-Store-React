import styles from "../basket.module.scss"
import { Button } from "react-felix-ui"
import { IoMdPricetag } from "@icons"
import { useBasket } from "@providers/basket-provider"
import { useState, useEffect } from "react"

const Summary = ({ itemCount }) => {
    const { BasketState } = useBasket()
    const [MRP, setMRP] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const mrp = BasketState.reduce((prev, current) => parseInt(prev) + (parseInt(current.price) * current.qty), 0)
        const total = BasketState.reduce((prev, current) => parseInt(prev) + (parseInt(current.currentPrice) * current.qty), 0)
        const discount = mrp - total

        setMRP(mrp)
        setDiscount(discount)
        setTotal(total)
    }, [BasketState])

    return (
        <>
            <div className={`${styles.coupon_container} text-w-500`}>
                <span><IoMdPricetag />Apply Coupon</span>
                <Button size="sm" variant="outline" isTransform={false}>Apply</Button>
            </div>
            <h6>Price Details ({itemCount} Items)</h6>
            <div className={styles.order}>
                <div className={styles.breakup}>
                    <div className={styles.item}>
                        <span>Total MRP</span>
                        <span>{MRP}</span>
                    </div>
                    <div className={styles.item}>
                        <span>Discounted on MRP</span>
                        <span className="text-success">{discount}</span>
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
                    <span>{total}</span>
                </div>
            </div>
            <Button size="md" isWide={true}>Place your order</Button>
            <div className={styles.save_offer}>
                <p>You will save <span>Rs.250</span> from the regular market price</p>
            </div>
        </>
    )
}

export default Summary