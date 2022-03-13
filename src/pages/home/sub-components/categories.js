import { categoryList } from "./data"
import styles from "../home.module.scss"
import { Image } from "react-felix-ui"
const Catagories = () => {
    return (
        categoryList.map((item, i) => {
            return (
                <a key={i} href="#" className={styles.item}>
                    <Image src={item.img} alt={item.title} />
                    <span>{item.title}</span>
                    <span>{item.count} items</span>
                </a>
            )
        })
    )
}

export default Catagories