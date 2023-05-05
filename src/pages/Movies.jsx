import { useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchMovies } from 'Api'

const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const HandelSubmit = (e) => {
        e.preventDefault();
        fetchMovies(query)
        .then((results)=> setMovies(results))
        setQuery('');
    }
    
    return(
        <>
        <form onSubmit={HandelSubmit}>
            <input 
                type="text"
                value={query}
                onChange={e=>setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        <ul>
            {/* {Компонент} */}
           {movies.map(({id, title}) => <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>)}
        </ul>
        </>
    )
}
export default Movies;