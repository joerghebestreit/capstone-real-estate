import "./Login.css"
import { useState } from "react"
import {useHistory} from "react-router-dom"

export default function Login() {
    const [password, setPassword] = useState('')
    const history = useHistory();
    const loginPassword = `${process.env.REACT_APP_lOGIN}`

    function handleLogin(){
        if (password === "jorg123") {
            return(
                history.push("/crud")
            )}else{
                alert("wrong password!")
            }
    }
    
    return(
        <div className="login-content">
            <section className="fields">
                <label className="passwordLabel">Password:</label>
                <div>
                    <input className="passwordInput" type="password" password={password} onChange={event => setPassword(event.target.value)}></input>
                    <button className="loginBtn" type="reset" onClick={handleLogin}>Login</button>
                </div>
            </section>
        </div>
    )
}