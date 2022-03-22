import styles from "../shop.module.scss"
import { genKey } from "@global/js"
import { useProducts } from "@providers/product-provider"

const Categories = () => {
    const { categories } = useProducts()
    console.log(categories)
    return (
        <div className={`${styles.side} ${styles.category_container}`}>
            <h5>Categories</h5>
            {categories.map(({ categoryName, productCount, _id }) => {
                return <Checkbox key={_id} value={categoryName} count={productCount} />
            })
            }
        </div>
    )
}

const Checkbox = ({ value, count }) => {
    const id = genKey()
    return (
        <>
            <input type="checkbox" value={value} id={id} />
            <label htmlFor={id} >
                <span className={`${styles.category} ${styles.selected}`}>{value}</span>
                <span className={styles.count}>{count}</span>
            </label>
        </>
    )
}

export default Categories