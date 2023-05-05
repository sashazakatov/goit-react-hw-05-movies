import { useState } from "react";
import { NavLink } from "react-router-dom";
const Movies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const HandelSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=053b6502bd056126a1f9a95166dc9ace&query=${query}&include_adult=false`)
        .then(response => response.json())
        .then(({results})=> setMovies(results))
        .finally(() => setQuery(''));
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
           {movies.map(({id, title}) => <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>)} 
        </ul>
        </>
    )
}
export default Movies;