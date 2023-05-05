import { useEffect, useState } from "react";
import { NavLink, useLocation} from "react-router-dom";
const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const location = useLocation()
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=053b6502bd056126a1f9a95166dc9ace')
        .then(response => response.json())
        .then(({results}) => setTrendingFilms(results))
    }, [])
    return(
        <div>
            <h2>Trending today</h2>
            <ul>
                {trendingFilms.map(({id, title})=><li key={`${id}`}><NavLink to={`movies/${id}`} state={{form: location}}>{title}</NavLink></li>)}
            </ul>
        </div>
    )
}
export default Home;