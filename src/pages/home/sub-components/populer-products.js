import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, IconButton } from "react-felix-ui"
import { AiOutlineHeart, MdAdd } from "@icons"
import { useProducts } from "../../../store/providers/product-provider"
const PopularProducts = () => {
    const productsList = useProducts()
    console.log(productsList)
    return (
        productsList.slice(0, 10).map((item, i) => {
            return (
                <ProductWrapper key={item.id}>
                    <ProductImage src={require(`@assets/images/${item.img}`)} alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title={item.title}
                        description={item.description}
                        category={{
                            name: item.category,
                        }}
                        vendor={{
                            name: item.vendor,
                        }}
                        rating={item.rating}
                        currentPrice={item.currentPrice}
                        price={item.price}
                    >
                        <ProductActions>
                            <IconButton icon={<AiOutlineHeart />} className="like-btn" />
                            <Button size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
            )
        })
    )
}

export default PopularProducts