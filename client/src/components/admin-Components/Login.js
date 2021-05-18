import Crud from "./Crud"
import { useState } from "react"

export default function Login() {
    const [password, setPassword] = useState('')

    function handleLogin(event){
    if (setPassword(event.target.value) === "jorg") {
        return(
            <Crud />
        )}else{
            alert("wrong password!")
            // reset()
        }
    }
    
    return(
        <div>
            <label>Password:</label>
            <input type="password" password={password} onChange={event => setPassword(event.target.value)}></input>
            <button type="reset" onClick={handleLogin}>Login</button>
        </div>
    )
}

