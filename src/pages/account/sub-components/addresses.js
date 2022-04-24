import styles from "../account.module.scss"
import { Badge, Button, Menu, MenuButton, MenuList, MenuItem } from "react-felix-ui"
import { BsThreeDotsVertical } from "@icons"
const Addresses = () => {
    return (
        <div className={styles.addresses}>
            <div className={styles.page_header}>
                <h4>My Addresses</h4>
                <Button size="sm" variant="ghost" >Add Address</Button>
            </div>

            <div className={styles.con}>
                <div className={styles.address}>
                    <div className={styles.actions}>
                        <Badge color='primary' variant='outline' className={styles.badge}>Home</Badge>
                        <Menu menuPlacement="left-start">
                            <MenuButton as="IconButton" icon={<BsThreeDotsVertical />} className={styles.menuIcon} />
                            <MenuList className={styles.menuList}>
                                <MenuItem> Edit </MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.primary}>
                            <span>Animesh Garai</span>
                            <span>9093851314</span>
                        </div>
                        <span>A1, Sanjos Apartment, Arigant Road, Sakthi Nagar Custom Colony</span>
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.actions}>
                        <Badge color='primary' variant='outline' className={styles.badge}>Home</Badge>
                        <Menu menuPlacement="left-start">
                            <MenuButton as="IconButton" icon={<BsThreeDotsVertical />} className={styles.menuIcon} />
                            <MenuList className={styles.menuList}>
                                <MenuItem> Edit </MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.primary}>
                            <span>Animesh Garai</span>
                            <span>9093851314</span>
                        </div>
                        <span>A1, Sanjos Apartment, Arigant Road, Sakthi Nagar Custom Colony</span>
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.actions}>
                        <Badge color='primary' variant='outline' className={styles.badge}>Home</Badge>
                        <Menu menuPlacement="left-start">
                            <MenuButton as="IconButton" icon={<BsThreeDotsVertical />} className={styles.menuIcon} />
                            <MenuList className={styles.menuList}>
                                <MenuItem> Edit </MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.primary}>
                            <span>Animesh Garai</span>
                            <span>9093851314</span>
                        </div>
                        <span>A1, Sanjos Apartment, Arigant Road, Sakthi Nagar Custom Colony</span>
                    </div>
                </div>
                <div className={styles.address}>
                    <div className={styles.actions}>
                        <Badge color='primary' variant='outline' className={styles.badge}>Home</Badge>
                        <Menu menuPlacement="left-start">
                            <MenuButton as="IconButton" icon={<BsThreeDotsVertical />} className={styles.menuIcon} />
                            <MenuList className={styles.menuList}>
                                <MenuItem> Edit </MenuItem>
                                <MenuItem>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.primary}>
                            <span>Animesh Garai</span>
                            <span>9093851314</span>
                        </div>
                        <span>A1, Sanjos Apartment, Arigant Road, Sakthi Nagar Custom Colony</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses