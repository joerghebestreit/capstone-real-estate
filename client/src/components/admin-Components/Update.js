import "./Update.css"

export default function Update() {
    return(
        <div className="update-content">
            <h4 className="headlineUpdate">Update</h4>
            <hr className="hrUpdate"></hr>
            <section className="sectionUpdate">
                <label className="idLabel">ID:</label>
                <input className="inputUpdate"></input>
            </section>
            <hr className="hrUpdate"></hr>
            <button className="btnUpdate">UPDATE</button>
        </div>
    )
}