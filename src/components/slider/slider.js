import styles from "./slider.module.scss"
import { FaChevronRight, FaChevronLeft } from "@icons"
import { Button } from "react-felix-ui"
import { Link } from "react-router-dom"
const Slider = () => {
    return (
        <div className={styles.container}>
            <span className={`${styles.icon} ${styles.left}`}><FaChevronLeft /></span>
            <div className={styles.content}>
                <h1>
                    Fresh Vegetables <br />
                    Big discount
                </h1>
                <p>Save 50% on your first purchase</p>
                <Link to="/shop"> <Button size="lg">Shop now</Button></Link>
            </div>
            <span className={`${styles.icon} ${styles.right}`}><FaChevronRight /></span>
        </div>
    )
}

export default Slider