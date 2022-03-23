import styles from "../home.module.scss"
import { Image } from "react-felix-ui"
import { useProducts } from "@providers/product-provider"

const Catagories = () => {
    const { categories } = useProducts()
    return (
        categories.map((item, i) => {
            return (
                <a key={i} href="#" className={styles.item}>
                    <Image src={require(`@assets/images/${item?.img}`)} alt={item.categoryName} className={styles.image} />
                    <span>{item.categoryName}</span>
                    <span>{item.productCount} items</span>
                </a>
            )
        })
    )
}

export default Catagories