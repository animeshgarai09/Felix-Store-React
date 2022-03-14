import styles from "./home.module.scss"
import { Helmet } from "react-helmet"
import { Slider } from "@components"
import { List, ListItem, Button } from "react-felix-ui"
import Features from "./sub-components/features"
import Categories from "./sub-components/categories"
import PopularProducts from "./sub-components/populer-products"
import Deals from "./sub-components/deals"

const Home = () => {
    return (
        <div className={styles.landing}>
            <Helmet>
                <title>Home | Felix Store</title>
            </Helmet>

            <section>
                <Slider />
            </section>
            <section>
                <div className={styles.feature_container}>
                    <Features />
                </div>
            </section>
            <section>
                <h2 className="text-center">Featured Categories</h2>
                <div className={styles.category}>
                    <Categories />
                </div>
            </section>
            <section>
                <div className={styles.section_title}>
                    <h2>Popular products</h2>
                    <List orientation="horizontal" className="nav list-style-none" role="tablist">
                        <ListItem className="nav-item" role="presentation">
                            <Button variant="link" size="sm" type="Button" role="tab">All</Button>
                        </ListItem>
                        <ListItem className="nav-item" role="presentation">
                            <Button variant="link" size="sm" type="Button" role="tab">Vegetables</Button>
                        </ListItem>
                        <ListItem className="nav-item" role="presentation">
                            <Button variant="link" size="sm" type="Button" role="tab">Fruits</Button>
                        </ListItem>
                        <ListItem className="nav-item" role="presentation">
                            <Button variant="link" size="sm" type="Button" role="tab">Plants</Button>
                        </ListItem>
                        <ListItem className="nav-item" role="presentation">
                            <Button variant="link" size="sm" type="Button" role="tab">Organic products</Button>
                        </ListItem>
                        <ListItem className="nav-item" role="presentation">
                            <Button variant="link" size="sm" type="Button" role="tab">Groceries</Button>
                        </ListItem>
                    </List>
                </div>
                <div className={styles.product_container}>
                    <PopularProducts />
                </div>
            </section>
            <section>
                <div className={styles.section_title}>
                    <h2>Deals of the day</h2>
                </div>
                <div className={styles.deals_container}>
                    <Deals />
                </div>
            </section>

            <section>
                <div className={styles.newsletter}>
                    <div className={styles.content}>
                        <h1>
                            Stay home & get your daily
                            <br />
                            needs from our shop
                        </h1>
                        <p>Subscribe to get the latest offer notified to you</p>
                        <form className={styles.newsletter_form}>
                            <input type="text" placeholder="Your email address" />
                            <Button size="lg" variant="round" isTransform={false}>Subscribe</Button>
                        </form>
                    </div>
                    <img src={require("@assets/images/banner-9.png")} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Home