import "./Add.css"

export default function Add() {
    return(
        <div>
            <p>Add</p>
            <section className="textSection">
                <label>ID</label>
                <input></input>
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
                <label>Discription</label>
                <input></input>
                <label>Year Build</label>
                <input></input>
                <label>option</label>
                <input></input>
            </section>
            <section className="imgSection">
                <label>img</label>
                <input></input>
            </section>
            <button>Add</button>
        </div>
    )
}