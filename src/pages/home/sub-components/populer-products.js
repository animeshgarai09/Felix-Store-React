import { productList } from "./data"
import { ProductWrapper, ProductBody, ProductImage, ProductActions, Button, IconButton } from "react-felix-ui"
import { AiOutlineHeart, MdAdd } from "@icons"

const PopularProducts = () => {
    return (
        productList.slice(0, 10).map((item, i) => {
            return (
                <ProductWrapper key={item.id}>
                    <ProductImage src={item.img} alt='product' badge={{ text: '30% Off', color: 'yellow' }} />
                    <ProductBody
                        title={item.name}
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