import { useEffect, useState, useRef } from "react";
import { Outlet, NavLink, useParams, useLocation } from "react-router-dom";
import { fetchСonfiguration, fetchMovieDetails } from 'Api';
import { sizeImages } from 'options/sizeImage';
import Movie from "components/Movie";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState();
    const baseUrl = useRef();
    const imageSize = useRef();
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies'; 

    useEffect(()=>{
        fetchMovieDetails(movieId)
        .then(({title, release_date, poster_path, overview, genres}) => 
            setMovie({title, release_date, poster_path, overview, genres})
        );

        fetchСonfiguration()
        .then(({backdrop_sizes, base_url}) => {
            baseUrl.current = base_url; 
            imageSize.current = backdrop_sizes[sizeImages.SMALLEST];
        });
    }, [movieId])

    return(
        <section>
            <NavLink to={backLink}>Go back</NavLink>
            {/* <h1>{movie?.title} ({movie?.release_date.slice(0, 4)})</h1>
            <img src={`${baseUrl.current}${imageSize.current}${movie?.poster_path}`} alt={movie?.title} />
            {/* <p>User Score: {movie.userScore}</p> */}
            {/* <h2>Overview</h2>
            <p>{movie?.overview}</p>
            <h2>Genres</h2>
            <ul>
                {movie?.genres.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul> */}
            <Movie movie={movie} imagePath={`${baseUrl.current}${imageSize.current}`}/>
            <p>Additional infoemation</p>
            <NavLink to='cast'>Cast</NavLink>
            <NavLink to='reviews'>Reviews</NavLink>
            <Outlet/>
        </section>
    )
}
export default MovieDetails;