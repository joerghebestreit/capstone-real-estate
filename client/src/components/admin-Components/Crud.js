import { NavLink } from "react-router-dom";
import "./Crud.css"

export default function Crud() {
    return(
        <div>
            <section className="crud-content">
                <NavLink className="navLinkAdd" to="/add">Add</NavLink>
                <NavLink className="navLinkUpdate" to="/update">Update</NavLink>
                <NavLink className="navLinkDelete"to="/delete">Delete</NavLink>
            </section>
        </div>
    )
}