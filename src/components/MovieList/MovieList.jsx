import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({movies}) => {
    const location = useLocation();
    return(
        <ul>
           {movies.map(({id, title}) => <li key={id}><NavLink to={`/movies/${id}`} state={{from: location}}>{title}</NavLink></li>)}
        </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default MovieList;