import Crud from "./Crud"
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
        <div>
            <label>Password:</label>
            <input type="password" password={password} onChange={event => setPassword(event.target.value)}></input>
            <button type="reset" onClick={handleLogin}>Login</button>
        </div>
    )
}

