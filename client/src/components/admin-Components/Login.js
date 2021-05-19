import "./Login.css"
import { useState } from "react"
import {useHistory} from "react-router-dom"

export default function Login() {
    const [password, setPassword] = useState('')
    const history = useHistory();

    function handleLogin(){
        if (password === "jorg") {
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

