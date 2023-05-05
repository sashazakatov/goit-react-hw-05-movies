import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits, fetchСonfiguration } from 'Api'


const Cast = () => {
    const {movieId} = useParams();
    const [credits, setCredits] = useState([]);
    const baseUrl = useRef();
    const imageSize = useRef();

    useEffect(()=>{

        fetchCredits(movieId)
        .then(cast => setCredits(cast));

        fetchСonfiguration()
        .then(({logo_sizes, base_url}) => {
            baseUrl.current = base_url;
            imageSize.current = logo_sizes[1];
        })
    }, [movieId])
    return(
        <ul>
            {credits.map((credit) => <li key={credit.id}>
                <img src={`${baseUrl.current}${imageSize.current}${credit.profile_path ?? ''}`} alt={credit.name} />
                <p>{credit.name}</p>
                <p>Character: {credit.character}</p>
            </li>)}
        </ul>
    )
}
export default Cast;