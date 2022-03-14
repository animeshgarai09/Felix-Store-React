import styles from "./header.module.scss"
import { IconButton, List, ListItem } from "react-felix-ui"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from '@assets/svg/logo.svg'
import {
    AiFillShop,
    AiFillGithub,
    AiFillTwitterCircle,
    BiSearch,
    RiShoppingBasket2Fill,
    RiHeartAddFill,
    RiUser6Fill,
    IoLogoLinkedin,
    HiMail
} from "@icons"
const Header = () => {
    return (
        <>
            <div className={styles.sub_header}>
                <div className="left">
                    <a href="#">About Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Order Tracking</a>
                    <a href="#">Order tracking</a>
                </div>
                <div className="right">
                    <span>Need help? Call Us: 0000 000000</span>
                    <a href="#">Contact Us</a>
                    <a href="https://github.com/animeshgarai09"><AiFillGithub /></a>
                    <a href="https://twitter.com/animeshgarai09"><AiFillTwitterCircle /></a>
                    <a href="https://www.linkedin.com/in/animesh-garai-29a5251b4"><IoLogoLinkedin /></a>
                    <a href="mailto:animeshgarai09@gmail.com"><HiMail /></a>
                </div>
            </div>
            <header className={styles.container}>
                <div className={styles.wrapper}>
                    <Link to="/"> <Logo className={styles.logo} alt="felix logo" /></Link>
                    <div className={styles.sub_wrapper}>
                        <div className={styles.search__container}>
                            <select name="cars" id="cars">
                                <option value="volvo">All Category</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <input type="text" placeholder="Search for item..." />
                            <BiSearch />
                        </div>
                        <nav className={styles.links}>
                            <List orientation="horizontal" className={styles.gap}>
                                <ListItem>
                                    <Link to="/shop" className={styles.link}>
                                        <IconButton icon={<AiFillShop />} className={styles.icon} />
                                        Shop
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/wishlist" className={styles.link}>
                                        <IconButton icon={<RiHeartAddFill />} className={styles.icon} />
                                        Wishlist
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/basket" className={styles.link}>
                                        <IconButton icon={<RiShoppingBasket2Fill />} className={styles.icon} showBadge={true} badgeNumber={5} />
                                        Basket
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/signin" className={styles.link}>
                                        <IconButton icon={<RiUser6Fill />} className={styles.icon} />
                                        Account
                                    </Link>
                                </ListItem>
                            </List>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header