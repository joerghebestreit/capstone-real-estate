import "./Add.css"

export default function Add() {
    return(
        <div>
            <h4 className="headlineAdd">Add</h4>
            <div className="formAdd">
                <label className="lableId">ID:</label>
                <input className="inputId"></input>
            </div>
            <div className="formAdd">
                <label>City</label>
                <input className="inputAdd"></input>
                <label>Street</label>
                <input className="inputAdd"></input>
                <label>Price (€)</label>
                <input className="inputAdd"></input>
                <label>Interior (Sq. Ft.)</label>
                <input className="inputAdd"></input>
                <label>Bedrooms</label>
                <input className="inputAdd"></input>
                <label>Status</label>
                <input className="inputAdd"></input>
                <label>Year Build</label>
                <input className="inputAdd"></input>
                <label>Discription</label>
                <input className="inputAdd"></input>
                <label>option</label>
                <input className="inputAdd"></input>
            </div>
            <div className="formAdd">
                <label>img</label>
                <input className="inputAdd"></input>
            </div>
            <button className="btnAdd">Add</button>
        </div>
    )
}