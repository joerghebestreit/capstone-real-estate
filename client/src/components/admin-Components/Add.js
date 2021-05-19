import "./Add.css"

export default function Add() {
    return(
        <div>
            <h4 className="headlineAdd">Add</h4>
            <div className="form">
                <label className="lableId">ID:</label>
                <input className="inputId"></input>
            </div>
            <div className="form">
                <label>City</label>
                <input></input>
                <label>Street</label>
                <input></input>
                <label>Price (€)</label>
                <input></input>
                <label>Interior (Sq. Ft.)</label>
                <input></input>
                <label>Bedrooms</label>
                <input></input>
                <label>Status</label>
                <input></input>
                <label>Year Build</label>
                <input></input>
                <label>Discription</label>
                <input></input>
                <label>option</label>
                <input></input>
            </div>
            <div className="form">
                <label>img</label>
                <input></input>
            </div>
            <button className="btnAdd">Add</button>
        </div>
    )
}