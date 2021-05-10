import "./Form.css"

export default function Form() {
    return(
        <div className="form">
            <p>Name</p>
            <input className="nameInput"></input>
            <p>Mail</p>
            <input className="mailInput"></input>
            <p>Message</p>
            <input className="textInput"></input>
            <div>
                <button className="btn">Submit</button>
            </div>
        </div>
    )
        
}