import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

import { Item } from './Movie.styled'

const MovieList = ({movies}) => {
    const location = useLocation();
    return(
        <ul>
           {movies.map(({id, title}) => <Item key={id}><NavLink to={`/movies/${id}`} state={{from: location}}>{title}</NavLink></Item>)}
        </ul>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default MovieList;