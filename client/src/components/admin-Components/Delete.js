import "./Delete.css"
import { useState } from "react"

export default function Delete() {
    const [idValue, setIdValue] = useState("")

    function handleDelete(event){
        event.preventDefault()
        const url = `${process.env.REACT_APP_API_BASE_URL}/properties/${idValue}`;
        
        fetch(url, {
            method: `DELETE`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .catch((error) => {
            console.error(`Error: ${error}`);
        alert("Seccessfully Deleted")
        })
    }

    return(
        <form className="delete-content">
            <h4 className="headlineDelete">Delete</h4>
            <hr className="hrDelete"></hr>
            <section className="sectionDelete">
                <label className="idLabel">ID:</label>
                <input className="inputDelete" value={idValue} onChange={event => setIdValue(event.target.value)}></input>
            </section>
            <hr className="hrDelete"></hr>
            <button type="submit" className="btnDelete" onClick={handleDelete}>CONFIRM</button>
        </form>
    )
}