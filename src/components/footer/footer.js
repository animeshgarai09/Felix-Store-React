import styles from "./footer.module.scss"
import { ReactComponent as Logo } from '@assets/svg/logo.svg'

import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillHeart,
    BiMap,
    IoLogoLinkedin,
    IoIosCall,
    HiMail
} from "@icons"
const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={`${styles.footer_item} ${styles.brand}`}>
                <a href="/"> <Logo className={styles.logo} alt="felix logo" /></a>
                <span>Your one stop organic grocery store</span>
                <span>© 2021, All rights reserved</span>
                <span>Made with <AiFillHeart /> by <a href="https://animesh-designs.vercel.app/" className="text-warning"> Animesh Garai</a> </span>
                <div className="footer__links">
                    <a href="https://github.com/animeshgarai09"><AiFillGithub /></a>
                    <a href="https://twitter.com/animeshgarai09"><AiFillTwitterCircle /></a>
                    <a href="https://www.linkedin.com/in/animesh-garai-29a5251b4"><IoLogoLinkedin /></a>
                    <a href="mailto:animeshgarai09@gmail.com"><HiMail /></a>
                </div>
            </div>

            <div className={styles.footer_item}>
                <h5>Categories</h5>
                <ul className="links list-style-none">
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruits</a></li>
                    <li><a href="#">Organic Products</a></li>
                    <li><a href="#">Plants</a></li>
                    <li><a href="#">Groceries</a></li>
                </ul>
            </div>
            <div className={styles.footer_item}>
                <h5>Account</h5>
                <ul className="links list-style-none">
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">View Basket</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className={`${styles.footer_item} ${styles.info}`}>
                <h5>Contact Us</h5>
                <ul className="links list-style-none">
                    <li><BiMap /> <span><span>Location: </span> Gpoinathpur, Kolkata West Bengal - 722101</span></li>
                    <li><IoIosCall /><span><span>Call Us: </span>+91 0000 000000</span></li>
                    <li><HiMail /><span><span>Email: </span>animeshgarai09@gmail.com</span></li>
                    <li>Always here to serve your needs</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer 