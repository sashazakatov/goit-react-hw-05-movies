import { useState } from "react";
import PropTypes from "prop-types";

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
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    q: PropTypes.string.isRequired,
}
export default Form;