import styles from "../account.module.scss"
import { Button } from "react-felix-ui"
const Details = () => {
    return (
        <div className={styles.details}>
            <div className={styles.page_header}>
                <h4>Account Details</h4>
                <div className={styles.actions}>
                    <Button size="sm" variant="ghost">Change Password</Button>
                    <Button size="sm" variant="ghost">Edit Details</Button>
                </div>
            </div>

            <div className={styles.item}>
                <h5>Personal Information</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Full Name</td>
                            <td>Animesh Garai</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>Pune</td>
                        </tr>
                        <tr>
                            <td>Joined On</td>
                            <td>12 August 2020</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.item}>
                <h5>Contact Information</h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Mobile Number</td>
                            <td>9800980098</td>
                        </tr>
                        <tr>
                            <td>Email ID</td>
                            <td>testing@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Details