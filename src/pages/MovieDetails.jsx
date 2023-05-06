import { useEffect, useState, useRef, Suspense } from "react";
import { Outlet, NavLink, useParams, useLocation } from "react-router-dom";
import { fetchСonfiguration, fetchMovieDetails } from 'Api';
import { sizeImages } from 'options/sizeImage';
import Loader from "components/Loader";

const MovieDetails = () => {
    const {movieId} = useParams('');
    const [movie, setMovie] = useState(null);
    const baseUrl = useRef(null);
    const imageSize = useRef(null);
    const location = useLocation();
    const backLink = location.state?.from ?? '/'; 

    useEffect(()=>{
        fetchСonfiguration()
        .then(({backdrop_sizes, base_url}) => {
            baseUrl.current = base_url; 
            imageSize.current = backdrop_sizes[sizeImages.SMALLEST];
        });

        fetchMovieDetails(movieId)
        .then(({title, release_date, poster_path, overview, genres, vote_average}) =>
            setMovie({title, release_date, poster_path, overview, genres, vote_average})
        )
    }, [movieId])

    return(
        <section>
            {!movie && <Loader/>}
            {movie &&  <>
                <NavLink to={backLink}>Go back</NavLink>
                <h1>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
                <img src={`${baseUrl.current}${imageSize.current}${movie.poster_path}`} alt={movie.title} />
                <p>User Score: {parseInt(movie.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movie?.overview}</p>
                <h2>Genres</h2>
                <ul>
                    {movie?.genres.map(({id, name}) => <li key={id}>{name}</li>)}
                </ul>
                <p>Additional infoemation</p>
                <NavLink to='cast'>Cast</NavLink>
                <NavLink to='reviews'>Reviews</NavLink>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </>}
        </section>
    )
}
export default MovieDetails;