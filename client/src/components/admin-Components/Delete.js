import "./Delete.css"

export default function Delete() {
    return(
        <div className="delete-content">
            <h4 className="headlineDelete">Delete</h4>
            <hr className="hrDelete"></hr>
            <section className="sectionDelete">
                <label className="idLabel">ID:</label>
                <input className="inputDelete"></input>
            </section>
            <hr className="hrDelete"></hr>
            <button className="btnDelete">CONFIRM</button>
        </div>
    )
}