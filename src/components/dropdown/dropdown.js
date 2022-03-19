import styles from "./dropdown.module.scss"
import { Link } from "react-router-dom"
const DropDownMenu = ({ children }) => {
    return (
        <div className={styles.container}>
            <ul>
                {children}
            </ul>
        </div>
    )
}

const DropDownItem = ({ onClick, className, children }) => {
    return (
        <li className={className} onClick={onClick}>{children}</li>
    )
}

export { DropDownMenu, DropDownItem }

