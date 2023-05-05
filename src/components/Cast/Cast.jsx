import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const {movieId} = useParams();
    const [credits, setCredits] = useState([]);
    const [configuration, setConfiguration] = useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=053b6502bd056126a1f9a95166dc9ace`)
        .then(response => response.json())
        .then(response => {setCredits(response.cast); console.log(response)});

        fetch('https://api.themoviedb.org/3/configuration?api_key=053b6502bd056126a1f9a95166dc9ace')
        .then(response => response.json())
        .then(({images}) => {setConfiguration({base_url: images.base_url, size: images.poster_sizes[0]});})    
    }, [movieId])
    return(
        <ul>
            {credits.map((credit) => <li key={credit.id}>
                <img src={`${configuration.base_url}${configuration.size}${credit.profile_path ?? ''    }`} alt={credit.name} />
                <p>{credit.name}</p>
                <p>Character: {credit.character}</p>
            </li>)}
        </ul>
    )
}
export default Cast;