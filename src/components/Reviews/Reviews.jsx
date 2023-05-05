import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from 'Api';

const Reviews = () => {
    const {movieId} = useParams();
    const [results, setResults] = useState([]);
    useEffect(()=>{

        fetchReviews(movieId)
        .then(results => setResults(results));

            // fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=053b6502bd056126a1f9a95166dc9ace&language=en-US&page=1`)
            // .then(response => response.json())
            // .then(response => setResults(response.results)); 
    }, [movieId])

    return(
        <ul>
            {results.map(({id, author, content}) => <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
            </li>)}
        </ul>
    )
}
export default Reviews;