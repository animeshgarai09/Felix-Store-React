import { useEffect, useState } from "react"
import styles from "./authentication.module.scss"
import { Input, Button } from "react-felix-ui"
import { useLocation, Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "@icons"
import bag from "@assets/images/banner-11.png"
import axios from "axios";
import { useAuth } from "../../store/providers/auth-provider";
const Authentication = () => {
    const { pathname } = useLocation()
    const [slider, setSlider] = useState(false);
    useEffect(() => {
        pathname === "/signup" ? setSlider(true) : setSlider(false)
    }, [pathname])

    const { AuthDispatcher } = useAuth()
    const SignIn = () => {
        axios.post("/api/auth/login", {
            email: 'animeshgarai09@gmail.com',
            password: 'testing1234'
        }).then((response) => {
            console.log(response.data)
            const user = response.data.foundUser
            AuthDispatcher({
                type: "SET_USER",
                payload: {
                    _id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    encodedToken: response.data.encodedToken
                }
            })
        })
    }



    return (
        <div className={styles.green_bg}>
            <section className={styles.container}>
                <img src={bag} className={styles.side_image} alt="" />

                <div className={styles.sub_container}>
                    <div className={`${styles.wrapper} ${slider ? styles.active : ""}`}>
                        <div className={styles.signin}>
                            <div className={styles.heading}>
                                <h2>Sign in</h2>
                                <Link to="/signup"><Button size="sm" variant="ghost" isRound={true} >Sign up <FaChevronRight /> </Button></Link>
                            </div>
                            <form className="form-container">
                                <Input type="text" label="Full name" />
                                <Input type="email" label="Email" />
                                <div className={styles.checkbox}>
                                    <input id="check" type="checkbox" />
                                    <label for="check">Keep me signed in</label>
                                </div>
                                <div className={styles.form_buttons}>
                                    <Button isWide={true} onClick={SignIn}>Sign in</Button>
                                    <Button theme="gray" isWide={true}>Sign in as a guest</Button>
                                    <a href="#" className="text-center"> Forgot password?</a>
                                </div>
                            </form>
                        </div>
                        <div className={styles.signup}>
                            <div className={styles.heading}>
                                <Link to="/signin"><Button size="sm" variant="ghost" isRound={true} ><FaChevronLeft /> Sign up</Button></Link>
                                <h2>Sign up</h2>
                            </div>
                            <form className="form-container">
                                <Input type="text" label="Full name" />
                                <Input type="email" label="Email" />
                                <Input type="password" label="Password" />
                                <div className={styles.checkbox}>
                                    <input id="check" type="checkbox" />
                                    <label for="check">Keep me signed in</label>
                                </div>
                                <div className={styles.form_buttons}>
                                    <Button isWide={true} >Sign Up</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Authentication