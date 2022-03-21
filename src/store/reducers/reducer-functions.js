
export const productCountByCategory = (products, categories) => {
    for (let i = 0; i < categories.length; i++) {
        const productCount = products.reduce((prev, current) => {
            return current.category === categories[i].categoryName ? prev + 1 : prev
        }, 0)
        categories[i].productCount = productCount
    }
    return categories
}