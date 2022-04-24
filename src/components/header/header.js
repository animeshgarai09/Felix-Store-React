import { useState } from "react"
import styles from "./header.module.scss"
import { IconButton, List, ListItem, Avatar } from "react-felix-ui"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as Logo } from '@assets/svg/logo.svg'
import { useAuth } from "@providers/auth-provider"
import { useBasket } from "@providers/basket-provider"
import { useWishlist } from "@providers/wishlist-provider"
import { useClickOutside } from '@mantine/hooks';

import { DropDownMenu, DropDownItem } from "../dropdown/dropdown"
import {
    AiFillShop,
    AiFillGithub,
    AiFillTwitterCircle,
    BiSearch,
    RiShoppingBasket2Fill,
    RiHeartAddFill,
    RiUser6Fill,
    IoLogoLinkedin,
    HiMail,
    MdPowerSettingsNew
} from "@icons"


const Header = () => {
    const { UserState, AuthDispatcher } = useAuth();
    const { BasketState, setBasketState } = useBasket()
    const { WishlistState, setWishlistState } = useWishlist()
    const [dropdown, setDropdown] = useState(false)
    const dropdownRef = useClickOutside(() => setDropdown(false))
    const hideDropDown = () => setDropdown(false)
    const navigate = useNavigate()

    const logout = () => {
        AuthDispatcher({
            type: "REMOVE_USER"
        })
        setBasketState([])
        setWishlistState([])
        navigate("/")
    }

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
                                        <IconButton icon={<RiHeartAddFill />} className={styles.icon} showBadge={WishlistState.length !== 0} badgeNumber={WishlistState.length} />
                                        Wishlist
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to="/basket" className={styles.link}>
                                        <IconButton icon={<RiShoppingBasket2Fill />} className={styles.icon} showBadge={BasketState.length !== 0} badgeNumber={BasketState.length} />
                                        Basket
                                    </Link>
                                </ListItem>
                                <ListItem className={styles.dropdownNav}>
                                    <span className={styles.link} onClick={() => setDropdown(state => !state)}>
                                        {UserState._id !== ""
                                            ? <Avatar size="sm" name={UserState.name} className={styles.avatar} />
                                            : <IconButton icon={<RiUser6Fill />} className={styles.icon} />
                                        }
                                        Account
                                    </span>
                                    {UserState._id && dropdown && <DropDownMenu ref={dropdownRef} >
                                        <Link to="/account"><DropDownItem onClick={hideDropDown}><RiUser6Fill />My Account</DropDownItem></Link>
                                        <DropDownItem onClick={() => { logout(); hideDropDown(); }} className={styles.logout}><MdPowerSettingsNew />Sign out</DropDownItem>
                                    </DropDownMenu>
                                    }
                                    {!UserState._id && dropdown && <DropDownMenu ref={dropdownRef}>
                                        <Link to="/signin"><DropDownItem onClick={hideDropDown}>Sign In</DropDownItem></Link>
                                        <Link to="/signup"><DropDownItem onClick={hideDropDown}>Sign Up</DropDownItem></Link>
                                    </DropDownMenu>
                                    }
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