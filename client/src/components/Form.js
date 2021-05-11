import "./Form.css"
import { useState, useEffect } from "react"

export default function Form() {
    
    
    const [valueName, setValueName] = useState(
        localStorage.getItem("Name") || ""
        );
        useEffect (() => {  
            localStorage.setItem("Name", JSON.stringify(valueName))
        }, [valueName])
    const onChangeName = event => setValueName(event.target.value)
        
        
    const [valueMail, setValueMail] = useState(
        localStorage.getItem("Mail") || ""
        );
        useEffect (() => {
            localStorage.setItem("Mail", valueMail)
        }, [valueMail])
    const onChangeMail = event => setValueMail(event.target.value)
            
            
    const [valueMessage, setValueMessage] = useState(
        localStorage.getItem("Message") || ""
        );
        useEffect (() => {
            localStorage.setItem("Message", valueMessage)
        }, [valueMessage])
    const onChangeMessage = event => setValueMessage(event.target.value)


    // function onSubmit(event) {
    //     event.preventDefault();
    //     alert('successfully submitted');
    // }

                    
    return(
        <div className="form">
            <form>
                <label>Name</label>
                <input valueName={valueName} onChange={onChangeName} type="text" className="nameInput"></input>
                <label>Mail</label>
                <input valueMail={valueMail} onChange={onChangeMail} type="text" className="mailInput"></input>
                <label>Message</label>
                <textarea valueMessage={valueMessage} onChange={onChangeMessage} type="text" className="textInput"></textarea>
                <div>
                    <button type="reset" className="btn">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}