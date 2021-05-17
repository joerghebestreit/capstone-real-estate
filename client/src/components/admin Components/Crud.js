import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";


export default function Crud() {
    return(
        <div>
            <button onClick={Add}>Add</button>
            <button onClick={Delete}>Delete</button>
            <button onClick={Update}>Update</button>
        </div>
    )
}