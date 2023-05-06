import { useState } from "react";

const Form = ({onSubmit, q}) =>{
    const [query, setQuery] = useState(q);

    const handelSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    }

    return(
        <form onSubmit={handelSubmit}>
            <input 
                type="text"
                value={query}
                onChange={e=>setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}
export default Form;