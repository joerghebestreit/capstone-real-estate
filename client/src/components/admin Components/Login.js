import Crud from "./Crud"
import "./Login.css"
import { useState } from "react"

export default function Login(event) {
    const [password, setPassword] = useState('')
    if (event.target.value === "jorg") {
        return(
            // reset();
            <Crud />
        )}else{
            alert("wrong password!")
        }
    
    return(
        <div>
            <label>Password:</label>
            <input onChange={event => setPassword(event.target.value)}></input>
            <button>Login</button>
        </div>
    )
}