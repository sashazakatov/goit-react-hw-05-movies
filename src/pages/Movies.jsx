import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from 'Api'
import MovieList from 'components/MovieList'
import Form from "components/Form";

import Loader from "components/Loader";

const Movies = () => {
    const [ movies, setMovies ] = useState([]);
    const [ loader, setLeader ] = useState(false);
    const [ searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';


    useEffect(() => {
        if(query === ''){
            return setSearchParams({});
        }
        setLeader(true);
        fetchMovies(query)
        .then((results)=> setMovies(results))
        .finally(() => setLeader(false))
    }, [query, setSearchParams])

    const handelSubmit = (q = '') => {
        setSearchParams({query: q});
    }
    
    return(
        <>
            <Form onSubmit={handelSubmit} q={query}/>
            { loader && <Loader/> }
            { !loader && <MovieList movies={movies} />}
        </>
    )
}
export default Movies;