import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, IconButton } from "react-felix-ui"
import { AiOutlineHeart, MdAdd } from "@icons"
import { useProducts } from "@providers/product-provider"
import { useBasket } from "@providers/basket-provider"
import { useWishlist } from "@providers/wishlist-provider"
const PopularProducts = () => {
    const productsList = useProducts()
    const { addToBasket } = useBasket()
    const { addToWishlist } = useWishlist()

    const handleAddBasket = (item) => () => {
        addToBasket(item)
    }
    return (
        productsList.slice(0, 10).map((item, i) => {
            return (
                <ProductWrapper key={item._id}>
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
                            <IconButton onClick={() => addToWishlist(item)} icon={<AiOutlineHeart />} className="like-btn" />
                            <Button onClick={() => addToBasket(item)} size="sm" variant="ghost" leftIcon={<MdAdd />}>Add</Button>
                        </ProductActions>
                    </ProductBody>
                </ProductWrapper>
            )
        })
    )
}

export default PopularProducts