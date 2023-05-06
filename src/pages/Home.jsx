import { useEffect, useState } from "react";
import { fetchHome } from 'Api'
import MovieList from "components/MovieList";
import Loader from "components/Loader";

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
        <section>
            <h2>Trending today</h2>
            { loader && <Loader/> }
            { !loader && <MovieList movies={trendingFilms} />}
        </section>
    )
}
export default Home;