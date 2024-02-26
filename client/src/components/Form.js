import "./Form.css"
import { useState, useEffect } from "react"

export default function Form() {
    
    
    const [valuename, setvaluename] = useState(
        localStorage.getItem("Name") || ""
        );
        useEffect (() => {  
            localStorage.setItem("Name", valuename)
        }, [valuename])
    const onChangeName = event => setvaluename(event.target.value)
        
        
    const [valuemail, setvaluemail] = useState(
        localStorage.getItem("Mail") || ""
        );
        useEffect (() => {
            localStorage.setItem("Mail", valuemail)
        }, [valuemail])
    const onChangeMail = event => setvaluemail(event.target.value)
            
            
    const [valuemessage, setvaluemessage] = useState(
        localStorage.getItem("Message") || ""
        );
        useEffect (() => {
            localStorage.setItem("Message", valuemessage)
        }, [valuemessage])
    const onChangeMessage = event => setvaluemessage(event.target.value)


    // function onSubmit(event) {
    //     event.preventDefault();
    //     alert('successfully submitted');
    // }

                    
    return(
        <div className="form">
            <form>
                <label>Name</label>
                <input valuename={valuename} onChange={onChangeName} type="text" className="nameInput"></input>
                <label>Mail</label>
                <input valuemail={valuemail} onChange={onChangeMail} type="text" className="mailInput"></input>
                <label>Message</label>
                <textarea valuemessage={valuemessage} onChange={onChangeMessage} type="text" className="textInput"></textarea>
                <div>
                    <button type="reset" className="btn">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}