
import styles from "../authentication.module.scss"
import { Input, Button } from "react-felix-ui"
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronRight } from "@icons"
import axios from "axios";
import { useAuth } from "@providers/auth-provider"
import { useToast } from "react-felix-ui"
import { useInputHandler } from "@hooks"
import { useState } from "react"

const Signin = ({ signInRef }) => {

    const toast = useToast()
    const navigate = useNavigate()
    const { AuthDispatcher } = useAuth()
    const [btnState, setBtnState] = useState(false)

    const { inputState, inputChange } = useInputHandler({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setBtnState(true)
        axios.post("/api/auth/login", {
            email: inputState.email,
            password: inputState.password
        }).then((response) => {
            const user = response.data.foundUser
            toast({
                status: "success",
                message: `Hey ${user.fullName}! Checkout fresh groceries.`,
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
            setBtnState(false)
            toast({
                status: "error",
                message: `Invalid email & password !`,
            })
        })
    }

    return (
        <div className={styles.signin}>
            <div className={styles.heading}>
                <h2>Sign in</h2>
                <Link to="/signup"><Button size="sm" variant="ghost" isRound={true} isTransform={false} >Sign up <FaChevronRight /> </Button></Link>
            </div>
            <form onSubmit={handleSubmit}>
                <Input type="email" label="Email" name="email" value={inputState.email} Fref={signInRef} onChange={inputChange} />
                <Input type="password" label="Password" name="password" value={inputState.password} onChange={inputChange} />
                <div className={styles.checkbox}>
                    <input id="check" type="checkbox" />
                    <label for="check">Keep me signed in</label>
                </div>
                <div className={styles.form_buttons}>
                    <Button type="submit" isWide={true} isTransform={false} isLoading={btnState}>Sign in</Button>
                    <Button theme="gray" isWide={true} isTransform={false}>Sign in as a guest</Button>
                    <a href="#" className="text-center"> Forgot password?</a>
                </div>
            </form>
        </div>
    )
}

export default Signin