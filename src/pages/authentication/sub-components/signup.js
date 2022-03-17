import styles from "../authentication.module.scss"
import { Input, Button } from "react-felix-ui"
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft } from "@icons"
import axios from "axios";
import { useAuth } from "@providers/auth-provider"
import { useToast } from "react-felix-ui"
import { useInputHandler } from "@hooks"
import { useState } from "react"

const Signup = ({ signUpRef }) => {

    const toast = useToast()
    const navigate = useNavigate()
    const { AuthDispatcher } = useAuth()
    const [btnState, setBtnState] = useState(false)

    const { inputState, inputChange } = useInputHandler({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setBtnState(true)
        axios.post("/api/auth/signup", {
            fullName: inputState.name,
            email: inputState.email,
            password: inputState.password
        }).then((response) => {
            const user = response.data.createdUser
            toast({
                status: "success",
                message: `Hey ${user.fullName.split(" ")[0]} ! Checkout fresh groceries.`,
                duration: 2
            })
            setTimeout(() => {
                navigate("/")
                AuthDispatcher({
                    type: "SET_USER",
                    payload: {
                        _id: user.id,
                        name: user.fullName,
                        email: user.email,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt,
                        encodedToken: response.data.encodedToken
                    }
                })
            }, 1000)
        }).catch((err) => {
            console.log(err)
            setBtnState(false)
            toast({
                status: "error",
                message: `Invalid email & password !`,
            })
        })
    }

    return (
        <div className={styles.signup}>
            <div className={styles.heading}>
                <Link to="/signin"><Button size="sm" variant="ghost" isRound={true} isTransform={false} ><FaChevronLeft /> Sign up</Button></Link>
                <h2>Sign up</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="Full name" name="name" value={inputState.name} onChange={inputChange} Fref={signUpRef} />
                <Input type="email" label="Email" name="email" value={inputState.email} onChange={inputChange} />
                <Input type="password" label="Password" name="password" value={inputState.password} onChange={inputChange} />
                <div className={styles.checkbox}>
                    <input id="check" type="checkbox" />
                    <label for="check">Keep me signed in</label>
                </div>
                <div className={styles.form_buttons}>
                    <Button type="submit" isWide={true} isTransform={false} isLoading={btnState} >Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default Signup