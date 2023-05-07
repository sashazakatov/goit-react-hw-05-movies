import { useEffect, useState } from "react";
import { fetchHome } from 'Api'
import MovieList from "components/MovieList";
import Loader from "components/Loader";

import { Title } from './Home.styled'

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const [ loader, setLeader ] = useState(false);

    useEffect(()=>{
        fetchHome()
        .then((results) => { setLeader(true); return setTrendingFilms(results)})
        .catch()
        .finally(() => setLeader(false));
    }, [])
    return(
        <>
            <Title>Trending today</Title>
            { loader && <Loader/> }
            { !loader && <MovieList movies={trendingFilms} />}
        </>
    )
}
export default Home;