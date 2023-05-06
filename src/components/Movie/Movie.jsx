const Movie = ({ movie, imagePath }) => {

    return(
        <div>
            <h1>{movie?.title} ({movie?.release_date.slice(0, 4)})</h1>
            <img src={`${imagePath}${movie?.poster_path}`} alt={movie?.title} />
            {/* <p>User Score: {movie.userScore}</p> */}
            <h2>Overview</h2>
            <p>{movie?.overview}</p>
            <h2>Genres</h2>
            <ul>
                {movie?.genres.map(({id, name}) => <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default Movie;