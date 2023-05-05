import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from 'Api';

const Reviews = () => {
    const {movieId} = useParams();
    const [results, setResults] = useState([]);
    useEffect(()=>{

        fetchReviews(movieId)
        .then(results => setResults(results));

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