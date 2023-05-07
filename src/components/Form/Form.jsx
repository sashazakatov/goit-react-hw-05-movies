import { useState } from "react";
import PropTypes from "prop-types";

import { FormButton, Forminput} from './Form.styled'

const Form = ({onSubmit, q}) =>{
    const [query, setQuery] = useState(q);

    const handelSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    }

    return(
        <form onSubmit={handelSubmit}>
            <Forminput 
                type="text"
                value={query}
                onChange={e=>setQuery(e.target.value)}
            />
            <FormButton type="submit">Search</FormButton>
        </form>
    )
}
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    q: PropTypes.string.isRequired,
}
export default Form;