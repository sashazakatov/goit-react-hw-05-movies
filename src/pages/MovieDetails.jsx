import { useEffect, useState, useRef } from "react";
import { Outlet, NavLink, useParams, useLocation } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState();
    const [configuration, setConfiguration] = useState({});
    const { state } = useLocation();
    const {current} = useRef(state?.form ?? '/movies');


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=053b6502bd056126a1f9a95166dc9ace&language=en-US`)
        .then(response => response.json())
        .then(response => setMovie(response))
        
        fetch('https://api.themoviedb.org/3/configuration?api_key=053b6502bd056126a1f9a95166dc9ace')
        .then(response => response.json())
        .then(({images}) => {setConfiguration({base_url: images.base_url, size: images.poster_sizes[3]});})
    }, [movieId])
    return(
        <div>
            <NavLink to={current}>Go back</NavLink>
            <h1>{movie?.title} ({movie?.release_date.slice(0, 4)})</h1>
            <img src={`${configuration.base_url}${configuration.size}${movie?.poster_path}`} alt={movie?.title} />
            {/* <p>User Score: {movie.userScore}</p> */}
            <h2>Overview</h2>
            <p>{movie?.overview}</p>
            <h2>Genres</h2>
            <ul>
                {movie?.genres.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
            <p>Additional infoemation</p>
            <NavLink to='cast'>Cast</NavLink>
            <NavLink to='reviews'>Reviews</NavLink>
            <Outlet/>
        </div>
    )
}
export default MovieDetails;