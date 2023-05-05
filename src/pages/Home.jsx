import { useEffect, useState } from "react";
import { NavLink, useLocation} from "react-router-dom";
import { fetchHome } from 'Api'

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const location = useLocation()
    useEffect(()=>{
        fetchHome()
        .then((results) => setTrendingFilms(results))
        .catch();
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