import { useEffect, useState } from "react";
import { fetchHome } from 'Api'
import MovieList from "components/MovieList";

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    useEffect(()=>{
        fetchHome()
        .then((results) => setTrendingFilms(results))
        .catch();
    }, [])
    return(
        <section>
            <h2>Trending today</h2>
            <MovieList movies={trendingFilms}/>
        </section>
    )
}
export default Home;