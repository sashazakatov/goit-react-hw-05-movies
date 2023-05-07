import { useEffect, useState, useRef, Suspense } from "react";
import { Outlet, NavLink, useParams, useLocation } from "react-router-dom";
import { fetchСonfiguration, fetchMovieDetails } from 'Api';
import { sizeImages } from 'options/sizeImage';
import Loader from "components/Loader";

import { Title, InformationMovie, Div, Span, BackLink, Links } from './MovieDetails.styled';

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
        <div>
            {!movie && <Loader/>}
            {movie &&  <>
                <BackLink to={backLink}>Go back</BackLink>
                <InformationMovie>
                <Div>
                    <Title>{movie.title} ({movie.release_date.slice(0, 4)})</Title>
                    <img src={`${baseUrl.current}${imageSize.current}${movie.poster_path}`} alt={movie.title} width={300}/>
                    <p>User Score: {parseInt(movie.vote_average * 10)}%</p>
                </Div>
                <div>
                    <h2>Overview</h2>
                    <p>{movie?.overview}</p>
                    <h2>Genres:</h2>
                    <ul>
                        {movie?.genres.map(({id, name}) => <li key={id}>{name}</li>)}
                    </ul>
                </div>
                </InformationMovie>
                <Span>
                    <h2>Additional infoemation</h2>
                    <span>
                        <Links to='cast'>Cast</Links>
                        <Links to='reviews'>Reviews</Links>
                    </span>
                </Span>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
            </>}
        </div>
    )
}
export default MovieDetails;