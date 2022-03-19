import styles from "./wishlist.module.scss"
import { productList } from "../home/sub-components/data"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button } from "react-felix-ui"
import { MdAdd } from "@icons"

const Wishlist = () => {
    return (
        <div className={styles.container}>
            <section>
                <h3>My Wishlist</h3>
                <p>You have 3 items in wishlist</p>
                <div className={styles.wrapper}>
                    {productList.slice(0, 5).map((item, i) => {
                        return (
                            <ProductWrapper key={item.id}>
                                <ProductImage src={item.img} alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                                <ProductBody
                                    title={item.name}
                                    category={{
                                        name: item.category,
                                    }}
                                    currentPrice={item.currentPrice}
                                    price={item.price}
                                >
                                    <ProductActions newLine={true}>
                                        <Button size="md" variant="ghost" isWide={true} leftIcon={<MdAdd />}>Move to basket</Button>
                                    </ProductActions>
                                </ProductBody>
                            </ProductWrapper>
                        )
                    })
                    }
                </div>
            </section>
        </div>
    )
}

export default Wishlist