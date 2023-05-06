import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from 'Api'
import MovieList from 'components/MovieList'
import Form from "components/Form";

const Movies = () => {
    const [ movies, setMovies ] = useState([]);
    const [ searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if(query === ''){
            return setSearchParams({});
        }

        fetchMovies(query)
        .then((results)=> setMovies(results))
    }, [query, setSearchParams])

    const handelSubmit = (q = '') => {
        setSearchParams({query: q});
    }
    
    return(
        <>
            <Form onSubmit={handelSubmit} q={query}/>
            <MovieList movies={movies}/>
        </>
    )
}
export default Movies;