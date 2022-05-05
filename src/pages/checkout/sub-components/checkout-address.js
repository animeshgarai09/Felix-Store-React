import styles from "../checkout.module.scss"
import { Button } from "react-felix-ui"
import Addresses from "../../account/sub-components/addresses"
import { useState } from "react"

const CheckoutAddress = () => {

    const [isModalOpen, setModalState] = useState(false)
    return (
        <>
            <div className={styles.item_container}>
                <div className={styles.info}>
                    <div>
                        <h3>Select delivery address</h3>
                        <p>Choose address to where you want the items to be delivered.</p>
                    </div>
                    <Button size="sm" onClick={() => setModalState(true)} variant="outline" isRound={true} isTransform={false} >Add new address</Button>
                </div>
                <div className={styles.items_wrapper}>
                    <Addresses outerModalTriggerState={isModalOpen} setOuterModalTrigger={setModalState} />
                </div>
            </div>
        </>
    )
}

export default CheckoutAddress