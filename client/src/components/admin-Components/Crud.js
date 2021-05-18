import { NavLink } from "react-router-dom";

export default function Crud() {
    return(
        <div>
            <NavLink to="/add">Add</NavLink>
            <NavLink to="/update">Update</NavLink>
            <NavLink to="/delete">Delete</NavLink>
        </div>
    )
}